const lightModeBtn = document.getElementById('light-mode-btn');
const darkModeBtn = document.getElementById('dark-mode-btn');
const dropdownToggleIcon = document.querySelector('.btn.dropdown-toggle i');
const body = document.body;

// Check if there's a stored theme preference in local storage
const storedTheme = localStorage.getItem('theme');

// Set the initial theme based on the stored preference or default to 'light'
if (storedTheme === 'dark') {
    body.setAttribute('data-bs-theme', 'dark');
    dropdownToggleIcon.className = 'bi bi-sun-fill';
    darkModeBtn.classList.add('active');
} else {
    body.setAttribute('data-bs-theme', 'light');
    dropdownToggleIcon.className = 'bi bi-moon-stars-fill';
    lightModeBtn.classList.add('active');
}

lightModeBtn.addEventListener('click', () => {
    body.setAttribute('data-bs-theme', 'light');
    dropdownToggleIcon.className = 'bi bi-moon-stars-fill';
    lightModeBtn.classList.add('active');
    darkModeBtn.classList.remove('active');
    // Store the theme preference in local storage
    localStorage.setItem('theme', 'light');
});

darkModeBtn.addEventListener('click', () => {
    body.setAttribute('data-bs-theme', 'dark');
    dropdownToggleIcon.className = 'bi bi-sun-fill';
    darkModeBtn.classList.add('active');
    lightModeBtn.classList.remove('active');
    // Store the theme preference in local storage
    localStorage.setItem('theme', 'dark');
});


//Marquee

const logos = document.querySelectorAll('.marquee-item');

function createLogoClone() {
    const firstLogo = logos[0].cloneNode(true);
    document.querySelector('.partner-banner').appendChild(firstLogo);
}

function removeFirstLogo() {
    const banner = document.querySelector('.partner-banner');
    const firstLogo = logos[0];
    banner.removeChild(firstLogo);
}

function handleAnimationIteration() {
    createLogoClone();
    removeFirstLogo();
}

logos[logos.length - 1].addEventListener('animationiteration', handleAnimationIteration);

