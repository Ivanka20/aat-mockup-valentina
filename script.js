// Menú móvil (compartido por index.html y login.html)
const btnMenu = document.getElementById('btnMenu');
const menu = document.getElementById('menu');

function abrirMenu(abierto) {
  menu.classList.toggle('abierto', abierto);
  btnMenu.setAttribute('aria-expanded', abierto);
}

btnMenu.addEventListener('click', () => abrirMenu(!menu.classList.contains('abierto')));
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => abrirMenu(false)));
document.addEventListener('keydown', e => { if (e.key === 'Escape') abrirMenu(false); });
