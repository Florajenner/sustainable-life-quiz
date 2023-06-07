const quizData = [
    // Quiz questions
  ];
  
  const quizContainer = document.getElementById("quiz-container");
  const questionContainer = document.getElementById("question-container");
  const optionContainer = document.getElementById("option-container");
  const submitButton = document.getElementById("submit-btn");
  const resultContainer = document.querySelector("#result-container");
  const restart = document.getElementById("again");
 
  
  let currentQuestion = 0;
  let score = 0;
  
  restart.style.visibility = "hidden";