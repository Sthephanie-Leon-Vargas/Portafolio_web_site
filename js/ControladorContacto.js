document.addEventListener("DOMContentLoaded", function () {
    const formContacto = document.getElementById("contacto_form");
  
    formContacto.addEventListener("submit", function (e) {
      e.preventDefault();

      const nombre = formContacto.form_nombre.value.trim();
      const correo = formContacto.form_correo.value.trim();
      const comentario = formContacto.form_mensaje.value.trim();
      const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      if (!nombre || !correo || !comentario) {
        alert("Por favor, completa todos los campos.");
       
      }else{

        if (!formatoCorreo.test(correo)) {
            alert("Por favor, introduce un correo electrónico válido.");
          
          }else{

            emailjs.sendForm('service_yzcigjf', 'template_64gi219', formContacto, "o1LtQ_Dk5npT4Wa8B")
            .then(function() {
               alert('Correo enviado con éxito!');
               formContacto.reset();
            }, function(error) {
               alert('Error al enviar el correo:', error);
            });


          }

      }
  
    });
  });