// Disposizione delle domande, delle opzioni e della risposta corretta
const quizData = [
  {
    question: "¿Qual è il tuo stile preferito?",
    options: ["MODERNO", "MINIMALISTA", "CLASSICO", "BOEMO"],
    correct: 1 // Indice delle risposte corrette (NESSUNO)
  },
  {
    question: "scegli il mood che senti ti rappresenta di più ",
    options: ["accogliente", "Energico", "sereno", "Lussuoso"],
    correct: 1 // 
  },
  {
    question: "¿Quali toni si adattano meglio il tuo spazio?",
    options: ["luminosa", "Colorata"],
    correct: 1 // 
  }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const resultElement = document.getElementById("result");

// Funzione per visualizzare la domanda corrente
function showQuestion() {
  resetState();
  const currentQuestion = quizData[currentQuestionIndex];
  questionElement.innerText = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.innerText = option;
    button.classList.add("option-btn");
    button.addEventListener("click", () => selectAnswer(index));
    optionsElement.appendChild(button);
  });
}

// Cancella le opzioni precedenti -  Limpiar opciones anteriores
function resetState() {
  resultElement.innerText = "";
  optionsElement.innerHTML = "";
}

// Verifica la risposta selezionata
function selectAnswer(selectedIndex) {
  const currentQuestion = quizData[currentQuestionIndex];

  if (selectedIndex === currentQuestion.correct) {
    score++;
    resultElement.style.color = "moderno";
    resultElement.innerText = "¡Correcto! 🎉";
  } else {
    resultElement.style.color = "boemio";
    resultElement.innerText = "Incorrecto ❌";
  }

  currentQuestionIndex++;

  setTimeout(() => {
    if (currentQuestionIndex < quizData.length) {
      showQuestion();
    } else {
      showQuizEnd();
    }
  }, 1000);
}

// Mostra la schermata finale
function showQuizEnd() {
  questionElement.innerText = "¡Quiz finito!";
  optionsElement.innerHTML = "";
  resultElement.style.color = "#333";
  resultElement.innerText = `Tu puntuación es ${score} de ${quizData.length}.`;
}

// Iniciar el quiz
showQuestion();
