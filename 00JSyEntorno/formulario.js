// DOMContentLoaded: Primer evento, espera a que el html se cargue
// antes de ejecutar el código.

// Esta función es un "listener" (un tipo de patrón de diseño)
// Espera a que se dispare el evento para ejecutar el código
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("formulario")

    // Segundo evento "submit", se dispara cuando el usuario envía el
    // formulario.
    // Evita que se recargue la página   .addEventListener("submit", function (event) {
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Evita que se recargue la página
      const nombre = document.getElementById("nombreInput").value;
      document.getElementById("salida").textContent = "¡Hola, " + nombre + "!";
    });
});
