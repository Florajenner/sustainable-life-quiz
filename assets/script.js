const quizData = [
    {
    question: "Which of the following energy sources is the most sustainable?",
    options: [
    { option: "Coal" },
    { option: "Natural gas" },
    { option: "Nuclear power" },
    { option: "Wind power" },
    { option: "Solar power" }
    ],
    answer: 4
    },
    {
    question: "Which transportation method is the most sustainable for short distances?",
    options: [
    { option: "Walking" },
    { option: "Cycling" },
    { option: "Carpooling" },
    { option: "Public transportation" },
    { option: "Driving alone in a car" }
    ],
    answer: 0
    },
    {
    question: "Which household action helps conserve water the most?",
    options: [
    { option: "Taking shorter showers" },
    { option: "Fixing leaky faucets" },
    { option: "Using a dishwasher instead of hand washing" },
    { option: "Installing low-flow toilets" },
    { option: "Watering the garden during peak hours" }
    ],
    answer: 1
    },
    {
    question: "Which food choice has the lowest carbon footprint?",
    options: [
    { option: "Beef" },
    { option: "Chicken" },
    { option: "Pork" },
    { option: "Fish" },
    { option: "Plant-based meal" }
    ],
    answer: 4
    },
    {
    question: "Which waste disposal method is the most environmentally friendly?",
    options: [
    { option: "Landfill" },
    { option: "Incineration" },
    { option: "Recycling" },
    { option: "Composting" },
    { option: "Dumping in water bodies" }
    ],
    answer: 2
    },
    {
    question: "Which action contributes the most to reducing greenhouse gas emissions?",
    options: [
    { option: "Turning off lights when not in use" },
    { option: "Unplugging electronic devices" },
    { option: "Using energy-efficient appliances" },
    { option: "Taking shorter showers" },
    { option: "Using plastic bags instead of reusable bags" }
    ],
    answer: 2
    },
    {
    question: "Which material is the most sustainable for packaging?",
    options: [
    { option: "Plastic" },
    { option: "Glass" },
    { option: "Paper" },
    { option: "Biodegradable materials" },
    { option: "Reusable containers" }
    ],
    answer: 3
    },
    {
    question: "Which farming practice is the most sustainable?",
    options: [
    { option: "Conventional farming with pesticides" },
    { option: "Organic farming without pesticides" },
    { option: "Vertical farming" },
    { option: "Hydroponics" },
    { option: "Genetically modified crops" }
    ],
    answer: 1
    },
    {
    question: "Which action contributes the most to reducing plastic pollution?",
    options: [
    { option: "Using single-use plastic bags" },
    { option: "Recycling plastic bottles" },
    { option: "Using reusable water bottles" },
    { option: "Buying products with excessive plastic packaging" },
    { option: "Using plastic straws" }
    ],
    answer: 2
    },
    {
    question: "Which lifestyle choice is the most sustainable?",
    options: [
    { option: "Consuming fast fashion" },
    { option: "Supporting local and sustainable brands" },
    { option: "Minimalism and reducing waste" },
    { option: "Using disposable products" },
    { option: "Driving a gas-guzzling vehicle" }
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