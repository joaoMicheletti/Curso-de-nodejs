var elemento = document.querySelector('#produtos');
var displayAtual = window.getComputedStyle(elemento).getPropertyValue('width');
var reple = displayAtual.replace("px","");
var valorInt = parseInt(reple);
let slideIndex = 0;
var num = 0;
if(valorInt > 800){
  num = 6;
} else if(valorInt < 480){
  num = 12;
};

function moveSlide(n) {
  const slides = document.querySelectorAll('.carousel-inner img');
  slideIndex += n;
  if (slideIndex > num || slideIndex < 0) {
    slideIndex = 0;
    console.log(valorInt);
  }
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  const translateValue = -slideIndex * 100;
  document.querySelector('.carousel-inner').style.transform = `translateX(${translateValue}%)`;
}
