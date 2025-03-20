
    // Hero Slider
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-slider .btn');
    let currentSlide = 0;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
      dots.forEach((dot, i) => {
        dot.classList.toggle('btn-light', i !== index);
        dot.classList.toggle('btn-warning', i === index);
      });
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        currentSlide = i;
        showSlide(currentSlide);
      });
    });

    setInterval(nextSlide, 5000);

    // Campus Tour
    const locations = document.querySelectorAll('.campus-location');
    const locationDetails = document.querySelector('.campus-tour-details');

    locations.forEach(location => {
      location.addEventListener('click', () => {
        locations.forEach(l => l.classList.remove('active'));
        location.classList.add('active');
        // Update location details here
      });
    });
 