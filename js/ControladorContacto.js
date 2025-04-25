
document.addEventListener("DOMContentLoaded", function () {
  const formContacto = document.getElementById("contacto_form");
  const switchContacto = document.getElementById('idiomaSwitch');
  const btnEnviar = document.getElementById("enviarContacto");
  formContacto.addEventListener("submit", function (e) {
    e.preventDefault();
    btnEnviar.disabled = true;
    const nombre = formContacto.form_nombre.value.trim();
    const correo = formContacto.form_correo.value.trim();
    const comentario = formContacto.form_mensaje.value.trim();
    const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


      if (!switchContacto.checked) {//idioma espanol
        if (!nombre || !correo || !comentario) {
          Swal.fire({
            title: 'Campos Obligatorios',
            text: '¡Recuerda completar todos los campos!',
            icon: 'warning',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#07a1ff'
          });
          btnEnviar.disabled = false;
        }else{
    
          if (!formatoCorreo.test(correo)) {
              Swal.fire({
                title: 'Correo invalido',
                text: 'Por favor, introduce un correo electrónico válido.',
                icon: 'warning',
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#07a1ff'
              });
              btnEnviar.disabled = false;
            }else{
              enviarCorreo(formContacto)
              .then(function() {
                 Swal.fire({
                  title: 'Correo Enviado',
                  text: 'Tu mensaje fue enviado correctamente.',
                  icon: 'success',
                  confirmButtonText: 'Aceptar',
                  confirmButtonColor: '#07a1ff'
                });
    
                 formContacto.reset();
                 btnEnviar.disabled = false;
              }, function(error) {
                
                 Swal.fire({
                  title: '¡Ups! Ocurrió un error',
                  text: 'Lo siento, parece que ha ocurrido un error.\n Error Producido: '+error+' \n Por favor intenta de nuevo más tarde.',
                  icon: 'error',
                  confirmButtonText: 'Aceptar',
                  confirmButtonColor: '#07a1ff'
                });
                btnEnviar.disabled = false;
    
              });
    
    
            }
    
        }

      } else {
//idioma ingles
        if (!nombre || !correo || !comentario) {
          Swal.fire({
            title: 'Required Fields',
            text: 'Remember to complete all fields!',
            icon: 'warning',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#07a1ff'
          });
          btnEnviar.disabled = false;
        }else{
    
          if (!formatoCorreo.test(correo)) {
              Swal.fire({
                title: 'Invalid email',
                text: 'Please enter a valid email address.',
                icon: 'warning',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#07a1ff'
              });
              btnEnviar.disabled = false;
            }else{
              enviarCorreo(formContacto)
              .then(function() {
                 Swal.fire({
                  title: 'Sent Email',
                  text: 'Your message was sent successfully.',
                  icon: 'success',
                  confirmButtonText: 'Ok',
                  confirmButtonColor: '#07a1ff'
                });
    
                 formContacto.reset();
                 btnEnviar.disabled = false;
              }, function(error) {
                
                 Swal.fire({
                  title: 'Oops! An error occurred.',
                  text: 'Sorry, it seems an error has occurred. Error Occurred: '+error+'. Please try again later.',
                  icon: 'error',
                  confirmButtonText: 'Ok',
                  confirmButtonColor: '#07a1ff'
                });
                btnEnviar.disabled = false;
    
              });
    
    
            }
    
        }
       
      }
      

  });
});

function enviarCorreo(formContacto) {
  return emailjs.sendForm('service_yzcigjf', 'template_64gi219', formContacto, "o1LtQ_Dk5npT4Wa8B");
}