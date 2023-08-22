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

const marqueeItems = document.querySelector('.marquee-items');

marqueeItems.addEventListener('animationiteration', () => {
    // When the animation iteration restarts, move the last item to the beginning
    const items = document.querySelectorAll('.marquee-item');
    const lastItem = items[items.length - 1];
    marqueeItems.removeChild(lastItem);
    marqueeItems.insertBefore(lastItem, items[0]);
});
