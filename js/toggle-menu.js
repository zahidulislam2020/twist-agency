var toggleBtn = document.getElementsByClassName("fa-bars")[0];
var navbar = document.getElementsByClassName("nav-links")[0];

toggleBtn.addEventListener('click', () => {
    navbar.classList.toggle('toggle-menu')
})