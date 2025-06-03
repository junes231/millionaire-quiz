const questions = [
  {
    question: "What best describes your current financial goal?",
    answers: ["Make passive income", "Start an online business", "Quit my job"]
  },
  {
    question: "How much time can you invest weekly?",
    answers: ["1–3 hours", "4–10 hours", "10+ hours"]
  },
  {
    question: "Do you have prior marketing experience?",
    answers: ["Yes", "No", "A little"]
  },
  {
    question: "What’s your monthly income goal?",
    answers: ["$1,000", "$5,000", "$10,000+"]
  },
  {
    question: "What’s your biggest motivation?",
    answers: ["Freedom", "Family", "Wealth"]
  },
  {
    question: "Do you already have an online product?",
    answers: ["Yes", "No", "Planning to"]
  },
  {
    question: "Are you willing to invest in yourself?",
    answers: ["Yes", "Maybe", "No"]
  }
];

let currentQuestion = 0;

function showQuestion() {
  const container = document.getElementById("quiz-container");
  if (currentQuestion < questions.length) {
    const q = questions[currentQuestion];
    container.innerHTML = `
      <h2>${q.question}</h2>
      ${q.answers.map(answer => `<button onclick="nextQuestion()">${answer}</button>`).join("")}
    `;
  } else {
    container.innerHTML = `
      <h2>Enter your email to see your result:</h2>
      <form action="https://docs.google.com/forms/d/e/1FAIpQLSfUY6xbfWPy6CdapCJQcoVHW1Pfsdsvd9yKwa2J2SyASF0QlA/formResponse" method="POST" target="_blank" onsubmit="redirectToOffer()">
        <input name="entry.972272214" type="email" placeholder="Your email" required />
        <button type="submit">Get Access</button>
      </form>
    `;
  }
}

function nextQuestion() {
  currentQuestion++;
  showQuestion();
}

function redirectToOffer() {
  setTimeout(() => {
    window.location.href = "https://millionairepartnership.com/webclass-d24#aff=Wdyguns";
  }, 1000);
}

document.addEventListener("DOMContentLoaded", showQuestion);