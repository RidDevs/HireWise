document.addEventListener('DOMContentLoaded', function() {
  
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
   
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
    

    let selectedSubjects = [];
    let quizQuestions = [];
    let currentQuestionIndex = 0;
    let userAnswers = [];

    startButton.addEventListener('click', startQuiz);
    prevButton.addEventListener('click', showPreviousQuestion);
    nextButton.addEventListener('click', handleNextButton);
    restartButton.addEventListener('click', restartQuiz);
    

    function startQuiz() {

      const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
      if (checkboxes.length === 0) {
        alert('Please select at least one subject');
        return;
      }
      
      selectedSubjects = Array.from(checkboxes).map(checkbox => checkbox.value);

      quizQuestions = [];
      selectedSubjects.forEach(subject => {
        if (quizData[subject]) {
          quizQuestions.push(...quizData[subject]);
        }
      });
      

      quizQuestions = shuffleArray(quizQuestions);
      

      userAnswers = Array(quizQuestions.length).fill(null);
      

      currentQuestionIndex = 0;
      subjectSelector.classList.remove('active');
      subjectSelector.classList.add('hidden');
      quizContainer.classList.remove('hidden');
      quizContainer.classList.add('active');
      showQuestion(currentQuestionIndex);
    }
    
    function showQuestion(index) {
      const question = quizQuestions[index];
      

      questionNumber.textContent = `Question ${index + 1} of ${quizQuestions.length}`;
      

      for (const subject in quizData) {
        if (quizData[subject].some(q => q.id === question.id)) {
          questionSubject.textContent = `Subject: ${subject}`;
          break;
        }
      }
      

      questionText.textContent = question.question;
      

      if (question.type === 'multiple-choice') {
        multipleChoice.classList.remove('hidden');
        shortAnswer.classList.add('hidden');
        

        multipleChoice.innerHTML = '';
        

        question.options.forEach((option, optionIndex) => {
          const optionDiv = document.createElement('div');
          optionDiv.className = 'option';
          
          const input = document.createElement('input');
          input.type = 'radio';
          input.name = 'answer';
          input.id = `option${optionIndex + 1}`;
          input.value = optionIndex;
          

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
        

        shortAnswerInput.value = userAnswers[index] || '';
      }
      

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
  
      quizContainer.classList.remove('active');
      quizContainer.classList.add('hidden');
      resultsContainer.classList.remove('hidden');
      resultsContainer.classList.add('active');
      

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
      

      selectedSubjects.forEach(subject => {
        results.subjectResults[subject] = {
          total: 0,
          correct: 0
        };
      });
      

      quizQuestions.forEach((question, index) => {
        let isCorrect = false;
        let subjectName = '';
        

        for (const subject in quizData) {
          if (quizData[subject].some(q => q.id === question.id)) {
            subjectName = subject;
            results.subjectResults[subject].total++;
            break;
          }
        }
        
        if (question.type === 'multiple-choice') {

          if (userAnswers[index] !== null && parseInt(userAnswers[index]) === question.correctAnswer) {
            isCorrect = true;
            results.correctAnswers++;
            results.subjectResults[subjectName].correct++;
          }
        } else if (question.type === 'short-answer') {
    
          if (userAnswers[index] && userAnswers[index].trim().length > 0) {
            isCorrect = 'partial';
            results.correctAnswers += 0.5;
            results.subjectResults[subjectName].correct += 0.5;
          }
        }
        

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
 
      const scorePercentage = Math.round((results.correctAnswers / results.totalQuestions) * 100);
      document.getElementById('score-percentage').textContent = `${scorePercentage}%`;
      document.getElementById('score-fraction').textContent = `${results.correctAnswers}/${results.totalQuestions}`;
      

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

      const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach(checkbox => {
        checkbox.checked = false;
      });
      

      selectedSubjects = [];
      quizQuestions = [];
      currentQuestionIndex = 0;
      userAnswers = [];
      
      resultsContainer.classList.remove('active');
      resultsContainer.classList.add('hidden');
      subjectSelector.classList.remove('hidden');
      subjectSelector.classList.add('active');
    }

    function shuffleArray(array) {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    }
  });
  