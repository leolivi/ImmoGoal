// burger-menu.js
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.burger-icon');

    function toggleMenu() {
        window.location.href = 'navigation.html'; // Navigate to navigation page
    }

    hamburger.addEventListener('click', toggleMenu);
});
