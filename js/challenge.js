const challenges = [
  {
    title: "Amati Geni",
    image: "assets/images/amati-geni.png",

    scenario:
      "The island has fallen silent. Inside your home, it is difficult to see clearly. What would you do?",

    optionA: "Sit quietly in the darkness",
    optionB: "Turn on a lamp",

    correct: "A",

    correctFeedback:
      "Correct. Sometimes silence begins when we stop chasing comfort. Tonight, darkness becomes part of the experience.",

    wrongFeedback:
      "Not during Nyepi. Amati Geni teaches us to refrain from fire and artificial light. The darkness encourages calmness and reflection.",
  },

  {
    title: "Amati Lelungan",
    image: "assets/images/amati-lelungan.png",

    scenario: "A friend invites you to explore the island. What would you do?",

    optionA: "Leave the house",
    optionB: "Stay where you are",

    correct: "B",

    correctFeedback:
      "Correct. Today is a time to stay still. Amati Lelungan teaches us to refrain from traveling and allow the island to rest.",

    wrongFeedback:
      "Not during Nyepi. Amati Lelungan asks us to remain at home and avoid unnecessary travel. For one day, the roads belong to silence.",
  },

  {
    title: "Amati Lelanguan",
    image: "assets/images/amati-lelanguan.png",

    scenario: "Your favorite movie has just been released. What would you do?",

    optionA: "Watch the movie",
    optionB: "Spend the day reflecting",

    correct: "B",

    correctFeedback:
      "Correct. Nyepi invites us to look inward rather than seek distractions. Reflection becomes the entertainment of the day.",

    wrongFeedback:
      "Not during Nyepi. Amati Lelanguan encourages us to refrain from entertainment and pleasure. The silence creates space for self-reflection.",
  },

  {
    title: "Amati Karya",
    image: "assets/images/amati-karya.png",

    scenario:
      "Your daily responsibilities can always continue tomorrow. Today, however, is Nyepi. What would you do?",

    optionA: "Pause and observe Nyepi",
    optionB: "Continue working",

    correct: "A",

    correctFeedback:
      "Correct. For one day, work can wait. Amati Karya teaches us to step away from daily responsibilities and focus on spiritual reflection.",

    wrongFeedback:
      "Not during Nyepi. Amati Karya asks us to refrain from work and physical activity. Nyepi is a reminder that rest can be just as important as productivity.",
  },
];

let currentChallenge = 0;
let score = 0;

/* ===========================
LOCK SCROLL ON SECTION 5
=========================== */

function lockScroll() {
  document.body.style.overflow = "hidden";
}

function unlockScroll() {
  document.body.style.overflow = "auto";
}

function unlockChallengeScroll() {
  document.body.style.overflow = "auto";
}

const challengeImage = document.getElementById("challengeImage");

const challengeIntro = document.getElementById("challengeIntro");

const challengeBox = document.getElementById("challengeBox");

const challengeComplete = document.getElementById("challengeComplete");

const challengeStartBtn = document.getElementById("startChallenge");

const progress = document.getElementById("progress");

const title = document.getElementById("challengeTitle");

const scenario = document.getElementById("challengeScenario");

const choiceA = document.getElementById("choiceA");

const choiceB = document.getElementById("choiceB");

const feedback = document.getElementById("feedback");

const nextBtn = document.getElementById("nextChallenge");

const completeTitle = document.getElementById("completeTitle");

const completeText = document.getElementById("completeText");

const completeScore = document.getElementById("completeScore");

const tryAgain = document.getElementById("tryAgain");

function loadChallenge() {
  const data = challenges[currentChallenge];

  progress.textContent = `${currentChallenge + 1} / ${challenges.length}`;

  title.textContent = data.title;

  scenario.textContent = data.scenario;

  choiceA.textContent = data.optionA;

  choiceB.textContent = data.optionB;

  feedback.innerHTML = "";

  choiceA.disabled = false;
  choiceB.disabled = false;

  // Continue belum boleh dipakai
  nextBtn.disabled = true;
  nextBtn.classList.add("hidden");

  challengeImage.style.opacity = "0";

  setTimeout(() => {
    challengeImage.src = data.image;
    challengeImage.style.opacity = "1";
  }, 250);
}

function handleAnswer(answer) {
  const data = challenges[currentChallenge];

  choiceA.disabled = true;
  choiceB.disabled = true;

  if (answer === data.correct) {
    score++;

    feedback.innerHTML = `
      <p class="correct">
        ${data.correctFeedback}
      </p>
    `;
  } else {
    feedback.innerHTML = `
      <p class="wrong">
        ${data.wrongFeedback}
      </p>
    `;
  }

  nextBtn.disabled = false;
  nextBtn.classList.remove("hidden");
}

function showResult() {
  challengeBox.classList.add("hidden");
  challengeComplete.classList.remove("hidden");

  challengeImage.src = "assets/images/nyepi-begin.png";

  completeScore.textContent = `${score} / ${challenges.length}`;

  if (score === 4) {
    completeTitle.textContent = "Guardian of Silence";

    completeText.textContent =
      "You embraced every principle of Catur Brata Penyepian. For a brief moment, you experienced the stillness, discipline, and reflection that make Nyepi unlike any other day in the world.";
  } else if (score === 3) {
    completeTitle.textContent = "Almost There";

    completeText.textContent =
      "You understood the spirit of Nyepi, but a small distraction remained. True silence requires complete commitment, even for just one day.";
  } else if (score === 2) {
    completeTitle.textContent = "You Failed,The Noise Still Remains";

    completeText.textContent =
      "You followed some of the principles of Nyepi, but the habits of everyday life were difficult to leave behind. Silence begins when we let go of movement, work, entertainment, and desire.";
  } else if (score === 1) {
    completeTitle.textContent = "You Are Not Yet Ready For Silence";

    completeText.textContent =
      "The world around you became quiet, but the noise within remained. Nyepi invites us to pause, reflect, and reconnect with ourselves.";
  } else {
    completeTitle.textContent = "You Lost In The Noise";

    completeText.textContent =
      "For one day, Bali chooses silence. Yet the distractions of daily life continued to lead the way. Perhaps it is time to begin the journey again.";
  }

  unlockScroll();
  unlockChallengeScroll();
}

challengeStartBtn.addEventListener("click", () => {
  lockScroll();

  challengeIntro.classList.add("hidden");

  challengeBox.classList.remove("hidden");

  loadChallenge();
});

choiceA.addEventListener("click", () => {
  handleAnswer("A");
});

choiceB.addEventListener("click", () => {
  handleAnswer("B");
});

nextBtn.addEventListener("click", () => {
  currentChallenge++;

  if (currentChallenge >= challenges.length) {
    showResult();
    return;
  }

  loadChallenge();
});

tryAgain.addEventListener("click", () => {
  currentChallenge = 0;
  score = 0;

  challengeComplete.classList.add("hidden");

  challengeIntro.classList.remove("hidden");

  challengeImage.src = "assets/images/nyepi-begin.png";
});

/* ===============================
   ENTER THE SILENCE
================================= */

const enterSilence = document.getElementById("enterSilence");
console.log(enterSilence);

enterSilence.addEventListener("click", () => {
  const challengeFade = document.getElementById("fadeScreen");

  challengeFade.classList.add("show");

  setTimeout(() => {
    document.getElementById("silence").scrollIntoView({
      behavior: "smooth",
    });
  }, 1700);

  setTimeout(() => {
    challengeFade.classList.remove("show");

    if (typeof startSilence === "function") {
      startSilence();
    }
  }, 3200);
});
