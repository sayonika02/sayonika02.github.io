document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section');

  function checkVisibility() {
    const triggerBottom = window.innerHeight * 0.8;

    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < triggerBottom) {
        section.classList.add('visible');
      } else {
        section.classList.remove('visible');
      }
    });
  }

  // Initial check
  checkVisibility();

  // On scroll
  window.addEventListener('scroll', checkVisibility);
});
