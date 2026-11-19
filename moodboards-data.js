const quizData = [
  {
    stepLabel: "01 / SCEGLI LO STILE",
    question: "Qual è il tuo stile preferito?",
    subtitle: "Lasciati guidare dalle forme. Scegli l'interno che senti più tuo.",
    options: [
      { title: "Moderno", desc: "Linee pulite, carattere contemporaneo.", img: "pictures/quizdomanda1moderno.png" },
      { title: "Minimalista", desc: "L'essenziale, con naturalezza.", img: "pictures/quizdomanda1minimalista.png" },
      { title: "Classico", desc: "Un'eleganza senza tempo.", img: "pictures/quizdomanda1classico.png" },
      { title: "Boemo", desc: "Texture, calore e libertà.", img: "pictures/quizdomanda1boemo.png" }
    ],
    keys: ["MOD", "MIN", "CLA", "BOE"]
  },
  {
    stepLabel: "02 / DEFINISCI IL MOOD",
    question: "Scegli il mood che senti ti rappresenta di più",
    subtitle: "Pensa all'atmosfera che desideri respirare ogni giorno.",
    options: [
      { title: "Accogliente", desc: "Calore, morbidezza e comfort.", img: "pictures/quizdomanda2accogliente.png" },
      { title: "Energico", desc: "Contrasti decisi e vitalità.", img: "pictures/quizdomanda2energico.png" },
      { title: "Sereno", desc: "Equilibrio, luce e tranquillità.", img: "pictures/quizdomanda2sereno.png" },
      { title: "Lussuoso", desc: "Dettagli sofisticati e materiali pregiati.", img: "pictures/quizdomanda2lussuoso.png" }
    ],
    keys: ["ACC", "ENE", "SER", "LUS"]
  },
  {
    stepLabel: "03 / SCEGLI LA PALETTE",
    question: "Quali toni si adattano meglio al tuo spazio?",
    subtitle: "Seleziona l'equilibrio cromatico ideale per i tuoi ambienti.",
    options: [
      { title: "Luminosa", desc: "Tonalità neutre, chiare e ariose.", img: "pictures/quizdomanda3luminosa.png" },
      { title: "Colorata", desc: "Accenti vibranti e personalità.", img: "pictures/quizdomanda3colorata.png" }
    ],
    keys: ["LUM", "COL"]
  }
];

