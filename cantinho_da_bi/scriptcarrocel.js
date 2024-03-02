var elemento = document.querySelector('#produtos');
var displayAtual = window.getComputedStyle(elemento).getPropertyValue('width');
var reple = displayAtual.replace("px","");
var valorInt = parseInt(reple);
let slideIndex = 0;
var num = 0;
if(valorInt > 800){
  num = 5;
} else if(valorInt < 550){
  num = 15;
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
  const translateValue = -slideIndex * 90;
  document.querySelector('.carousel-inner').style.transform = `translateX(${translateValue}%)`;
}
