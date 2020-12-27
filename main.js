const navBar = document.querySelector('.main-nav');
const mobileNavIcon = document.querySelector('.mobile-nav-icon');

mobileNavIcon.addEventListener('click', () => {
    navBar.classList.toggle('d-block');
});