const moodboardsDB = {
  // 1. MODERNO
  "MOD-ACC-LUM": {
    stile: "Moderno", mood: "Accogliente", palette: "Luminosa",
    nome: "Luce Calda Urbana",
    materiali: "Rovere Chiaro, Lino Grezzo, Travertino",
    colori: [
      { nome: "Bianco Calce", hex: "#F7F4EB", ncs: "S 0502-Y" },
      { nome: "Sabbia", hex: "#EAE2D3", ncs: "S 1005-Y20R" },
      { nome: "Tortora Chiaro", hex: "#D8C5B0", ncs: "S 2010-Y30R" }
    ]
  },
  "MOD-ACC-COL": {
    stile: "Moderno", mood: "Accogliente", palette: "Colorata",
    nome: "Rifugio Urbano Vibrante",
    materiali: "Noce Canaletto, Velluto, Terracotta",
    colori: [
      { nome: "Terracotta", hex: "#C86D51", ncs: "S 3040-Y60R" },
      { nome: "Verde Salvia", hex: "#8FA38B", ncs: "S 3010-G20Y" },
      { nome: "Ocra Senape", hex: "#D9A74A", ncs: "S 2050-Y10R" }
    ]
  },
  "MOD-SER-LUM": {
    stile: "Moderno", mood: "Sereno", palette: "Luminosa",
    nome: "Brezza Cittadina",
    materiali: "Vetro Satinato, Frassino Sbiancato, Cotone",
    colori: [
      { nome: "Bianco Ghiaccio", hex: "#F2F5F7", ncs: "S 0502-B" },
      { nome: "Azzurro Polvere", hex: "#C5D5DF", ncs: "S 1510-R90B" },
      { nome: "Grigio Salvia", hex: "#CBD4CD", ncs: "S 1505-G" }
    ]
  },
  "MOD-SER-COL": {
    stile: "Moderno", mood: "Sereno", palette: "Colorata",
    nome: "Oasi Urbana",
    materiali: "Rovere Termotrattato, Lana Bouclé, Pietra",
    colori: [
      { nome: "Verde Petrolio", hex: "#2A5C55", ncs: "S 6020-B70G" },
      { nome: "Blu Abisso", hex: "#2B3D54", ncs: "S 7020-R90B" },
      { nome: "Eucalipto", hex: "#84968B", ncs: "S 4010-B90G" }
    ]
  },
  "MOD-ENE-LUM": {
    stile: "Moderno", mood: "Energico", palette: "Luminosa",
    nome: "Luce Dinamica",
    materiali: "Fenix Opaco, Betulla, Metallo",
    colori: [
      { nome: "Bianco Puro", hex: "#F8F9FA", ncs: "S 0300-N" },
      { nome: "Giallo Ambra", hex: "#E8B84B", ncs: "S 1050-Y10R" },
      { nome: "Blu Avio", hex: "#5B7A9C", ncs: "S 4030-R90B" }
    ]
  },
  "MOD-ENE-COL": {
    stile: "Moderno", mood: "Energico", palette: "Colorata",
    nome: "Pop Metropolitano",
    materiali: "Laccato Colorato, Terrazzo Veneziano",
    colori: [
      { nome: "Blu Cobalto", hex: "#2E5A88", ncs: "S 5040-R90B" },
      { nome: "Corallo Caldo", hex: "#D96B52", ncs: "S 2050-Y70R" },
      { nome: "Giallo Ocra", hex: "#E0B243", ncs: "S 1560-Y10R" }
    ]
  },
  "MOD-LUS-LUM": {
    stile: "Moderno", mood: "Lussuoso", palette: "Luminosa",
    nome: "Eleganza Cristallina",
    materiali: "Marmo Calacatta, Ottone Rosa, Velluto",
    colori: [
      { nome: "Bianco Marmo", hex: "#F3EFEA", ncs: "S 0502-Y50R" },
      { nome: "Rosa Antico", hex: "#C49A93", ncs: "S 2515-Y80R" },
      { nome: "Grigio Perla Caldo", hex: "#ACA69F", ncs: "S 3502-Y" }
    ]
  },
  "MOD-LUS-COL": {
    stile: "Moderno", mood: "Lussuoso", palette: "Colorata",
    nome: "Velluto Moderno",
    materiali: "Marmo Sahara Noir, Ottone Brunito, Pelle",
    colori: [
      { nome: "Bordeaux", hex: "#5E2129", ncs: "S 6030-R" },
      { nome: "Oro Ottone", hex: "#C2A353", ncs: "S 2040-Y" },
      { nome: "Antracite", hex: "#3A4248", ncs: "S 7502-B" }
    ]
  },

  // 2. MINIMALISTA
  "MIN-ACC-LUM": {
    stile: "Minimalista", mood: "Accogliente", palette: "Luminosa",
    nome: "Nuvola Zen",
    materiali: "Microcemento Caldo, Lino, Bambù",
    colori: [
      { nome: "Lino Chiaro", hex: "#F7F3EA", ncs: "S 0502-Y20R" },
      { nome: "Corda Naturale", hex: "#DFCFB7", ncs: "S 1510-Y20R" },
      { nome: "Legno Chiaro", hex: "#C2A788", ncs: "S 3015-Y20R" }
    ]
  },
  "MIN-ACC-COL": {
    stile: "Minimalista", mood: "Accogliente", palette: "Colorata",
    nome: "Zen Terrestre",
    materiali: "Intonaco di Argilla, Rovere Scuro, Juta",
    colori: [
      { nome: "Terra di Siena", hex: "#A8543A", ncs: "S 4040-Y60R" },
      { nome: "Verde Oliva", hex: "#7A7B52", ncs: "S 5020-G80Y" },
      { nome: "Ocra Dorata", hex: "#C98D48", ncs: "S 2050-Y20R" }
    ]
  },
  "MIN-SER-LUM": {
    stile: "Minimalista", mood: "Sereno", palette: "Luminosa",
    nome: "Sottrazione Pura",
    materiali: "Resina Bianca, Vetro Extrachiaro, Acciaio",
    colori: [
      { nome: "Bianco Neve", hex: "#F7F8F6", ncs: "S 0300-N" },
      { nome: "Grigio Nebbia", hex: "#DBDDDC", ncs: "S 1500-N" },
      { nome: "Pietra Serena", hex: "#B5BAB8", ncs: "S 3000-N" }
    ]
  },
  "MIN-SER-COL": {
    stile: "Minimalista", mood: "Sereno", palette: "Colorata",
    nome: "Profondità Calma",
    materiali: "Ardesia Naturale, Pino Nordico, Lana",
    colori: [
      { nome: "Blu Ardesia", hex: "#4B6073", ncs: "S 6020-R90B" },
      { nome: "Verde Pino", hex: "#3A5A4B", ncs: "S 6020-G10Y" },
      { nome: "Grigio Ferro", hex: "#5C6064", ncs: "S 6502-B" }
    ]
  },
  "MIN-ENE-LUM": {
    stile: "Minimalista", mood: "Energico", palette: "Luminosa",
    nome: "Spazio Attivo",
    materiali: "Cemento Lisciato, Acciaio, Compensato",
    colori: [
      { nome: "Bianco Gesso", hex: "#F4F2ED", ncs: "S 0502-Y" },
      { nome: "Albicocca", hex: "#E68A5C", ncs: "S 1050-Y50R" },
      { nome: "Grigio Cemento", hex: "#9EA2A2", ncs: "S 4000-N" }
    ]
  },
  "MIN-ENE-COL": {
    stile: "Minimalista", mood: "Energico", palette: "Colorata",
    nome: "Equilibrio Grafico",
    materiali: "Metallo Nero Opaco, Cotto, Frassino",
    colori: [
      { nome: "Nero Carbone", hex: "#2C2E30", ncs: "S 8500-N" },
      { nome: "Rosso Mattone", hex: "#B8533C", ncs: "S 3050-Y70R" },
      { nome: "Sabbia Fredda", hex: "#DFDCD4", ncs: "S 1502-Y" }
    ]
  },
  "MIN-LUS-LUM": {
    stile: "Minimalista", mood: "Lussuoso", palette: "Luminosa",
    nome: "Essenza Preziosa",
    materiali: "Travertino Romano, Seta Grezza, Bronzo",
    colori: [
      { nome: "Perla", hex: "#EAE4DC", ncs: "S 1002-Y50R" },
      { nome: "Platino", hex: "#D4CFC7", ncs: "S 2002-Y" },
      { nome: "Tortora", hex: "#9C9288", ncs: "S 4005-Y20R" }
    ]
  },
  "MIN-LUS-COL": {
    stile: "Minimalista", mood: "Lussuoso", palette: "Colorata",
    nome: "Pura Opulenza",
    materiali: "Legno Ebano, Ottone Spazzolato, Pelle",
    colori: [
      { nome: "Prugna Scuro", hex: "#4E3244", ncs: "S 7020-R30B" },
      { nome: "Bronzo Dorato", hex: "#B59449", ncs: "S 3040-Y" },
      { nome: "Grafite", hex: "#2B2D2F", ncs: "S 8502-B" }
    ]
  },

  // 3. CLASSICO
  "CLA-ACC-LUM": {
    stile: "Classico", mood: "Accogliente", palette: "Luminosa",
    nome: "Focolare Antico",
    materiali: "Boiserie in Gesso, Parquet a Spina, Velluto",
    colori: [
      { nome: "Crema Antico", hex: "#F7EFE1", ncs: "S 0505-Y20R" },
      { nome: "Beige Dorato", hex: "#CBB292", ncs: "S 2015-Y20R" },
      { nome: "Noce Caldo", hex: "#7A543E", ncs: "S 6020-Y50R" }
    ]
  },
  "CLA-ACC-COL": {
    stile: "Classico", mood: "Accogliente", palette: "Colorata",
    nome: "Salotto d'Epoca",
    materiali: "Pelle Capitonnè, Mogano, Ottone Antico",
    colori: [
      { nome: "Rosso Inglese", hex: "#9E3B3B", ncs: "S 4050-Y90R" },
      { nome: "Verde Bosco", hex: "#2E4F3E", ncs: "S 7020-G10Y" },
      { nome: "Oro Antico", hex: "#C2A353", ncs: "S 2040-Y" }
    ]
  },
  "CLA-SER-LUM": {
    stile: "Classico", mood: "Sereno", palette: "Luminosa",
    nome: "Villa Palladiana",
    materiali: "Stucco Veneziano, Marmo Chiaro, Seta",
    colori: [
      { nome: "Verde Celadon", hex: "#C7D6C5", ncs: "S 1510-G10Y" },
      { nome: "Avorio", hex: "#F2EAE1", ncs: "S 0804-Y30R" },
      { nome: "Rosa Cipria", hex: "#E2C6C2", ncs: "S 1510-Y80R" }
    ]
  },
  "CLA-SER-COL": {
    stile: "Classico", mood: "Sereno", palette: "Colorata",
    nome: "Biblioteca Notturna",
    materiali: "Legno di Ciliegio, Velluto Liscio, Carta da Parati",
    colori: [
      { nome: "Blu Oltremare", hex: "#23395B", ncs: "S 7020-R80B" },
      { nome: "Verde Smeraldo", hex: "#2A5C43", ncs: "S 6030-B90G" },
      { nome: "Legno Mogano", hex: "#6E3B2B", ncs: "S 6030-Y60R" }
    ]
  },
  "CLA-ENE-LUM": {
    stile: "Classico", mood: "Energico", palette: "Luminosa",
    nome: "Rinascimento Solare",
    materiali: "Damasco di Seta, Cristallo di Boemia, Stucco",
    colori: [
      { nome: "Giallo Napoli", hex: "#EED484", ncs: "S 1030-Y" },
      { nome: "Azzurro Savoia", hex: "#A5C4D4", ncs: "S 2020-B" },
      { nome: "Bianco Stucco", hex: "#F7F3E8", ncs: "S 0502-Y" }
    ]
  },
  "CLA-ENE-COL": {
    stile: "Classico", mood: "Energico", palette: "Colorata",
    nome: "Maestà Dinamica",
    materiali: "Tappeti Persiani, Legno Intarsiato, Broccato",
    colori: [
      { nome: "Rosso Veneziano", hex: "#A62B2B", ncs: "S 3060-Y90R" },
      { nome: "Blu Reale", hex: "#2B4C7E", ncs: "S 5040-R80B" },
      { nome: "Oro Imperiale", hex: "#D4AC42", ncs: "S 2050-Y" }
    ]
  },
  "CLA-LUS-LUM": {
    stile: "Classico", mood: "Lussuoso", palette: "Luminosa",
    nome: "Salone degli Specchi",
    materiali: "Foglia d'Oro, Marmo Statuario, Specchi Antichi",
    colori: [
      { nome: "Avorio Reale", hex: "#F7F5EE", ncs: "S 0502-Y" },
      { nome: "Foglia d'Oro", hex: "#D1B262", ncs: "S 2030-Y" },
      { nome: "Acquamarina", hex: "#9CC2BD", ncs: "S 2020-B50G" }
    ]
  },
  "CLA-LUS-COL": {
    stile: "Classico", mood: "Lussuoso", palette: "Colorata",
    nome: "Reggia Imperiale",
    materiali: "Velluto di Seta, Marmo Verde Alpi, Bronzo",
    colori: [
      { nome: "Rosso Rubino", hex: "#7A1F34", ncs: "S 5040-R10B" },
      { nome: "Blu Zaffiro", hex: "#1F3A68", ncs: "S 6030-R80B" },
      { nome: "Bronzo Antico", hex: "#9C7A44", ncs: "S 4030-Y10R" }
    ]
  },

  // 4. BOEMO
  "BOE-ACC-LUM": {
    stile: "Boemo", mood: "Accogliente", palette: "Luminosa",
    nome: "Sogno Nomade",
    materiali: "Rattan Intrecciato, Macramè di Cotone, Lino",
    colori: [
      { nome: "Cotone Naturale", hex: "#F5F2EB", ncs: "S 0502-Y" },
      { nome: "Rosa Pesca", hex: "#F0CFB6", ncs: "S 1015-Y40R" },
      { nome: "Rattan", hex: "#D8B480", ncs: "S 2020-Y20R" }
    ]
  },
  "BOE-ACC-COL": {
    stile: "Boemo", mood: "Accogliente", palette: "Colorata",
    nome: "Bazar Caldo",
    materiali: "Tappeti Kilim, Lana Tessuta a Mano, Cotto",
    colori: [
      { nome: "Cannella", hex: "#C45A36", ncs: "S 3050-Y50R" },
      { nome: "Rosso Melograno", hex: "#9E3654", ncs: "S 4040-R20B" },
      { nome: "Curcuma", hex: "#D99B38", ncs: "S 2060-Y10R" }
    ]
  },
  "BOE-SER-LUM": {
    stile: "Boemo", mood: "Sereno", palette: "Luminosa",
    nome: "Rifugio Mistico",
    materiali: "Garza di Cotone, Ceramica Artigianale, Legno",
    colori: [
      { nome: "Lavanda Polvere", hex: "#DCD6E6", ncs: "S 1510-R60B" },
      { nome: "Salvia Chiara", hex: "#B5BFA8", ncs: "S 2510-G30Y" },
      { nome: "Bianco Caldo", hex: "#F4F2ED", ncs: "S 0502-Y" }
    ]
  },
  "BOE-SER-COL": {
    stile: "Boemo", mood: "Sereno", palette: "Colorata",
    nome: "Giardino Segreto",
    materiali: "Piante Tropicali, Vimini, Velluto Liscio",
    colori: [
      { nome: "Verde Foglia", hex: "#3B6E52", ncs: "S 5030-G10Y" },
      { nome: "Borgogna", hex: "#632B3B", ncs: "S 6030-R20B" },
      { nome: "Malva", hex: "#B899B0", ncs: "S 3015-R40B" }
    ]
  },
  "BOE-ENE-LUM": {
    stile: "Boemo", mood: "Energico", palette: "Luminosa",
    nome: "Festival Solare",
    materiali: "Maioliche Dipinte, Paglia di Vienna, Pino",
    colori: [
      { nome: "Zafferano", hex: "#E6B84C", ncs: "S 1550-Y10R" },
      { nome: "Menta Acquatica", hex: "#A3C9B8", ncs: "S 2020-B90G" },
      { nome: "Corallo Polvere", hex: "#E08D79", ncs: "S 2030-Y70R" }
    ]
  },
  "BOE-ENE-COL": {
    stile: "Boemo", mood: "Energico", palette: "Colorata",
    nome: "Spirito Libero",
    materiali: "Tessuti Ikat, Legno di Mango, Rame",
    colori: [
      { nome: "Magenta", hex: "#B03060", ncs: "S 3050-R20B" },
      { nome: "Verde Giada", hex: "#557A46", ncs: "S 4040-G30Y" },
      { nome: "Mandarino", hex: "#D97236", ncs: "S 2060-Y50R" }
    ]
  },
  "BOE-LUS-LUM": {
    stile: "Boemo", mood: "Lussuoso", palette: "Luminosa",
    nome: "Oasi Eclettica",
    materiali: "Rame Martellato, Seta Cruda, Madreperla",
    colori: [
      { nome: "Crema di Seta", hex: "#F7EFE1", ncs: "S 0505-Y20R" },
      { nome: "Rame", hex: "#B8734B", ncs: "S 3040-Y50R" },
      { nome: "Turchese Pallido", hex: "#88B8B0", ncs: "S 2520-B50G" }
    ]
  },
  "BOE-LUS-COL": {
    stile: "Boemo", mood: "Lussuoso", palette: "Colorata",
    nome: "Viaggiatore Elegante",
    materiali: "Legno di Teak, Velluto Ricamato, Ottone",
    colori: [
      { nome: "Blu Pavone", hex: "#1F637A", ncs: "S 5030-B10G" },
      { nome: "Verde Giungla", hex: "#1B4D3E", ncs: "S 7020-B90G" },
      { nome: "Oro Antico", hex: "#B58942", ncs: "S 3050-Y10R" }
    ]
  }
};

