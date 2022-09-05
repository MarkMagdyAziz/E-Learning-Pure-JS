
// Handle Slider Functions
let mkSlideIndex = 1;
showSlides(mkSlideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(mkSlideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(mkSlideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { mkSlideIndex = 1 }
  if (n < 1) { mkSlideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[mkSlideIndex - 1].style.display = "block";
  dots[mkSlideIndex - 1].className += " active";
}

automaticSlideShow()
function automaticSlideShow() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  mkSlideIndex++;
  if (mkSlideIndex > slides.length) { mkSlideIndex = 1 }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[mkSlideIndex - 1].style.display = "block";
  dots[mkSlideIndex - 1].className += " active";
  setTimeout(automaticSlideShow, 3000); // Change image every 2 seconds
}


// Handle Scrolling to Top Button
//Get the button
var upArrowBtn = document.getElementById("upArrowBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
    upArrowBtn.style.visibility = "visible";
  } else {
    upArrowBtn.style.visibility = "hidden";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function myFunction() {
  let btnsContainer = document.getElementById("fredisaContainer");
  if (btnsContainer.style.display === "block") {
    btnsContainer.style.display = "none";
  } else {
    btnsContainer.style.display = "block";
  }
}