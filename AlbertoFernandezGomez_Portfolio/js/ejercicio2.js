const botones = document.querySelectorAll('.tecnologia');
botones.forEach((boton) => {
  boton.onclick = (evento) => {
    const tecnologiaSeleccionada = evento.target.getAttribute('data-tecnologia');
    const cartas = document.querySelectorAll('.carta');
    for (const carta of cartas) {
      if (carta.querySelector(`.${tecnologiaSeleccionada}`)) {
        carta.style.visibility = 'visible';
      } else if (`${tecnologiaSeleccionada}` == 'todas') {
        carta.style.visibility = 'visible';
      } else {
        carta.style.visibility = 'hidden';
      }
    }
  };
});
