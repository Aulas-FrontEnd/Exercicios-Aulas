const toggle = document.getElementById('menu-toggle');
const menu = document.querySelector('.nav-links');
const iconMenu = document.querySelector('.icon-menu');
const iconClose = document.querySelector('.icon-close');

toggle.addEventListener('click', function() {
    menu.classList.toggle('show');
    const isOpen = menu.classList.contains('show');
    iconMenu.style.display = isOpen ? 'none' : 'block';
    iconClose.style.display = isOpen ? 'block' : 'none';
})