(() => {
  // ===============================
  // ELEMENT
  // ===============================

  const heroMusic = document.getElementById("heroMusic");
  const challengeMusic = document.getElementById("challengeMusic");

  const startJourneyBtn = document.getElementById("startJourney");
  const startChallengeBtn = document.getElementById("startChallenge");
  const enterSilenceBtn = document.getElementById("enterSilence");
  const soundToggleBtn = document.getElementById("soundToggle");

  if (!heroMusic || !challengeMusic) return;

  // ===============================
  // SETTING
  // ===============================

  heroMusic.volume = 0.28;
  challengeMusic.volume = 0.22;

  let currentMusic = heroMusic;
  let soundOn = true;

  // ===============================
  // CROSSFADE
  // ===============================

  function crossFade(from, to, targetVolume) {
    if (from === to) return;

    to.volume = 0;

    to.play().catch(() => {});

    const fade = setInterval(() => {
      if (from.volume > 0) {
        from.volume = Math.max(0, from.volume - 0.02);
      }

      if (to.volume < targetVolume) {
        to.volume = Math.min(targetVolume, to.volume + 0.02);
      }

      if (from.volume <= 0) {
        from.pause();

        clearInterval(fade);
      }
    }, 60);

    currentMusic = to;
  }

  // ===============================
  // START WEBSITE
  // ===============================

  if (startJourneyBtn) {
    startJourneyBtn.addEventListener("click", () => {
      if (!soundOn) return;

      heroMusic.play().catch(() => {});

      currentMusic = heroMusic;
    });
  }

  // ===============================
  // START CHALLENGE
  // ===============================

  if (startChallengeBtn) {
    startChallengeBtn.addEventListener("click", () => {
      if (!soundOn) return;

      crossFade(heroMusic, challengeMusic, 0.22);
    });
  }

  // ===============================
  // BACK TO HERO
  // ===============================

  if (enterSilenceBtn) {
    enterSilenceBtn.addEventListener("click", () => {
      if (!soundOn) return;

      crossFade(challengeMusic, heroMusic, 0.28);
    });
  }

  // ===============================
  // SOUND TOGGLE
  // ===============================

  if (soundToggleBtn) {
    soundToggleBtn.style.cursor = "pointer";

    soundToggleBtn.addEventListener("click", () => {
      soundOn = !soundOn;

      if (soundOn) {
        soundToggleBtn.innerHTML = "🔊 ";

        currentMusic.play().catch(() => {});
      } else {
        soundToggleBtn.innerHTML = "🔇 ";

        heroMusic.pause();
        challengeMusic.pause();
      }
    });
  }
})();
