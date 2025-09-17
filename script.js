const slides = document.querySelector('.slides');
  const slideCount = document.querySelectorAll('.slide').length;
  const dotsContainer = document.querySelector('.dots');
  let currentIndex = 0;

  // Create dots
  for (let i = 0; i < slideCount; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  }

  function updateDots() {
    document.querySelectorAll('.dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });
  }

  function goToSlide(index) {
    currentIndex = index;
    slides.style.transform = `translateX(-${100 * index}%)`;
    updateDots();
  }

  document.querySelector('.arrow.left').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    goToSlide(currentIndex);
  });

  document.querySelector('.arrow.right').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slideCount;
    goToSlide(currentIndex);
  });