let currentQuestionIndex = 0;
let userChoices = [];

const stepSubtitleElement = document.getElementById("step-subtitle");
const questionElement = document.getElementById("question");
const questionSubtitleElement = document.getElementById("question-subtitle");
const optionsElement = document.getElementById("options");
const quizContainer = document.getElementById("quiz-container");
const resultCard = document.getElementById("result-card");

function showQuestion() {
  optionsElement.innerHTML = "";
  const currentQuestion = quizData[currentQuestionIndex];

  stepSubtitleElement.innerText = currentQuestion.stepLabel;
  questionElement.innerText = currentQuestion.question;
  questionSubtitleElement.innerText = currentQuestion.subtitle;

  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.classList.add("option-btn");

    button.innerHTML = `
      <div class="option-img-wrapper">
        <img src="${option.img}" alt="${option.title}">
      </div>
      <div class="option-info">
        <div class="option-text">
          <span class="option-title">${option.title}</span>
          <span class="option-desc">${option.desc}</span>
        </div>
        <span class="option-radio"></span>
      </div>
    `;

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

  const imgElement = document.getElementById("moodboard-img");
  if (imgElement) {
    imgElement.src = `pictures/${codigo.toLowerCase()}.png`;
    imgElement.alt = `${data.nome} - ${data.stile} ${data.mood} ${data.palette}`;
  }

  document.getElementById("code-output").textContent = codigo;
  document.getElementById("moodboard-type").textContent = `La tua Moodboard: ${data.nome}`;
  document.getElementById("desc-output").textContent = `${data.stile} • ${data.mood} • ${data.palette}`;

  const grid = document.getElementById("palette-grid");
  grid.innerHTML = "";

  data.colori.forEach(colore => {
    const item = document.createElement("div");
    item.className = "palette-item";
    item.title = "Clicca per copiare HEX e NCS";

    item.innerHTML = `
      <div class="color-swatch" style="background-color: ${colore.hex};"></div>
      <div class="color-details">
        <span class="color-name">${colore.nome}</span>
        <span class="color-codes">HEX ${colore.hex} &nbsp;•&nbsp; NCS ${colore.ncs}</span>
      </div>
    `;

    item.onclick = () => {
      const testoDaCopiare = `${colore.nome} — HEX: ${colore.hex} | NCS: ${colore.ncs}`;
      navigator.clipboard.writeText(testoDaCopiare);
      const hint = document.getElementById("copy-hint");
      if (hint) {
        hint.textContent = `Copiato: ${colore.nome} (${colore.hex} / NCS ${colore.ncs})`;
        setTimeout(() => {
          hint.textContent = "Clicca su un colore per copiare i codici HEX e NCS";
        }, 2500);
      }
    };

    grid.appendChild(item);
  });
}

function restartQuiz() {
  currentQuestionIndex = 0;
  userChoices = [];
  resultCard.style.display = "none";
  quizContainer.style.display = "block";
  showQuestion();
}

// Inicia el quiz al cargar
showQuestion();


 
