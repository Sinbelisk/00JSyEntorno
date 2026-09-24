# JS desde cero en el navegador... antes que REACT.

El objetivo de esta práctica es crear un formulario básico en HTML y JavaScript que permita saludar a un usuario. Publicarlo en un repositorio de GitHub con GitHub Pages. Todo debes documentarlo con un pantallazo en este mismo archivo y personalizarlo con tu tus datos personales.

## Por qué REACT

- REACT es una biblioteca de JavaScript para construir interfaces de usuario.
- Es mantenida por Meta y una comunidad de desarrolladores.
- Permite construir componentes reutilizables.
- Es ampliamente utilizada en la industria, lo que la hace relevante para desarrolladores web.
- Aprender REACT abre oportunidades laborales y mejora las habilidades en desarrollo frontend.
- Cuenta con un ecosistema robusto, incluyendo herramientas como Redux para la gestión del estado y React Router para la navegación.
- Tiene un rendimiento optimizado gracias a su uso del Virtual DOM.
- Se sitúa como uno de los frameworks más populares en la actualidad. [State of JS 2023](https://2023.stateofjs.com/en-US/libraries/front-end-frameworks/)

## Por qué JavaScript antes de REACT
- REACT está construido sobre JavaScript, por lo que es esencial tener una buena comprensión de este lenguaje antes de aprender REACT.
- JavaScript es el lenguaje de programación principal para el desarrollo web frontend.

# ¿Qué es JavaScript?

JavaScript (JS) es un lenguaje de programación interpretado, ligero y multiplataforma, creado inicialmente para dotar de interactividad a las páginas web. Hoy en día, se utiliza tanto en el desarrollo frontend (navegadores) como en el backend (servidores, gracias a Node.js), aplicaciones móviles, de escritorio y más.

## Versiones
- **ECMAScript** es el estándar que define el lenguaje. Las versiones más importantes son:
  - **ES5 (2009):** Amplió la compatibilidad y funcionalidades.
  - **ES6/ES2015:** Introdujo let/const, arrow functions, clases, módulos, promesas, etc.
  - Desde 2015, cada año se publica una nueva versión con mejoras y nuevas características.

## Potencia
- Permite crear desde páginas web dinámicas hasta aplicaciones complejas, videojuegos, servidores, inteligencia artificial y más.
- Es asíncrono, flexible y tiene una enorme cantidad de librerías y frameworks (React, Angular, Vue, etc.).
- Es esencial para el desarrollo web y uno de los lenguajes más demandados en el mercado laboral.

---
## Parte 1: Instalación y configuración

1. **Instala Visual Studio Code**  
   Descarga e instala VS Code desde [code.visualstudio.com](https://code.visualstudio.com/).

## Parte 2: Primeros pasos con la consola del navegador

1. Abre tu navegador web (Chrome, Firefox, Edge, etc.).
2. Accede a cualquier página web y pulsa `F12` o `Ctrl+Shift+I` para abrir las herramientas de desarrollo.
3. Haz clic en la pestaña "Consola".
4. Prueba los siguientes comandos uno por uno y observa el resultado:
   ```js
   2 + 2
   console.log("¡Hola, mundo!")
   let nombre = "Anita"
   nombre
   ```

## Parte 3: Tu primer archivo HTML + JavaScript

1. Crea una carpeta llamada `00JSyEntorno` dentro de tu espacio de trabajo.
2. Dentro de esa carpeta, crea un archivo llamado `hola.html`.
3. Escribe el siguiente código en `hola.html`:
   ```html
   <!DOCTYPE html>
   <html lang="es">
   <head>
     <meta charset="UTF-8">
     <title>Hola JS</title>
   </head>
   <body>
     <script>
       console.log("¡Hola, mundo!");
       let nombre = "Ana";
       console.log("Bienvenida, " + nombre);
     </script>
   </body>
   </html>
   ```
4. Desde VSCode abre el archivo `hola.html` en tu navegador.
5. Observa el resultado en la consola del navegador.

## Parte 4: Experimenta

- Cambia el valor de la variable `nombre` por el tuyo y recarga la página.
- Añade una línea que sume dos números y muestre el resultado con `console.log`.
- Añade otra variable con tu apellido y muestra un saludo completo.
- Modifica el saludo para que incluya el apellido en mayúsculas. Busca en la consola cómo convertir una cadena a mayúsculas. Para ello usa un literal de cadena (con tu nombre) seguido del operador punto (`.`) 
- Modifica el archivo para que el saludo se muestre en la página web en lugar de la consola. Usa `document.body.innerHTML` para esto:
   ```js
   document.body.innerHTML = "<h1>¡Hola, " + nombre + "!</h1>";
   ```
- Publica tu proyecto en el repositorio de GitHub y usa GitHub Pages para alojarlo. Sigue [esta guía](https://docs.github.com/es/pages/getting-started-with-github-pages/creating-a-github-pages-site) para hacerlo.


## parte 5: formulario HTML + JavaScript
1. Crea un archivo llamado `formulario.html` en la misma carpeta `00JSyEntorno`.
2. Crea un archivo llamado `formulario.js` en la misma carpeta `00JSyEntorno`.
3. Escribe el siguiente código en `formulario.html`:
4. ```html
   <!DOCTYPE html>
   <html lang="es">
   <head>
     <meta charset="UTF-8">
     <title>Formulario de Saludo</title>
   </head>
   <body>
     <h1>Formulario de Saludo</h1>
     <form id="formulario">
       <label for="nombreInput">Nombre:</label>
       <input type="text" id="nombreInput" required>
       <button type="submit">Saludar</button>
     </form>
     <p id="salida"></p>
     
     <script src="formulario.js"></script>
   </body>
   </html>
   ```
5. Escribe el siguiente código en `formulario.js`:
   ```js
   document.addEventListener('DOMContentLoaded', function() {
     document.getElementById('formulario').addEventListener('submit', function(event) {
       event.preventDefault();
       const nombre = document.getElementById('nombreInput').value;
       document.getElementById('salida').textContent = '¡Hola, ' + nombre + '!';
     });
   });
   ```
6. Desde VSCode abre `formulario.html` en tu navegador y prueba el formulario.

   
## Parte 6: Preguntas de reflexión

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


