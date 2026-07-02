/* ======================================================
   SECTION7.JS
   Reveal Animation
====================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const sections = [
    document.getElementById("beforeSilence"),
    document.getElementById("beyondSilence"),
    document.getElementById("principles"),
  ];

  sections.forEach((section) => {
    if (!section) return;

    const items = section.querySelectorAll(
      "h2, h3, p, .before-card, .feature-card, .meaning-card, .fact-card, .visit-bali, .principle-card, .principles-ending",
    );

    items.forEach((item) => {
      item.style.opacity = "0";
      item.style.transform = "translateY(40px)";
      item.style.transition = "opacity .8s ease, transform .8s ease";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          items.forEach((item, index) => {
            setTimeout(() => {
              item.style.opacity = "1";
              item.style.transform = "translateY(0)";
            }, index * 120);
          });

          observer.unobserve(section);
        });
      },

      {
        threshold: 0.18,
      },
    );

    observer.observe(section);
  });
});
