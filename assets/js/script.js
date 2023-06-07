/**
 * Quiz data with questions, options, and answers.
 * The questions have a question, options, and an array of answers with 
 * different points values.
 */

//The code that assigns points to each of the quiz answers was adapted from Stackoverflow.
const quizData = [
    {
      question: "Which of the following energy sources is the most sustainable?",
      options: [
        { option: "Coal", points: 1 },
        { option: "Natural gas", points: 2 },
        { option: "Nuclear power", points: 3 },
        { option: "Wind power", points: 4 },
        { option: "Solar power", points: 5 }
      ],
      answer: 4
    },
    {
      question: "Which transportation method is the most sustainable for short distances?",
      options: [
        { option: "Walking", points: 5 },
        { option: "Cycling", points: 4 },
        { option: "Carpooling", points: 3 },
        { option: "Public transportation", points: 2 },
        { option: "Driving alone in a car", points: 1 }
      ],
      answer: 0
    },
    {
      question: "Which household action helps conserve water the most?",
      options: [
        { option: "Taking shorter showers", points: 4 },
        { option: "Fixing leaky faucets", points: 5 },
        { option: "Using a dishwasher instead of hand washing", points: 3 },
        { option: "Installing low-flow toilets", points: 2 },
        { option: "Watering the garden during peak hours", points: 1 }
      ],
      answer: 1
    },
    {
      question: "Which food choice has the lowest carbon footprint?",
      options: [
        { option: "Beef", points: 1 },
        { option: "Chicken", points: 2 },
        { option: "Pork", points: 3 },
        { option: "Fish", points: 4 },
        { option: "Plant-based meal", points: 5 }
      ],
      answer: 4
    },
    {
      question: "Which waste disposal method is the most environmentally friendly?",
      options: [
        { option: "Landfill", points: 1 },
        { option: "Incineration", points: 2 },
        { option: "Recycling", points: 4 },
        { option: "Composting", points: 5 },
        { option: "Dumping in water bodies", points: 1 }
      ],
      answer: 2
    },
    {
      question: "Which action contributes the most to reducing greenhouse gas emissions?",
      options: [
        { option: "Turning off lights when not in use", points: 3 },
        { option: "Unplugging electronic devices", points: 4 },
        { option: "Using energy-efficient appliances", points: 5 },
        { option: "Taking shorter showers", points: 2 },
        { option: "Using plastic bags instead of reusable bags", points: 1 }
      ],
      answer: 2
    },
    {
      question: "Which material is the most sustainable for packaging?",
      options: [
        { option: "Plastic", points: 1 },
        { option: "Glass", points: 3 },
        { option: "Paper", points: 2 },
        { option: "Biodegradable materials", points: 4 },
        { option: "Reusable containers", points: 5 }
      ],
      answer: 3
    },
    {
      question: "Which farming practice is the most sustainable?",
      options: [
        { option: "Conventional farming with pesticides", points: 1 },
        { option: "Organic farming without pesticides", points: 5 },
        { option: "Vertical farming", points: 3 },
        { option: "Hydroponics", points: 4 },
        { option: "Genetically modified crops", points: 2 }
      ],
      answer: 1
    },
    {
      question: "Which action contributes the most to reducing plastic pollution?",
      options: [
        { option: "Using single-use plastic bags", points: 1 },
        { option: "Recycling plastic bottles", points: 3 },
        { option: "Using reusable water bottles", points: 5 },
        { option: "Buying products with excessive plastic packaging", points: 2 },
        { option: "Using plastic straws", points: 1 }
      ],
      answer: 2
    },
    {
      question: "Which lifestyle choice is the most sustainable?",
      options: [
        { option: "Consuming fast fashion", points: 1 },
        { option: "Supporting local and sustainable brands", points: 5 },
        { option: "Minimalism and reducing waste", points: 4 },
        { option: "Using disposable products", points: 1 },
        { option: "Driving a gas-guzzling vehicle", points: 2 }
      ],
      answer: 2
    }
  ];
    
  // This is the container element for the quiz.
  const quizContainer = document.getElementById("quiz-container");
  // This is the container element displaying the current question.
  const questionContainer = document.getElementById("question-container");
  // This is the container element for displaying the options.
  const optionContainer = document.getElementById("option-container");
  // This is the submit button element.
  const submitButton = document.getElementById("submit-btn");
  // This is the container element displaying the quiz result.
  const resultContainer = document.querySelector("#result-container");
  // This is the restart button element.
  const restart = document.getElementById("again");
  // This is the progress bar element.
  const progressBar = document.getElementById("myBar");
  // Represents the index of the current question in the quiz data array.
  let currentQuestion = 0;
  // Users score in the quiz.
  let score = 0;
  // Initally hides the restart button
  restart.style.visibility = "hidden";
  /**
  * Loads the current question and the options into the quiz container.
  */
  function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionContainer.innerText = currentQuizData.question;
    optionContainer.innerHTML = "";
    currentQuizData.options.forEach((option, index) => {
      const optionElement = document.createElement("div");
      optionElement.classList.add("option");
      optionElement.innerText = option.option;
      optionElement.addEventListener("click", () => selectOption(index));
      optionContainer.appendChild(optionElement);
    });
  }
  /**
  * This function handles option selection
  */
  function selectOption(optionIndex) {
    const currentQuizData = quizData[currentQuestion];
    score = score + currentQuizData.options[optionIndex].points;
    console.log('hey that right!');
    console.log('score: ', score);
    const options = optionContainer.getElementsByClassName("option");
    Array.from(options).forEach(option => {
      option.removeEventListener("click", selectOption);
      option.classList.add("disabled");
    });
    showNextQuestion();
  }
  /**
  * Displays the next question in the quiz. If all questions have been answered 
  * it shows the result.
  */
  function showNextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
    // Update progress percentage
    // The progress bar feature was modified from code available at W3 Schools.
    const progressPercentage = (currentQuestion / quizData.length) * 100;
    progressBar.style.width = progressPercentage + "%";
    progressBar.innerHTML = progressPercentage + "%";
  }
  /**
  * Shows the final result of the quiz.
  */
  function showResult() {
    quizContainer.style.display = "none";
    resultContainer.style.display = 'block';
    restart.style.visibility = 'visible';
    const percentageScore = (score / 50) * 100;
    let responseMessage;
    // Define the response messages based on the percentage score
    if (percentageScore >= 0 && percentageScore <= 20) {
      responseMessage = "Oh no! We are all doomed. Maybe it's time to start growing your own oxygen.";
    } else if (percentageScore > 10 && percentageScore <= 40) {
      responseMessage = "Well, at least you're not causing immediate planetary catastrophe. But we still have a long way to go.";
    } else if (percentageScore > 20 && percentageScore <= 60) {
      responseMessage = "You're making progress! Keep it up and we might just survive long enough for the robots to take over.";
    } else if (percentageScore > 30 && percentageScore <= 80) {
      responseMessage = "Impressive! You're on your way to becoming an eco warrior. Keep fighting the good fight!";
    } else if (percentageScore > 40 && percentageScore <= 90) {
      responseMessage = "Congratulations, you magnificent eco warrior! With your sustainable superpowers, you're destined to save the world from impending doom.";
    } else {
      responseMessage = "Is that you Greta?";
    }
    resultContainer.innerHTML = `
      <p>You scored ${score} out of a possible 50</p>
      <p>${responseMessage}</p>
    `;
  }
  /**
  * Shuffles the quiz questions randomly.
  */  
  function shuffleQuizData() {
    for (let i = quizData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [quizData[i], quizData[j]] = [quizData[j], quizData[i]];
    }
  }
  /**
  * Sets the initial progress bar percentage.
  */
  function setInitialProgressBar() {
    progressBar.style.width = "0%";
    progressBar.innerHTML = "0%";
  }
  setInitialProgressBar();
  shuffleQuizData();
  loadQuestion();