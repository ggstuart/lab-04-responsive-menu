const menuToggle = document.getElementById('menu-toggle');
const menuNav = document.getElementById('menu-nav');

const toggleMenu = () => { menuNav.classList.toggle('open')}

menuToggle.addEventListener('click', toggleMenu);


function toggleHighlight(ev) {
  ev.target.classList.toggle('highlight');
}

for(element of document.getElementsByClassName('highlightable')) {
  element.addEventListener('dblclick', toggleHighlight);
}
