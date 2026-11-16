
  const slides = document.querySelectorAll(".slider .slide");
  const prevButton = document.querySelector(".slider .prev");
  const nextButton = document.querySelector(".slider .next");
  const dots = document.querySelectorAll(".slider .dots span");

  let currentIndex = [...slides].findIndex(slide =>
    slide.classList.contains("active")
  );

  if (currentIndex < 0) currentIndex = 0;

  function showSlide(index) {
    slides[currentIndex].classList.remove("active");
    if (dots[currentIndex]) dots[currentIndex].classList.remove("dot-active");

    currentIndex = (index + slides.length) % slides.length;

    slides[currentIndex].classList.add("active");
    if (dots[currentIndex]) dots[currentIndex].classList.add("dot-active");
  }

  let timer;

  function startAutoSlide() {
    clearInterval(timer);
    timer = setInterval(() => showSlide(currentIndex + 1), 3000);
  }

  prevButton.addEventListener("click", () => {
    showSlide(currentIndex - 1);
    startAutoSlide();
  });

  nextButton.addEventListener("click", () => {
    showSlide(currentIndex + 1);
    startAutoSlide();
  });

  document.querySelector(".slider").addEventListener("mouseenter", () => {
    clearInterval(timer);
  });

  document.querySelector(".slider").addEventListener("mouseleave", startAutoSlide);

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
      startAutoSlide();
    });
  });

  startAutoSlide();