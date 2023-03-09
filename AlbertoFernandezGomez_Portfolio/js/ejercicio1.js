let btnReset = document.getElementById('reset-button');
let btnDark = document.getElementById('dark-button');
let btnLight = document.getElementById('light-button');

document.onload(function(){
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
    document.documentElement.style.setProperty('--black-inverted', '#000000');
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
    document.documentElement.style.setProperty('--border-color', 'var(--scheme-color1)');
    document.documentElement.style.setProperty('--button-color', 'var(--scheme-color1)');
    document.documentElement.style.setProperty('--black-inverted', '#FFFFFF');
});