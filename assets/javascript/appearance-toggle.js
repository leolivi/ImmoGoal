document.addEventListener('DOMContentLoaded', () => {
    const switchElement = document.getElementById('appearance-switch');

    const enableDarkMode = () => {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    };

    const enableLightMode = () => {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    };

    switchElement.addEventListener('click', () => {
        if (document.body.classList.contains('dark-mode')) {
            enableLightMode();
        } else {
            enableDarkMode();
        }
    });

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        enableDarkMode();
    } else {
        enableLightMode();
    }
});
