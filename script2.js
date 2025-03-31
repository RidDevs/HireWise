import { auth, onAuthStateChanged } from './firebase-config.js';
onAuthStateChanged(auth, (user) => {
    if (user) {
      
        console.log("User is signed in:", user);
     
        const userID = user.uid;
        console.log(userID);
    } else {
        
        console.log("User is signed out.");
        window.location.href = 'login.html'; 
    }
});
document.addEventListener('DOMContentLoaded', function() {
        localStorage.removeItem('skillsData');
    const dropZone = document.getElementById('dropZone');
    const resumeInput = document.getElementById('resumeInput');
    const fileName = document.getElementById('fileName');
    const submitBtn = document.getElementById('submitBtn');
    const loadingContainer = document.getElementById('loadingContainer');
    const skillsContainer = document.getElementById('skillsContainer');
    const skillsTags = document.getElementById('skillsTags');
    const errorMessage = document.getElementById('errorMessage');
    const toast = document.getElementById('toast');
    const toastIcon = document.getElementById('toast-icon');
    const toastMessage = document.getElementById('toast-message');
    const uploadArea = document.querySelector('.upload-area');

    const colorClasses = [
        { bg: '#e3f2fd', text: '#1565c0' },
        { bg: '#e8f5e9', text: '#2e7d32' },
        { bg: '#f3e5f5', text: '#7b1fa2' },
        { bg: '#fff8e1', text: '#ff8f00' },
        { bg: '#fce4ec', text: '#c2185b' },
        { bg: '#e0f7fa', text: '#00838f' }
    ];

    ['dragenter', 'dragover'].forEach(eventName => {
        dropZone.addEventListener(eventName, highlight, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, unhighlight, false);
    });

    dropZone.addEventListener('drop', handleDrop, false);
    dropZone.addEventListener('click', () => resumeInput.click());
    resumeInput.addEventListener('change', handleFileSelect);
    submitBtn.addEventListener('click', handleUpload);

    function highlight(e) {
        e.preventDefault();
        e.stopPropagation();
        dropZone.classList.add('active');
    }

    function unhighlight(e) {
        e.preventDefault();
        e.stopPropagation();
        dropZone.classList.remove('active');
    }

    function handleDrop(e) {
        e.preventDefault();
        e.stopPropagation();
        handleFiles(e.dataTransfer.files);
    }

    function handleFileSelect(e) {
        handleFiles(e.target.files);
    }

    function handleFiles(files) {
        if (files.length === 0) return;
        const file = files[0];
        if (file.type !== 'application/pdf') {
            showToast('Please upload a PDF file', 'error');
            return;
        }
        fileName.textContent = file.name;
        submitBtn.disabled = false;
    }

    function handleUpload() {
        const file = resumeInput.files[0];
        if (!file) {
            showToast('Please select a file first', 'warning');
            return;
        }

        uploadArea.classList.add('hidden');
        loadingContainer.classList.remove('hidden');
        skillsContainer.classList.add('hidden');
        errorMessage.classList.add('hidden');

        const formData = new FormData();
        formData.append('resume', file);

        fetch('https://internal-07s2.onrender.com/upload', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Server error: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            loadingContainer.classList.add('hidden');
            localStorage.setItem('skillsData', JSON.stringify(data.skills));
            displaySkills(data.skills);
            showToast('Resume analyzed successfully!', 'success');
            
       
            setTimeout(() => {
                openQuizPage(data.skills);
            }, 1500);
        })
        .catch(error => {
            console.error('Error:', error);
            loadingContainer.classList.add('hidden');
            errorMessage.textContent = 'Error analyzing resume. Make sure the server is running on port 5000.';
            errorMessage.classList.remove('hidden');
            showToast('Error analyzing resume', 'error');
            uploadArea.classList.remove('hidden');
        });
    }

    function openQuizPage(skills) {
        localStorage.setItem('quizSkills', JSON.stringify(skills));
        
        window.location.href = 'quiz.html';
    }

    const storedSkills = localStorage.getItem('skillsData');
    if (storedSkills) {
        displaySkills(JSON.parse(storedSkills));
    }

    function displaySkills(skills) {
        skillsTags.innerHTML = '';
        if (skills.length === 0) {
            const noSkillsMsg = document.createElement('p');
            noSkillsMsg.textContent = 'No skills detected in the uploaded resume.';
            noSkillsMsg.style.color = 'var(--light-text)';
            skillsTags.appendChild(noSkillsMsg);
        } else {
            skills.forEach(skill => {
                const colorClass = getColorForSkill(skill);
                const skillTag = document.createElement('span');
                skillTag.className = 'skill-tag';
                skillTag.textContent = skill;
                skillTag.style.backgroundColor = colorClass.bg;
                skillTag.style.color = colorClass.text;
                skillsTags.appendChild(skillTag);
            });
        }
        skillsContainer.classList.remove('hidden');
        uploadArea.classList.remove('hidden');
    }

    function getColorForSkill(skill) {
        const hash = skill.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        return colorClasses[hash % colorClasses.length];
    }

    function showToast(message, type = 'success') {
        toastMessage.textContent = message;
        toastIcon.className = 'fas';
        if (type === 'success') {
            toastIcon.classList.add('fa-check-circle');
        } else if (type === 'error') {
            toastIcon.classList.add('fa-exclamation-circle');
        } else if (type === 'warning') {
            toastIcon.classList.add('fa-exclamation-triangle');
        }
        toast.classList.remove('hidden');
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                toast.classList.add('hidden');
            }, 300);
        }, 3000);
    }
});