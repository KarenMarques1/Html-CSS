const questions = [
  {
    question: "Todo número par é divisível por 2.",
    answers: ["Verdadeiro", "Falso"],
    correct: 0
  },
  {
    question: "Se Pedro é mais velho que Ana, e Ana é mais velha que João, então João é o mais novo.",
    answers: ["Verdadeiro", "Falso"],
    correct: 0
  },
  {
    question: "O número 15 é divisível por 2 e por 3 ao mesmo tempo.",
    answers: ["Verdadeiro", "Falso"],
    correct: 1
  },
  {
    question: "Se todos os gatos são animais e alguns animais são pretos, então todos os gatos são pretos.",
    answers: ["Verdadeiro", "Falso"],
    correct: 1
  },
  {
    question: "Na sequência 1, 3, 5, 7, 9, todos os números são ímpares.",
    answers: ["Verdadeiro", "Falso"],
    correct: 0
  }
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const questionElement = document.getElementById("question");
  const answersContainer = document.getElementById("answers");
  const scoreElement = document.getElementById("score");

  scoreElement.textContent = `Pontuação: ${score} / ${questions.length}`;

  const current = questions[currentQuestion];
  questionElement.textContent = current.question;

  answersContainer.innerHTML = "";

  current.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.onclick = () => checkAnswer(index);
    answersContainer.appendChild(btn);
  });
}

function checkAnswer(selectedIndex) {
  const current = questions[currentQuestion];
  if (selectedIndex === current.correct) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const quiz = document.getElementById("quiz");
  quiz.innerHTML = `
    <h2>Quiz finalizado!</h2>
    <p>Você acertou ${score} de ${questions.length} perguntas.</p>
    <button onclick="restartQuiz()">Reiniciar Quiz</button>
  `;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  const quiz = document.getElementById("quiz");
  quiz.innerHTML = `
    <h2 id="question"></h2>
    <div id="answers"></div>
    <div id="score" style="margin-top: 20px; font-weight: bold;"></div>
  `;
  showQuestion();
}

window.onload = showQuestion;
