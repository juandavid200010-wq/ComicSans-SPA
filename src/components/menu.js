const botonMenu = document.querySelector('.menu-btn');
const menu = document.querySelector('nav');
const botonCerrar = document.querySelector('.close-btn');

botonMenu.addEventListener('click', function() {
    menu.classList.toggle('activo');
});

botonCerrar.addEventListener('click', function() {
    menu.classList.remove('activo');
});