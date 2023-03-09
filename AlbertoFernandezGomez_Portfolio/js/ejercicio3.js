// Obtener el input del asunto
const subjectInput = document.querySelector('label[for=subject]');

// Agregar un escucha de evento para cuando el input pierde el focus
subjectInput.addEventListener('blur', () => {
  // Verificar si el input está vacío
  if (subjectInput.value.trim() === '') {
    // Cambiar el borde del input a rojo
    subjectInput.style.border = '2px solid red';

    // Agregar un mensaje de error debajo del campo
    const errorText = document.createElement('span');
    errorText.innerText = 'Este campo no puede estar vacío';
    errorText.style.color = 'red';
    subjectInput.parentNode.appendChild(errorText);
  } else {
    // Si el input es válido, cambiar el borde a verde
    subjectInput.style.border = '2px solid green';
  }
});