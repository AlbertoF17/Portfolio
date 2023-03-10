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