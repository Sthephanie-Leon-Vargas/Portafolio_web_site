const traducciones = {
    es: {
      tituloInicio: "Inicio",
      textoInicio: "Bienvenido a la sección de inicio con animación de entrada.",
      tituloServicios: "Servicios",
      textoServicios: "Estos son nuestros servicios destacados.",
      tituloContacto: "Contacto",
      textoContacto: "Contáctanos a través del formulario o nuestras redes sociales.",
    },
    en: {
      tituloInicio: "Home",
      textoInicio: "Welcome to the animated home section.",
      tituloServicios: "Services",
      textoServicios: "These are our featured services.",
      tituloContacto: "Contact",
      textoContacto: "Contact us via the form or our social media.",
    }
  };

  const switchIdioma = document.getElementById('idiomaSwitch');
  
  switchIdioma.addEventListener('change', function () {
    const idioma = this.checked ? 'en' : 'es';
    for (const id in traducciones[idioma]) {
      document.getElementById(id).textContent = traducciones[idioma][id];
    }
  });
