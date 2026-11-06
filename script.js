// Arreglo con las preguntas, opciones y la respuesta correcta
const quizData = [
  {
    question: "¿Qué lenguaje da interactividad a las páginas web?",
    options: ["HTML", "CSS", "JavaScript", "SQL"],
    correct: 2 // Índice de la respuesta correcta (JavaScript)
  },
  {
    question: "¿Cuál de estos NO es un framework de JavaScript?",
    options: ["React", "Laravel", "Vue", "Angular"],
    correct: 1 // Laravel es de PHP
  },
  {
    question: "¿Cómo se declara una variable que no cambia en JavaScript?",
    options: ["var", "let", "const", "static"],
    correct: 2
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
    resultElement.style.color = "green";
    resultElement.innerText = "¡Correcto! 🎉";
  } else {
    resultElement.style.color = "red";
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
