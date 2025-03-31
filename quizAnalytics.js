
if (!localStorage.getItem('quizAnalytics')) {
    localStorage.setItem('quizAnalytics', JSON.stringify({
      totalQuizzes: 0,
      skillScores: {},
      recentResults: []
    }));
  }

  function storeQuizResults(quizData) {

    const analytics = JSON.parse(localStorage.getItem('quizAnalytics'));

    analytics.totalQuizzes += 1;

    analytics.recentResults.unshift(quizData);
    if (analytics.recentResults.length > 10) {
      analytics.recentResults.pop();
    }

    quizData.skillResults.forEach(item => {
      if (!analytics.skillScores[item.skill]) {
        analytics.skillScores[item.skill] = {
          totalQuestions: 0,
          correctAnswers: 0,
          attempts: 0
        };
      }
      
      analytics.skillScores[item.skill].attempts += 1;
      analytics.skillScores[item.skill].totalQuestions += 1;
      
      if (item.isCorrect) {
        analytics.skillScores[item.skill].correctAnswers += 1;
      }
    });
    
    localStorage.setItem('quizAnalytics', JSON.stringify(analytics));
  }
  
  function getQuizAnalytics() {
    return JSON.parse(localStorage.getItem('quizAnalytics'));
  }
  
  function clearQuizAnalytics() {
    localStorage.setItem('quizAnalytics', JSON.stringify({
      totalQuizzes: 0,
      skillScores: {},
      recentResults: []
    }));
  }
  
  window.quizAnalytics = {
    storeQuizResults,
    getQuizAnalytics,
    clearQuizAnalytics
  };