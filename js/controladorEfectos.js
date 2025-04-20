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

window.onscroll = function () {
  let btn = document.getElementById("scrollTopBtn");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Scroll suave al inicio
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

//Descarga de CV
const checkboxIdioma = document.getElementById("idiomaSwitch");
const btnDescarga = document.getElementById("descargaCV");

checkboxIdioma.addEventListener("change", function () {
  if (!checkboxIdioma.checked) {
   
    btnDescarga.href = "cv/CV_Espanol_SthephanieLeonVargas.pdf";
    btnDescarga.textContent = " CV-ES";
  } else {
    btnDescarga.href = "cv/CV_Ingles_SthephanieLeonVargas.pdf";
    btnDescarga.textContent = " CV-EN";
  }
});