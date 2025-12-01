
//carousel code
let currentSlide = 0;
        const carousel = document.getElementById('carousel');
        const slides = document.querySelectorAll('.carousel-item');
        const totalSlides = slides.length;

        function showSlide(index) {
            if (index >= totalSlides) currentSlide = 0;
            else if (index < 0) currentSlide = totalSlides - 1;
            else currentSlide = index;
            carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
        }

        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        function prevSlide() {
            showSlide(currentSlide - 1);
        }




//Header code
 const navLinks = document.querySelectorAll(".navbar a");
const currentPath = window.location.pathname.split("/").pop();
const currentHash = window.location.hash;


navLinks.forEach(link => link.classList.remove("active"));


if (currentPath === "" || currentPath === "index.html") {
  
  document.querySelector(".home").classList.add("active");
} 
else if (currentPath === "events.html") {
  document.querySelector(".events").classList.add("active");
}
else if (currentPath === "tour.html") {
  document.querySelector(".pub").classList.add("active");
}
else if (currentPath === "menu.html") {
  document.querySelector(".menu").classList.add("active");
}


navLinks.forEach(link => {
  link.addEventListener("click", function() {
    navLinks.forEach(item => item.classList.remove("active"));
    if (this.classList.contains("connect")) {
      document.querySelector(".home").classList.add("active");
    } else {
      this.classList.add("active");
    }
  });
});


