// Arreglo con las preguntas, opciones y la respuesta correcta
const quizData = [
  {
    question: "¿Qual e il tuo stile preferito?",
    options: ["MODERNO", "MINIMALISTA", "CLASSICO", "BOEMO"],
    correct: 2 // Índice de la respuesta correcta (NESSUNO)
  },
  {
    question: "¿Quali colori si adattano meglio il tuo stile?",
    options: ["luminosa", "Colorata"],
    correct: 1 // 
  },
  {
    question: "scegli il mood che senti ti rappresenta di piu ",
    options: ["accogliente", "Energico", "sereno", "Lussuoso"],
    correct: 1 // 
  },
  {
    question: "¿scegli una struttura?",
    options: ["acciaio grezzo e cemento", "lino e vimini scoloriti dal sole", "velluto e stampa su stampa", "palla chiara e legno tenero"],
    correct: 1
  }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const resultElement = document.getElementById("result");

// Función para mostrar la pregunta actual
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

// Limpiar opciones anteriores
function resetState() {
  resultElement.innerText = "";
  optionsElement.innerHTML = "";
}

// Verificar la respuesta seleccionada
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

// Mostrar pantalla final
function showQuizEnd() {
  questionElement.innerText = "¡Quiz terminado!";
  optionsElement.innerHTML = "";
  resultElement.style.color = "#333";
  resultElement.innerText = `Tu puntuación es ${score} de ${quizData.length}.`;
}

// Iniciar el quiz
showQuestion();
