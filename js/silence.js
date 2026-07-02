/* ==========================================
   SECTION 06 : THE SILENCE
========================================== */

const silenceSection = document.getElementById("silence");
const silenceLines = document.querySelectorAll(".silence-line");
const continueBtn = document.getElementById("endJourney");

let silenceStarted = false;

function startSilence() {
  if (silenceStarted) return;

  silenceStarted = true;

  // Zoom video perlahan
  silenceSection.classList.add("active");

  const title = document.querySelector(".silence-content h2");
  const texts = document.querySelectorAll(".floating-text");

  let index = 0;

  // ==========================
  // 1. Judul muncul sebentar
  // ==========================

  title.style.opacity = "1";

  // 2.5 detik kemudian judul hilang
  setTimeout(() => {
    title.style.opacity = "0";
  }, 2500);

  // ==========================
  // 2. Setelah judul hilang,
  //    baru narasi dimulai
  // ==========================

  setTimeout(() => {
    showText();
  }, 3500);

  function showText() {
    // Hilangkan semua text
    texts.forEach((text) => {
      text.classList.remove("show");
    });

    // Kalau masih ada text
    if (index < texts.length) {
      texts[index].classList.add("show");

      // Hilangkan lagi setelah 2 detik
      setTimeout(() => {
        texts[index].classList.remove("show");
      }, 1800);

      index++;

      // Lanjut text berikutnya
      setTimeout(showText, 2500);
    }

    // Semua selesai
    else {
      // Nikmati video dulu 5 detik
      setTimeout(() => {
        continueBtn.classList.add("show");
      }, 5000);
    }
  }
}

/* ===============================
   START WHEN SECTION IS VISIBLE
================================ */

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startSilence();
      }
    });
  },
  {
    threshold: 0.6,
  },
);

observer.observe(silenceSection);

/* ===============================
   END JOURNEY
================================ */

continueBtn.addEventListener("click", () => {
  const nextSection = document.getElementById("credits");

  if (nextSection) {
    nextSection.scrollIntoView({
      behavior: "smooth",
    });
  }
});
