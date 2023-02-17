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
  questions.forEach((question) => {
    const answerButtons = answerButtonsContainer.querySelectorAll(".answer-btn");
    answerButtons.forEach((button) => {
      if (button.dataset.correct === "true") {
        if (question.answers.includes(button.innerText)) {
          score++;
        }
      }
    });
  });
  return score;
}

showQuestions();
submitButton.addEventListener("click", checkAnswers);
