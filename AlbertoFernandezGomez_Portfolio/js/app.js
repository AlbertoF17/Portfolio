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