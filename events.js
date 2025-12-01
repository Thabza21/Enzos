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



document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.navbar a');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            // Remove styles from all links
            links.forEach(l => {
                l.style.backgroundColor = '';
                l.style.padding = '';
                l.style.borderRadius = '';
            });

            // Apply styles to the clicked link
            e.target.style.backgroundColor = '#ff9900';
            e.target.style.padding = '6px 10px';
            e.target.style.borderRadius = '5px';
        });
    });

});

