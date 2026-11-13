// Disposizione delle domande, delle opzioni e della risposta

const quizData = [
  {
    question: "Qual è il tuo stile preferito?",
    options: ["MODERNO", "MINIMALISTA", "CLASSICO", "BOEMO"],
    keys: ["MOD", "MIN", "CLA", "BOE"]
  },
  {
    question: "Scegli il mood che senti ti rappresenta di più",
    options: ["Accogliente", "Energico", "Sereno", "Lussuoso"],
    keys: ["ACC", "ENE", "SER", "LUS"]
  },
  {
    question: "Quali toni si adattano meglio al tuo spazio?",
    options: ["Luminosa", "Colorata"],
    keys: ["LUM", "COL"]
  }
];

const moodboardsDB = {
  "MOD-ACC-LUM": { stile: "Moderno", mood: "Accogliente", palette: "Luminosa", tipo: "Moodboard A", hex: ["#F7F5F0", "#D9C5B2", "#8C7A6B", "#C87D55"] },
  "MOD-ACC-COL": { stile: "Moderno", mood: "Accogliente", palette: "Colorata", tipo: "Moodboard B", hex: ["#EFE6DD", "#C85A32", "#4A6B5D", "#E2953A"] },
  "MOD-SER-LUM": { stile: "Moderno", mood: "Sereno", palette: "Luminosa", tipo: "Moodboard A", hex: ["#F4F6F6", "#D2DCE0", "#9BB0B8", "#6C8894"] },
  "MOD-SER-COL": { stile: "Moderno", mood: "Sereno", palette: "Colorata", tipo: "Moodboard B", hex: ["#E6ECEB", "#5B8E8D", "#7C98AB", "#D4A373"] },
  "MOD-ENE-LUM": { stile: "Moderno", mood: "Energico", palette: "Luminosa", tipo: "Moodboard A", hex: ["#FAFAFA", "#EAEAEA", "#F4D35E", "#EE6C4D"] },
  "MOD-ENE-COL": { stile: "Moderno", mood: "Energico", palette: "Colorata", tipo: "Moodboard B", hex: ["#F2F2F2", "#E63946", "#1D3557", "#FFB703"] },
  "MOD-LUS-LUM": { stile: "Moderno", mood: "Lussuoso", palette: "Luminosa", tipo: "Moodboard A", hex: ["#F8F6F2", "#E5DEC9", "#C5A880", "#2C2C2C"] },
  "MOD-LUS-COL": { stile: "Moderno", mood: "Lussuoso", palette: "Colorata", tipo: "Moodboard B", hex: ["#222222", "#1B4332", "#9B2226", "#D4AF37"] },

  "MIN-ACC-LUM": { stile: "Minimalista", mood: "Accogliente", palette: "Luminosa", tipo: "Moodboard A", hex: ["#FAF8F5", "#EAE3D9", "#C7B9A5", "#9C8975"] },
  "MIN-ACC-COL": { stile: "Minimalista", mood: "Accogliente", palette: "Colorata", tipo: "Moodboard B", hex: ["#F3EDE4", "#B86B4B", "#7A8471", "#D9A05B"] },
  "MIN-SER-LUM": { stile: "Minimalista", mood: "Sereno", palette: "Luminosa", tipo: "Moodboard A", hex: ["#FFFFFF", "#F0F2F2", "#D5D9D9", "#A3ACAC"] },
  "MIN-SER-COL": { stile: "Minimalista", mood: "Sereno", palette: "Colorata", tipo: "Moodboard B", hex: ["#EFF3F1", "#8DA399", "#9EB1B8", "#C9B79C"] },
  "MIN-ENE-LUM": { stile: "Minimalista", mood: "Energico", palette: "Luminosa", tipo: "Moodboard A", hex: ["#F9F9F9", "#E2E2E2", "#F2C94C", "#2F80ED"] },
  "MIN-ENE-COL": { stile: "Minimalista", mood: "Energico", palette: "Colorata", tipo: "Moodboard B", hex: ["#F4F4F4", "#FF5A36", "#0066CC", "#FFD100"] },
  "MIN-LUS-LUM": { stile: "Minimalista", mood: "Lussuoso", palette: "Luminosa", tipo: "Moodboard A", hex: ["#F6F5F2", "#DFDCD5", "#B0A695", "#3A3835"] },
  "MIN-LUS-COL": { stile: "Minimalista", mood: "Lussuoso", palette: "Colorata", tipo: "Moodboard B", hex: ["#2B2A29", "#5C3A21", "#3D4C41", "#C2A378"] },

  "CLA-ACC-LUM": { stile: "Classico", mood: "Accogliente", palette: "Luminosa", tipo: "Moodboard A", hex: ["#F9F6F0", "#E6DCCA", "#B89F81", "#7D5A3C"] },
  "CLA-ACC-COL": { stile: "Classico", mood: "Accogliente", palette: "Colorata", tipo: "Moodboard B", hex: ["#F2E8DC", "#8C3B2B", "#4F6348", "#C8963E"] },
  "CLA-SER-LUM": { stile: "Classico", mood: "Sereno", palette: "Luminosa", tipo: "Moodboard A", hex: ["#F5F7F6", "#DCE3E0", "#AEC0BA", "#788F88"] },
  "CLA-SER-COL": { stile: "Classico", mood: "Sereno", palette: "Colorata", tipo: "Moodboard B", hex: ["#E8EFEA", "#6B8E78", "#6C899E", "#C4A882"] },
  "CLA-ENE-LUM": { stile: "Classico", mood: "Energico", palette: "Luminosa", tipo: "Moodboard A", hex: ["#FAF7F2", "#E8DFD1", "#D9A441", "#3B6978"] },
  "CLA-ENE-COL": { stile: "Classico", mood: "Energico", palette: "Colorata", tipo: "Moodboard B", hex: ["#F4EFE6", "#9E2A2B", "#1F4E78", "#D99B26"] },
  "CLA-LUS-LUM": { stile: "Classico", mood: "Lussuoso", palette: "Luminosa", tipo: "Moodboard A", hex: ["#F7F4EB", "#E3DAC9", "#C2A878", "#4A3C2C"] },
  "CLA-LUS-COL": { stile: "Classico", mood: "Lussuoso", palette: "Colorata", tipo: "Moodboard B", hex: ["#1C252C", "#591C21", "#1B4332", "#C5A059"] },

  "BOE-ACC-LUM": { stile: "Boemo", mood: "Accogliente", palette: "Luminosa", tipo: "Moodboard A", hex: ["#FBF7F2", "#EADBC8", "#CFA882", "#A66E4E"] },
  "BOE-ACC-COL": { stile: "Boemo", mood: "Accogliente", palette: "Colorata", tipo: "Moodboard B", hex: ["#F5EBE0", "#C85A32", "#6B705C", "#DDA15E"] },
  "BOE-SER-LUM": { stile: "Boemo", mood: "Sereno", palette: "Luminosa", tipo: "Moodboard A", hex: ["#F7F7F2", "#E0E2D5", "#B5BFA8", "#8A9A7B"] },
  "BOE-SER-COL": { stile: "Boemo", mood: "Sereno", palette: "Colorata", tipo: "Moodboard B", hex: ["#EDF1EC", "#7F9C86", "#87A8B5", "#D4A373"] },
  "BOE-ENE-LUM": { stile: "Boemo", mood: "Energico", palette: "Luminosa", tipo: "Moodboard A", hex: ["#FCF9F2", "#F2E2C4", "#E09F3E", "#C8553D"] },
  "BOE-ENE-COL": { stile: "Boemo", mood: "Energico", palette: "Colorata", tipo: "Moodboard B", hex: ["#F8F1E5", "#D62828", "#2A9D8F", "#F77F00"] },
  "BOE-LUS-LUM": { stile: "Boemo", mood: "Lussuoso", palette: "Luminosa", tipo: "Moodboard A", hex: ["#F9F5EE", "#E6D7C3", "#C69C6D", "#5E432C"] },
  "BOE-LUS-COL": { stile: "Boemo", mood: "Lussuoso", palette: "Colorata", tipo: "Moodboard B", hex: ["#2D1E2F", "#7A2048", "#1E4D40", "#D4A359"] }
};

