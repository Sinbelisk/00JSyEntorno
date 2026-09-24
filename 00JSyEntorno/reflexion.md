1. ¿Qué hace `console.log`?
Imprime por la salida estandar de la consola del navegador una cadena.
Útil para depurar.

2. ¿Qué ocurre si cambias el valor de la variable desde la consola? ¿Se puede?
Se cambia el valor (a no ser que sea una constante). Dura solo para la sesión.

3. ¿Para qué sirve la consola del navegador en este contexto?
Probar y depurar código, inspeccionar variables, pruebas en vivo de JS.

4. Para qué sirve el archivo HTML en este contexto?
Estructurar y definir la página.

5. ¿Por qué es una buena práctica separar el código JavaScript del HTML?
Por organización y reutilización de código. El HTML solo debería contener
etiquetas html y mantener la lógica por separado.

6. Por qué se llama Vanilla JavaScript?
Porque es JS sin librerias ni frameworks, solo libreria estandar.


7. Cuándo se usa JavaScript puro y cuándo se usan frameworks o librerías como REACT?
Solo se usa JS puro para aprender, para aplicaciones profesionales o proyectos personales
es mejor usar un framework como React o Svelte.

8. Cómo se define una función en JS
function hello() {
    // Contenido.
}

9. Sobre el código demuestra la diferencia entre let y const
let es para declarar una variable cuyo valor puede cambiar, const como dice la
palabra reservada es para constantes:

```javascript
let a = 12;
const B = 15;

a = 20; // Se puede modificar el valor.
B = 41; // Esto dará error, las constantes no se pueden modificar

const B = 41; // Para cambiar el valor hay que volver a declarar la constante.

// En caso de los objetos, no se pueden reasignar pero si modificar
// sus atributos.
const C = {valor: 10};
C.valor = 15

C = {valor: 81} // esto NO se puede hacer.

```

10. Indica en el código:
   1. Si puede evitarse el uso de let. Qué hace
   En este caso solo se usa const porque nombre no se reasigna en ningún momento,
   por lo que let no es necesario:

```javascript
const nombre = document.getElementById("nombreInput").value;
// De variar, deberia usarse let.
```

   2. Cuántos eventos hay en el código, cuáles son y para qué sirven
    Hay dos eventos:
```javascript

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
    
      event.preventDefault(); // Evita que se recargue la página
      const nombre = document.getElementById("nombreInput").value;
      document.getElementById("salida").textContent = "¡Hola, " + nombre + "!";
    });
});
```
