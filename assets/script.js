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
  
  const quizContainer = document.getElementById("quiz-container");
  const questionContainer = document.getElementById("question-container");
  const optionContainer = document.getElementById("option-container");
  const submitButton = document.getElementById("submit-btn");
  const resultContainer = document.querySelector("#result-container");
  const restart = document.getElementById("again");
 
  
  let currentQuestion = 0;
  let score = 0;
  
  restart.style.visibility = "hidden";

  // Function to load question and options

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