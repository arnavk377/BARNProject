<!DOCTYPE html>
<html>
  <head>
    <style>
      #quiz-form {
        width: 500px;
        margin: 0 auto;
        text-align: left;
      }
      .question {
        font-weight: bold;
        margin-top: 20px;
      }
      .options {
        margin-left: 20px;
      }
      .options label {
        display: block;
        margin-bottom: 10px;
      }
      #submit-btn {
        margin-top: 20px;
        padding: 10px 20px;
        background-color: brown;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
      .results {
        margin-top: 20px;
        font-weight: bold;
      }
      .correct {
        color: green;
      }
      .incorrect {
        color: red;
      }
    </style>
  </head>
  <body>
    <form id="quiz-form">
      <h1>NFL Quiz</h1>
    </form>
    <button id="submit-btn">Submit</button>
    <div class="results"></div>
    
<script>
      const questions = [
        {
          question: "Which NFL Logo is blue and red?",
          options: [
            "Jaguars",
            "Falcons",
            "Bills",
            "Eagles"
          ],
          answer: "Bills"
        },
        {
          question: "Which NFL logo has an arrowhead?",
          options: [
            "Steelers",
            "Chiefs",
            "Chargers",
            "Patriots"
          ],
          answer: "Cheifs"
        },
        {
          question: "Which NFL logo is similar to a lighting bolt?",
          options: [
            "Jets",
            "Buccaneers",
            "Raiders",
            "Cowboys"
          ],
          answer: "Chargers"
        },
        {
          question: "Which NFL logo is just a c?",
          options: [
            "Dolphins",
            "Packers",
            "Cardinals",
            "Bears"
          ],
          answer: "Bears"
        },
        {
          question: "Which NfL logo has bullhorns?",
          options: [
            "Texans",
            "Seahawks",
            "Titans",
            "Browns"
          ],
          answer: "Texans"
        }
      ];
      
      
      const quizQuestions = [];
      const selectedQuestions = [];
      while (quizQuestions.length < 2) {
        let randomIndex = Math.floor(Math.random() * questions.length);
        if (!selectedQuestions.includes(randomIndex)) {
          quizQuestions.push(questions[randomIndex]);
          selectedQuestions.push(randomIndex);
        }
      }
      
