const quizContainer = document.getElementById("quiz-container");
const questionContainer = document.getElementById("question-container");
const answerButtonsContainer = document.getElementById("answer-buttons-container");
const submitButton = document.getElementById("submit-button");
const resultContainer = document.getElementById("result-container");
const questions = [
  {
    question: "Which team has won the most Super Bowls?",
    answers: [
      { text: "Pittsburgh Steelers", correct: true },
      { text: "New England Patriots", correct: false },
      { text: "Dallas Cowboys", correct: false },
      { text: "San Francisco 49ers", correct: false },
    ],
  },
  {
    question: "Who is the all-time leading rusher in NFL history?",
    answers: [
      { text: "Emmitt Smith", correct: true },
      { text: "Walter Payton", correct: false },
      { text: "Barry Sanders", correct: false },
      { text: "Jim Brown", correct: false },
    ],
  },
  {
    question: "Which team has the most regular season wins in NFL history?",
    answers: [
      { text: "Green Bay Packers", correct: false },
      { text: "Chicago Bears", correct: false },
      { text: "New England Patriots", correct: false },
      { text: "Dallas Cowboys", correct: true },
    ],
  },
  {
    question: "Who is the only quarterback to win a Super Bowl with two different teams?",
    answers: [
      { text: "Joe Montana", correct: false },
      { text: "Peyton Manning", correct: false },
      { text: "Brett Favre", correct: false },
      { text: "John Elway", correct: true },
    ],
  },
  {
    question: "Who is the only player to rush for 2,000 yards in a single season?",
    answers: [
      { text: "Barry Sanders", correct: false },
      { text: "Eric Dickerson", correct: true },
      { text: "Walter Payton", correct: false },
      { text: "Jim Brown", correct: false },
    ],
  },
  {
    question: "Which team has the longest active playoff drought (as of the end of the 2021 season)?",
    answers: [
      { text: "New York Jets", correct: false },
      { text: "Cleveland Browns", correct: false },
      { text: "Detroit Lions", correct: true },
      { text: "Houston Texans", correct: false },
    ],
  },
  {
    question: "Who is the NFL's all-time leader in touchdown passes?",
    answers: [
      { text: "Brett Favre", correct: false },
      { text: "Peyton Manning", correct: true },
      { text: "Tom Brady", correct: false },
      { text: "Dan Marino", correct: false },
    ],
  },
  {
    question: "Who is the only player to win five Super Bowl MVP awards?",
    answers: [
      { text: "Tom Brady", correct: true },
      { text: "Joe Montana", correct: false },
      { text: "Terry Bradshaw", correct: false },
      { text: "Bart Starr", correct: false },
    ],
  },
  {
    question: "Which NFL team was the first to win three Super Bowls in a row?",
    answers: [
      { text: "Pittsburgh Steelers", correct: false },
      { text: "Dallas Cowboys", correct: true },
      { text: "San Francisco 49ers", correct: false },
      { text: "New England Patriots", correct: false },
    ],
  }
];


let currentQuestionIndex = 0;

function renderQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionContainer.innerText = currentQuestion.question;
  answerButtonsContainer.innerHTML = "";
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("answer-btn");
    if (answer.correct) {
      button.dataset.correct = true;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsContainer.appendChild(button);
  });
}

function showQuestions() {
  renderQuestion();
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct === "true";
  if (correct) {
    resultContainer.innerText = "Correct!";
  } else {
    resultContainer.innerText = "Incorrect!";
  }
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    renderQuestion();
  } else {
    submitButton.innerText = "Finish";
    submitButton.removeEventListener("click", checkAnswers);
    submitButton.addEventListener("click", finishQuiz);
  }
}

function checkAnswers() {
  const answerButtons = answerButtonsContainer.querySelectorAll(".answer-btn");
  answerButtons.forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    } else {
      button.classList.add("incorrect");
    }
  });
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    renderQuestion();
  } else {
    submitButton.innerText = "Finish";
    submitButton.removeEventListener("click", checkAnswers);
    submitButton.addEventListener("click", finishQuiz);
  }
}

function finishQuiz() {
  quizContainer.innerHTML = `
    <h1>Quiz Complete!</h1>
    <p>You scored ${calculateScore()} out of ${questions.length} questions.</p>
    <button onclick="location.reload()">Restart Quiz</button>
  `;
}

function calculateScore() {
  let score = 0;
  questions.forEach((question, index) => {
    const answerButtons = document.querySelectorAll(`#answer-buttons-container${index} button`);
    answerButtons.forEach(button => {
      if (button.classList.contains('selected')) {
        if (question.answers.find(answer => answer.text === button.innerText).correct) {
          score++;
        }
      }
    });
  });
  return score;
}


showQuestions();
submitButton.addEventListener("click", checkAnswers);
