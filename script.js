const riddles = [
  {
    question: "Welche Zahl ist heute wichtiger als alle anderen?",
    hint: "Tipp: So viele Briefe sollten am Ende zusammenkommen.",
    answers: ["18", "achtzehn"],
  },
  {
    question: "Wer darf diesen Brief am Ende lesen?",
    hint: "Tipp: Der Name steht ziemlich prominent auf dieser Seite.",
    answers: ["emma"],
  },
  {
    question: "Was wurde aus einem zu spaeten Brief?",
    hint: "Tipp: Das deutsche Wort dafuer steht im ersten Bildschirm.",
    answers: ["raetsel", "rätsel", "riddle"],
  },
];

const state = {
  step: 0,
  misses: 0,
};

const startButton = document.querySelector("[data-start]");
const panel = document.querySelector("[data-riddle-panel]");
const form = document.querySelector("[data-answer-form]");
const answerInput = document.querySelector("[data-answer]");
const question = document.querySelector("[data-question]");
const hint = document.querySelector("[data-hint]");
const stepLabel = document.querySelector("[data-step-label]");
const feedback = document.querySelector("[data-feedback]");
const kindUnlock = document.querySelector("[data-kind-unlock]");
const dots = [...document.querySelectorAll(".progress__dot")];
const letterSection = document.querySelector("[data-letter-section]");
const letter = document.querySelector(".letter");

function normalize(value) {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "");
}

function renderRiddle() {
  const current = riddles[state.step];
  question.textContent = current.question;
  hint.textContent = current.hint;
  stepLabel.textContent = `Frage ${state.step + 1} von ${riddles.length}`;
  feedback.textContent = "";
  answerInput.value = "";
  answerInput.focus();

  dots.forEach((dot, index) => {
    dot.classList.toggle("is-active", index <= state.step);
  });
}

function revealLetter() {
  letterSection.hidden = false;
  form.hidden = true;
  kindUnlock.hidden = true;
  feedback.textContent = "Geschafft. Der Brief ist offen.";
  letterSection.scrollIntoView({ behavior: "smooth", block: "start" });

  window.setTimeout(() => {
    letter.classList.add("is-open");
  }, 260);
}

function checkAnswer(value) {
  const current = riddles[state.step];
  const normalized = normalize(value);
  const isCorrect = current.answers.some((answer) => normalize(answer) === normalized);

  if (!isCorrect) {
    state.misses += 1;
    feedback.textContent =
      state.misses < 3
        ? "Noch nicht ganz. Der Tipp hilft wirklich."
        : "Fast. Und falls der Geburtstag wichtiger ist als das Raetsel: unten gibt es den netten Ausgang.";
    if (state.misses >= 3) {
      kindUnlock.hidden = false;
    }
    return;
  }

  state.step += 1;
  feedback.textContent = "Richtig.";

  if (state.step >= riddles.length) {
    revealLetter();
    return;
  }

  window.setTimeout(renderRiddle, 360);
}

startButton.addEventListener("click", () => {
  panel.scrollIntoView({ behavior: "smooth", block: "center" });
  panel.classList.add("is-visible");
  window.setTimeout(renderRiddle, 420);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  checkAnswer(answerInput.value);
});

kindUnlock.addEventListener("click", revealLetter);

const panelObserver = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      panel.classList.add("is-visible");
      panelObserver.disconnect();
    }
  },
  { threshold: 0.4 },
);

panelObserver.observe(panel);
