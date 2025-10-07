// Auto-slide project images
const sliders = document.querySelectorAll('.project-slider');

sliders.forEach(slider => {
  const slides = slider.querySelectorAll('img');
  let index = 0;
  slides[index].classList.add('active');

  setInterval(() => {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
  }, 3000); // change image every 3 seconds
});
