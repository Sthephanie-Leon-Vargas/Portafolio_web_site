//efecto para el menu
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.6 // 60% visible
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});