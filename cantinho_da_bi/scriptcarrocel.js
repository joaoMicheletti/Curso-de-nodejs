let slideIndex = 0;

function moveSlide(n) {
  const slides = document.querySelectorAll('.carousel-inner img');
  slideIndex += n;
  if (slideIndex > 3 || slideIndex < 0) {
    slideIndex = 0;   
  }
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  const translateValue = -slideIndex * 100;
  document.querySelector('.carousel-inner').style.transform = `translateX(${translateValue}%)`;
}
