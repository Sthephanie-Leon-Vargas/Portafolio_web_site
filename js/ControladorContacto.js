document.addEventListener("DOMContentLoaded", function () {
    const formContacto = document.getElementById("contacto_form");
  
    formContacto.addEventListener("submit", function (e) {
      e.preventDefault();

      const nombre = formContacto.form_nombre.value.trim();
      const correo = formContacto.form_correo.value.trim();
      const comentario = formContacto.form_mensaje.value.trim();
      const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      if (!nombre || !correo || !comentario) {
        Swal.fire({
          title: 'Campos Obligatorios',
          text: '¡Recuerda completar todos los campos!',
          icon: 'warning',
          confirmButtonText: 'Aceptar',
          confirmButtonColor: '#07a1ff'
        });
      }else{

        if (!formatoCorreo.test(correo)) {
            Swal.fire({
              title: 'Correo invalido',
              text: 'Por favor, introduce un correo electrónico válido.',
              icon: 'warning',
              confirmButtonText: 'Aceptar',
              confirmButtonColor: '#07a1ff'
            });
          }else{

            emailjs.sendForm('service_yzcigjf', 'template_64gi219', formContacto, "o1LtQ_Dk5npT4Wa8B")
            .then(function() {
               Swal.fire({
                title: 'Correo Enviado',
                text: 'Tu mensaje fue enviado correctamente.',
                icon: 'success',
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#07a1ff'
              });

               formContacto.reset();

            }, function(error) {
              
               Swal.fire({
                title: '¡Ups! Ocurrió un error',
                text: 'Lo siento, parece que ha ocurrido un error.\n Error Producido: '+error+' \n Por favor intenta de nuevo más tarde.',
                icon: 'error',
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#07a1ff'
              });


            });


          }

      }
  
    });
  });