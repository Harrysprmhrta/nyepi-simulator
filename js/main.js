const startBtn = document.getElementById("startJourney");
const hero = document.getElementById("hero");
const noiseSection = document.getElementById("noise");
const fadeScreen = document.getElementById("fadeScreen");

startBtn.addEventListener("click", () => {
  hero.classList.add("journey-start");

  document.body.classList.remove("hero-lock");

  // setelah zoom selesai
  setTimeout(() => {
    fadeScreen.classList.add("show");
  }, 1000);

  // pindah section ketika layar hitam
  setTimeout(() => {
    noiseSection.scrollIntoView({
      behavior: "instant",
      block: "start",
    });

    noiseSection.classList.add("show");
  }, 1350);

  // buka fade
  setTimeout(() => {
    fadeScreen.classList.remove("show");
  }, 1650);
});

/* =========================================
   SECTION NAVIGATION
========================================= */

const toPrinciplesBtn = document.getElementById("toPrinciples");
const gotoChallengeBtn = document.getElementById("gotoChallenge");

if (toPrinciplesBtn) {
  toPrinciplesBtn.addEventListener("click", () => {
    document.getElementById("principles").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

if (gotoChallengeBtn) {
  gotoChallengeBtn.addEventListener("click", () => {
    document.getElementById("nyepiChallenge").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
