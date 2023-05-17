// Función para enviar y confirmar el formulario
function enviarFormulario() {
    // Obtener los valores de los campos del formulario
    var email = document.getElementById("inputEmail4").value;
    var ciudad = document.getElementById("inputCity").value;
    var estado = document.getElementById("inputState").value;
    var calle = document.getElementById("inputZip").value;
  
    // Validar que se hayan ingresado todos los campos requeridos
    if (email === "" || ciudad === "" || estado === "" || calle === "") {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Favor de llenar todo el formulario',
            showConfirmButton: false,
            timer: 1500
          })
      return;
    }
  
    // Crear un objeto con los datos del formulario
    var datosFormulario = {
      email: email,
      ciudad: ciudad,
      estado: estado,
      calle: calle
    };
  
    // Realizar la solicitud de envío mediante AJAX o cualquier otra técnica de tu preferencia
    // Aquí se muestra una llamada ficticia a una función de envío mediante AJAX
    enviarFormularioAJAX(datosFormulario);
  }
  
  // Función ficticia para enviar el formulario mediante AJAX
  function enviarFormularioAJAX(datos) {
    // Realizar la lógica para enviar el formulario, como hacer una solicitud POST al servidor
    // Puedes usar librerías como jQuery, Axios o el objeto XMLHttpRequest nativo
  
    // Simular una respuesta exitosa
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Se ha enviado tu mensaje',
        showConfirmButton: false,
        timer: 1500
      })
  
    // Restablecer los campos del formulario después de enviarlo
    document.getElementById("form1").reset();
  }
  
  // Asignar la función al evento 'submit' del formulario
  document.getElementById("form1").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto
    enviarFormulario();
  });
  