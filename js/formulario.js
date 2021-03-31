var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var correo = document.getElementById("correo");

function enviarFormulario() {
  console.log("hellooo");

  if (
    nombre.value.length <= 0 ||
    apellido.value.length <= 0 ||
    correo.value.length <= 0
  ) {
    swal("Ingrese datos!", "nombre, apellido y correo!", "error");
  } else {
  }
}
