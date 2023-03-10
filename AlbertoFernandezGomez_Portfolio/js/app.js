/* EJERCICIO 1 */

let btnReset = document.getElementById('reset-button');
let btnDark = document.getElementById('dark-button');
let btnLight = document.getElementById('light-button');

document.body.onload = (function(){
    document.documentElement.style.setProperty('--scheme-color1', '#283785');
    document.documentElement.style.setProperty('--scheme-color2', '#1C2269');
    document.documentElement.style.setProperty('--scheme-color3', '#18144F');
    document.documentElement.style.setProperty('--scheme-color4', '#0D1130');
    document.documentElement.style.setProperty('--scheme-color5', '#362073');
    document.documentElement.style.setProperty('--scheme-color6', '#492C9C');
    document.documentElement.style.setProperty('--bg-color', '#0a0d25');
    document.documentElement.style.setProperty('--text-color', '#FFFFFF');
    document.documentElement.style.setProperty('--border-color', 'var(--scheme-color1)');
    document.documentElement.style.setProperty('--button-color', 'var(--scheme-color1)');
})

btnReset.onclick = (function() {
    document.documentElement.style.setProperty('--scheme-color1', '#283785');
    document.documentElement.style.setProperty('--scheme-color2', '#1C2269');
    document.documentElement.style.setProperty('--scheme-color3', '#18144F');
    document.documentElement.style.setProperty('--scheme-color4', '#0D1130');
    document.documentElement.style.setProperty('--scheme-color5', '#362073');
    document.documentElement.style.setProperty('--scheme-color6', '#492C9C');
    document.documentElement.style.setProperty('--bg-color', '#0a0d25');
    document.documentElement.style.setProperty('--text-color', '#FFFFFF');
    document.documentElement.style.setProperty('--border-color', 'var(--scheme-color1)');
    document.documentElement.style.setProperty('--button-color', 'var(--scheme-color1)');
});

btnDark.onclick = (function() {
    document.documentElement.style.setProperty('--scheme-color1', '#3A3935');
    document.documentElement.style.setProperty('--scheme-color2', '#1B1B1B');
    document.documentElement.style.setProperty('--scheme-color3', '#040404');
    document.documentElement.style.setProperty('--scheme-color4', '#302E2D');
    document.documentElement.style.setProperty('--scheme-color5', '#901644');
    document.documentElement.style.setProperty('--scheme-color6', '#74104D');
    document.documentElement.style.setProperty('--bg-color', '#040404');
    document.documentElement.style.setProperty('--text-color', '#FFFFFF');
    document.documentElement.style.setProperty('--black-inverted', '#FFFFFF');
    document.documentElement.style.setProperty('--border-color', 'var(--scheme-color1)');
    document.documentElement.style.setProperty('--button-color', 'var(--scheme-color1)');
});

btnLight.onclick = (function() {
    document.documentElement.style.setProperty('--scheme-color1', '#91ABC9');
    document.documentElement.style.setProperty('--scheme-color2', '#9EB9D1');
    document.documentElement.style.setProperty('--scheme-color3', '#A5BFD3');
    document.documentElement.style.setProperty('--scheme-color4', '#ABC5D5');
    document.documentElement.style.setProperty('--scheme-color5', '#B2CBD7');
    document.documentElement.style.setProperty('--scheme-color6', '#B9D1D9');
    document.documentElement.style.setProperty('--bg-color', '#FBFAF5');
    document.documentElement.style.setProperty('--text-color', '#000000');
    document.documentElement.style.setProperty('--black-inverted', '#000000');
    document.documentElement.style.setProperty('--border-color', 'var(--scheme-color1)');
    document.documentElement.style.setProperty('--button-color', 'var(--scheme-color1)');
});

/* EJERCICIO 2 */

const botones = document.querySelectorAll('.tecnologia');
const cartas = document.querySelectorAll('.carta');

botones.forEach((boton) => {
    boton.onclick = async (evento) => {
        const tecnologiaSeleccionada = boton.getAttribute('data-tecnologia');
        for (const carta of cartas) {
            if (carta.querySelector(`.${tecnologiaSeleccionada}`) || tecnologiaSeleccionada === 'todas') {
                carta.classList.remove('oculta');
            } else {
                carta.classList.add('oculta');
            }
        }
        await sleep(200);
        for (const carta of cartas) {
            if (carta.classList.contains('oculta')) {
                carta.style.display = 'none';
            } else {
                carta.style.display = 'flex';
            }
        }
    };
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//Animación de aparición demasiado brusca

/* EJERCICIO 3 */

// Obtener el input del asunto
const asunto = document.querySelector('#subject');
const correo = document.querySelector('#cc');
const mensaje = document.querySelector('#body');

// Agregar un escucha de evento para cuando el input pierde el focus
asunto.addEventListener('blur', () => {
  // Verificar si el input está vacío
  if (asunto.value.trim() === '') {
    // Cambiar el borde del input a rojo
    asunto.style.border = '2px solid red';

    // Agregar un mensaje de error debajo del campo si no existe uno
    let errorText = asunto.parentNode.querySelector('span');
    if (!errorText) {
      errorText = document.createElement('span');
      errorText.style.color = 'red';
      asunto.parentNode.appendChild(errorText);
    }
    errorText.innerText = 'Este campo no puede estar vacío';
  } else {
    // Si el input es válido, cambiar el borde a verde
    asunto.style.border = '2px solid green';
    const errorText = asunto.parentNode.querySelector('span');
    if (errorText) {
      errorText.remove();
    }
  }
});

correo.addEventListener('blur', () => {
  // Verificar si el input está vacío o no es un correo electrónico válido
  const ccRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
  if (correo.value.trim() === '' || !ccRegex.test(correo.value.trim())) {
    // Cambiar el borde del input a rojo
    correo.style.border = '2px solid red';

    // Agregar un mensaje de error debajo del campo si no existe uno
    let errorText = correo.parentNode.querySelector('span');
    if (!errorText) {
      errorText = document.createElement('span');
      errorText.style.color = 'red';
      correo.parentNode.appendChild(errorText);
    }
    errorText.innerText = 'Debe introducir un correo electrónico válido';
    errorText.classList = "d-flex align-items-center";
  } else {
    // Si el input es válido, cambiar el borde a verde
    correo.style.border = '2px solid green';

    // Eliminar cualquier mensaje de error previo
    const errorText = correo.parentNode.querySelector('span');
    if (errorText) {
      errorText.remove();
    }
  }
});

mensaje.addEventListener('blur', () => {
  // Verificar si el input está vacío
  if (mensaje.value.trim() === '') {
    // Cambiar el borde del input a rojo
    mensaje.style.border = '2px solid red';

    // Agregar un mensaje de error debajo del campo si no existe uno
    let errorText = mensaje.parentNode.querySelector('span');
    if (!errorText) {
      errorText = document.createElement('span');
      errorText.style.color = 'red';
      mensaje.parentNode.appendChild(errorText);
    }
    errorText.innerText = 'Este campo no puede estar vacío';
  } else {
    // Si el input es válido, cambiar el borde a verde
    mensaje.style.border = '';
    const errorText = mensaje.parentNode.querySelector('span');
    if (errorText) {
      errorText.remove();
    }
  }
});