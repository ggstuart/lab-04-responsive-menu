const menuToggle = document.getElementById('menu-toggle');
const menuNav = document.getElementById('menu-nav');

const toggleMenu = () => { menuNav.classList.toggle('open')}

menuToggle.addEventListener('click', toggleMenu);


function toggleHighlight() {
  title.classList.toggle('highlight');
}

title.addEventListener('click', toggleHighlight);
