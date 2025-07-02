
const questions = [
  {
    question: "Islam ka pehla rukun kya hai?",
    options: ["Namaz", "Roza", "Tawheed", "Zakat"],
    answer: "Tawheed"
  },
  {
    question: "Hazrat Muhammad (PBUH) ka paidaishi sheher?",
    options: ["Madina", "Makka", "Taif", "Bait-ul-Muqaddas"],
    answer: "Makka"
  },
  {
    question: "Qur’an kis zaban mein nazil hui?",
    options: ["Farsi", "Urdu", "Arabic", "Turkish"],
    answer: "Arabic"
  },
  {
    question: "Roza kis mahine mein farz hota hai?",
    options: ["Muharram", "Shaban", "Ramzan", "Safar"],
    answer: "Ramzan"
  },
  {
    question: "Wahi sabse pehle kis gharey mein nazil hui thi?",
    options: ["Ghar-e-Hira", "Ghar-e-Saur", "Ghar-e-Taif", "Ghar-e-Madina"],
    answer: "Ghar-e-Hira"
  }
];

let currentIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");

function showQuestion() {
  const currentQ = questions[currentIndex];
  questionEl.textContent = currentQ.question;
  optionsEl.innerHTML = "";
  currentQ.options.forEach(option => {
    const div = document.createElement("div");
    div.textContent = option;
    div.classList.add("option");
    div.onclick = () => selectOption(option);
    optionsEl.appendChild(div);
  });
}

function selectOption(selected) {
  const correct = questions[currentIndex].answer;
  if (selected === correct) {
    score++;
  }
  currentIndex++;
  if (currentIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz").style.display = "none";
  resultEl.style.display = "block";
  resultEl.textContent = `Aapka score: ${score} / ${questions.length}`;
}

nextBtn.addEventListener("click", showQuestion);

showQuestion();
