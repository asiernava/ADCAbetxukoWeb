/* Programa Menu Vertical. Cuando se pulsa hacemos desplegar el menu */

function toggleMenu() {
    var menuItems = document.getElementById("menuItems");
    if (menuItems.style.display === "none") {
      menuItems.style.display = "block";
    } else {
      menuItems.style.display = "none";
    }
  }



document.addEventListener("DOMContentLoaded", function() {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".foto");
  const slideCount = slides.length;
  
  function nextSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slideCount;
    slides[currentSlide].classList.add("active");
    }
  
  setInterval(nextSlide, 5000);
  });