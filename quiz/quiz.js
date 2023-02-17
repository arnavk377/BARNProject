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
    }
  ];

function showQuestions() {
    questionContainer.innerText = questions[0].question;
    answerButtonsContainer.innerHTML = '';
    questions[0].answers.forEach(answer => {
        answerButtonsContainer.innerHTML += `<button>${answer.text}</button>`;
    });
}

showQuestions();

  