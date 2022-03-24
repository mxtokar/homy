let slidesIndex = 1;
showSlides(slidesIndex);

function plusSlides(n) {
  showSlides(slidesIndex += n)
}

function currentSlide(n){
  showSlides(slidesIndex = n)
}

function showSlides(n){
  let i;
  let slides = document.getElementsByClassName("news-photo-slide")
  let rectangles = document.getElementsByClassName("news-rectangles")

  if(n > slides.length){
    slidesIndex = 1
  }
  if(n < 1){
    slidesIndex = slides.length
  }
  for(i=0; i < slides.length; i++){
    slides[i].style.display = "none"
  }
  for(i=0; i < rectangles.length; i++){
    rectangles[i].className = rectangles[i].className.replace("active", "")
  }

 
  slides[slidesIndex - 1].style.display = "block"
  rectangles[slidesIndex - 1].className += " active"
}

let timer = 0;

function autoShow(){
  timer = window.setInterval(function() { 
    plusSlides(1) 
  }, 3000)
}

autoShow()

function stopFunction()
{
  clearInterval(timer);
}
