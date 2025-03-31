document.addEventListener('DOMContentLoaded', function() {
    // Set the current year in the footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Get DOM elements
    const startButton = document.getElementById('start-button');
    const subjectSelector = document.getElementById('subject-selector');
    const quizContainer = document.getElementById('quiz-container');
    const resultsContainer = document.getElementById('results-container');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const restartButton = document.getElementById('restart-button');
    const questionNumber = document.getElementById('question-number');
    const questionSubject = document.getElementById('question-subject');
    const questionText = document.getElementById('question-text');
    const multipleChoice = document.getElementById('multiple-choice');
    const shortAnswer = document.getElementById('short-answer');
    const shortAnswerInput = document.getElementById('short-answer-input');
    
    // Quiz state
    let selectedSubjects = [];
    let quizQuestions = [];
    let currentQuestionIndex = 0;
    let userAnswers = [];
    
    // Event listeners
    startButton.addEventListener('click', startQuiz);
    prevButton.addEventListener('click', showPreviousQuestion);
    nextButton.addEventListener('click', handleNextButton);
    restartButton.addEventListener('click', restartQuiz);
    
    // Functions
    function startQuiz() {
      // Get selected subjects
      const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
      if (checkboxes.length === 0) {
        alert('Please select at least one subject');
        return;
      }
      
      selectedSubjects = Array.from(checkboxes).map(checkbox => checkbox.value);
      
      // Generate quiz questions
      quizQuestions = [];
      selectedSubjects.forEach(subject => {
        if (quizData[subject]) {
          quizQuestions.push(...quizData[subject]);
        }
      });
      
      // Shuffle the questions
      quizQuestions = shuffleArray(quizQuestions);
      
      // Initialize user answers array
      userAnswers = Array(quizQuestions.length).fill(null);
      
      // Start the quiz
      currentQuestionIndex = 0;
      subjectSelector.classList.remove('active');
      subjectSelector.classList.add('hidden');
      quizContainer.classList.remove('hidden');
      quizContainer.classList.add('active');
      showQuestion(currentQuestionIndex);
    }
    
    function showQuestion(index) {
      const question = quizQuestions[index];
      
      // Update question number and subject
      questionNumber.textContent = `Question ${index + 1} of ${quizQuestions.length}`;
      
      // Find the subject this question belongs to
      for (const subject in quizData) {
        if (quizData[subject].some(q => q.id === question.id)) {
          questionSubject.textContent = `Subject: ${subject}`;
          break;
        }
      }
      
      // Update question text
      questionText.textContent = question.question;
      
      // Show appropriate answer type
      if (question.type === 'multiple-choice') {
        multipleChoice.classList.remove('hidden');
        shortAnswer.classList.add('hidden');
        
        // Clear previous options
        multipleChoice.innerHTML = '';
        
        // Add options
        question.options.forEach((option, optionIndex) => {
          const optionDiv = document.createElement('div');
          optionDiv.className = 'option';
          
          const input = document.createElement('input');
          input.type = 'radio';
          input.name = 'answer';
          input.id = `option${optionIndex + 1}`;
          input.value = optionIndex;
          
          // Check if user has already answered this question
          if (userAnswers[index] !== null && userAnswers[index].toString() === optionIndex.toString()) {
            input.checked = true;
          }
          
          const label = document.createElement('label');
          label.htmlFor = `option${optionIndex + 1}`;
          label.textContent = option;
          
          optionDiv.appendChild(input);
          optionDiv.appendChild(label);
          multipleChoice.appendChild(optionDiv);
        });
      } else if (question.type === 'short-answer') {
        multipleChoice.classList.add('hidden');
        shortAnswer.classList.remove('hidden');
        
        // Set previous answer if exists
        shortAnswerInput.value = userAnswers[index] || '';
      }
      
      // Update navigation buttons
      prevButton.disabled = index === 0;
      if (index === quizQuestions.length - 1) {
        nextButton.textContent = 'Finish Quiz';
      } else {
        nextButton.textContent = 'Next';
      }
    }
    
    function showPreviousQuestion() {
      if (currentQuestionIndex > 0) {
        saveAnswer();
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
      }
    }
    
    function handleNextButton() {
      saveAnswer();
      
      if (currentQuestionIndex < quizQuestions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
      } else {
        finishQuiz();
      }
    }
    
    function saveAnswer() {
      const currentQuestion = quizQuestions[currentQuestionIndex];
      
      if (currentQuestion.type === 'multiple-choice') {
        const selectedOption = document.querySelector('input[name="answer"]:checked');
        userAnswers[currentQuestionIndex] = selectedOption ? selectedOption.value : null;
      } else if (currentQuestion.type === 'short-answer') {
        userAnswers[currentQuestionIndex] = shortAnswerInput.value;
      }
    }
    
    function finishQuiz() {
      // Hide quiz container and show results
      quizContainer.classList.remove('active');
      quizContainer.classList.add('hidden');
      resultsContainer.classList.remove('hidden');
      resultsContainer.classList.add('active');
      
      // Calculate results
      const results = calculateResults();
      displayResults(results);
    }
    
    function calculateResults() {
      const results = {
        totalQuestions: quizQuestions.length,
        correctAnswers: 0,
        subjectResults: {},
        detailedResults: []
      };
      
      // Initialize subject results
      selectedSubjects.forEach(subject => {
        results.subjectResults[subject] = {
          total: 0,
          correct: 0
        };
      });
      
      // Calculate scores
      quizQuestions.forEach((question, index) => {
        let isCorrect = false;
        let subjectName = '';
        
        // Find which subject this question belongs to
        for (const subject in quizData) {
          if (quizData[subject].some(q => q.id === question.id)) {
            subjectName = subject;
            results.subjectResults[subject].total++;
            break;
          }
        }
        
        if (question.type === 'multiple-choice') {
          // For multiple choice, we have a definitive correct answer
          if (userAnswers[index] !== null && parseInt(userAnswers[index]) === question.correctAnswer) {
            isCorrect = true;
            results.correctAnswers++;
            results.subjectResults[subjectName].correct++;
          }
        } else if (question.type === 'short-answer') {
          // For short answer, we need manual grading in a real app
          // For demo purposes, we'll count non-empty answers as "partially correct"
          if (userAnswers[index] && userAnswers[index].trim().length > 0) {
            isCorrect = 'partial';
            results.correctAnswers += 0.5;
            results.subjectResults[subjectName].correct += 0.5;
          }
        }
        
        // Add detailed result
        results.detailedResults.push({
          question: question.question,
          userAnswer: question.type === 'multiple-choice' && userAnswers[index] !== null 
            ? question.options[userAnswers[index]] 
            : userAnswers[index],
          correctAnswer: question.type === 'multiple-choice' 
            ? question.options[question.correctAnswer] 
            : question.correctAnswer,
          isCorrect: isCorrect,
          subject: subjectName,
          type: question.type
        });
      });
      
      return results;
    }
    
    function displayResults(results) {
      // Display overall score
      const scorePercentage = Math.round((results.correctAnswers / results.totalQuestions) * 100);
      document.getElementById('score-percentage').textContent = `${scorePercentage}%`;
      document.getElementById('score-fraction').textContent = `${results.correctAnswers}/${results.totalQuestions}`;
      
      // Display subject-specific results
      const subjectsSummary = document.getElementById('subjects-summary');
      subjectsSummary.innerHTML = '';
      
      for (const subject in results.subjectResults) {
        if (results.subjectResults[subject].total > 0) {
          const subjectResult = document.createElement('div');
          subjectResult.className = 'subject-result';
          
          const subjectScore = Math.round((results.subjectResults[subject].correct / results.subjectResults[subject].total) * 100);
          
          const subjectTitle = document.createElement('h4');
          subjectTitle.textContent = subject;
          
          const scoreElement = document.createElement('div');
          scoreElement.className = 'subject-score';
          scoreElement.textContent = `${subjectScore}%`;
          
          const scoreDetails = document.createElement('div');
          scoreDetails.className = 'subject-score-details';
          scoreDetails.textContent = `${results.subjectResults[subject].correct}/${results.subjectResults[subject].total}`;
          
          subjectResult.appendChild(subjectTitle);
          subjectResult.appendChild(scoreElement);
          subjectResult.appendChild(scoreDetails);
          subjectsSummary.appendChild(subjectResult);
        }
      }
      
      // Display detailed results
      const detailsList = document.getElementById('results-details-list');
      detailsList.innerHTML = '';
      
      results.detailedResults.forEach((result, index) => {
        const resultItem = document.createElement('div');
        resultItem.className = 'result-item';
        
        const questionElement = document.createElement('div');
        questionElement.className = 'result-question';
        questionElement.textContent = `${index + 1}. ${result.question}`;
        
        const subjectElement = document.createElement('div');
        subjectElement.className = 'result-subject';
        subjectElement.textContent = `Subject: ${result.subject}`;
        
        const userAnswerElement = document.createElement('div');
        userAnswerElement.className = 'result-user-answer';
        userAnswerElement.textContent = `Your answer: ${result.userAnswer || 'No answer provided'}`;
        
        let statusClass = '';
        let statusText = '';
        
        if (result.isCorrect === true) {
          statusClass = 'correct';
          statusText = 'Correct';
        } else if (result.isCorrect === 'partial') {
          statusClass = 'partial';
          statusText = 'Partially Correct (Manual grading would be required)';
        } else {
          statusClass = 'incorrect';
          statusText = 'Incorrect';
        }
        
        const statusElement = document.createElement('div');
        statusElement.className = `result-status ${statusClass}`;
        statusElement.textContent = statusText;
        
        if (result.isCorrect !== true) {
          const correctAnswerElement = document.createElement('div');
          correctAnswerElement.className = 'result-correct-answer';
          correctAnswerElement.textContent = `Correct answer: ${result.correctAnswer}`;
          resultItem.appendChild(correctAnswerElement);
        }
        
        resultItem.appendChild(questionElement);
        resultItem.appendChild(subjectElement);
        resultItem.appendChild(userAnswerElement);
        resultItem.appendChild(statusElement);
        
        detailsList.appendChild(resultItem);
      });
    }
    
    function restartQuiz() {
      // Clear previous selections
      const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach(checkbox => {
        checkbox.checked = false;
      });
      
      // Reset state
      selectedSubjects = [];
      quizQuestions = [];
      currentQuestionIndex = 0;
      userAnswers = [];
      
      // Show subject selector
      resultsContainer.classList.remove('active');
      resultsContainer.classList.add('hidden');
      subjectSelector.classList.remove('hidden');
      subjectSelector.classList.add('active');
    }
    
    // Utility function to shuffle array
    function shuffleArray(array) {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    }
  });
  