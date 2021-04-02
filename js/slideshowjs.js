var slideIndex = 0;
var timer = 3000;
var timerId = null;
function plusSlides(n) {
  if(timerId != null) {
    clearTimeout(timerId);
    timerId = null;
  }
  showSlides(slideIndex += n - 1);
}
function currentSlide(n) {
  if(timerId != null) {
    clearTimeout(timerId);
    timerId = null;
  }
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  if (slideIndex < 1) {slideIndex += slides.length}    
  slides[slideIndex - 1].style.display = "block";  
  timerId = setTimeout(showSlides, 3000, slideIndex);		
}