let currentQuestionIndex = 0;
let userChoices = [];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const quizContainer = document.getElementById("quiz-container");
const resultCard = document.getElementById("result-card");

function getContrastYIQ(hexcolor) {
  const cleanHex = hexcolor.replace("#", "");
  const r = parseInt(cleanHex.substr(0, 2), 16);
  const g = parseInt(cleanHex.substr(2, 2), 16);
  const b = parseInt(cleanHex.substr(4, 2), 16);
  const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
  return (yiq >= 128) ? "#222222" : "#FFFFFF";
}

function showQuestion() {
  optionsElement.innerHTML = "";
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

function selectAnswer(selectedIndex) {
  const currentQuestion = quizData[currentQuestionIndex];
  userChoices.push(currentQuestion.keys[selectedIndex]);
  currentQuestionIndex++;

  if (currentQuestionIndex < quizData.length) {
    showQuestion();
  } else {
    showQuizEnd();
  }
}

function showQuizEnd() {
  quizContainer.style.display = "none";
  resultCard.style.display = "block";
  const codigo = userChoices.join("-");
  actualizarMoodboard(codigo);
}

function actualizarMoodboard(codigo) {
  const data = moodboardsDB[codigo];
  if (!data) return;

  document.getElementById("code-output").textContent = codigo;
  document.getElementById("moodboard-type").textContent = data.tipo;
  document.getElementById("desc-output").textContent = `${data.stile} • ${data.mood} • ${data.palette}`;

  // Usa il primo colore della palette come sfondo della card
  resultCard.style.backgroundColor = data.hex[0];
  resultCard.style.color = getContrastYIQ(data.hex[0]);

  const grid = document.getElementById("palette-grid");
  grid.innerHTML = "";

  data.hex.forEach(color => {
    const swatch = document.createElement("div");
    swatch.className = "color-swatch";
    swatch.style.backgroundColor = color;
    swatch.style.color = getContrastYIQ(color);
    swatch.textContent = color;
    swatch.title = "Clicca per copiare HEX";

    swatch.onclick = () => {
      navigator.clipboard.writeText(color);
      const hint = document.getElementById("copy-hint");
      hint.textContent = `Colore ${color} copiato negli appunti!`;
      setTimeout(() => {
        hint.textContent = "Clicca su un colore per copiare il codice HEX";
      }, 2000);
    };

    grid.appendChild(swatch);
  });
}

function restartQuiz() {
  currentQuestionIndex = 0;
  userChoices = [];
  resultCard.style.display = "none";
  quizContainer.style.display = "block";
  showQuestion();
}

// Avvio iniziale
showQuestion();

