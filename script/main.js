const lightModeBtn = document.getElementById('light-mode-btn');
const darkModeBtn = document.getElementById('dark-mode-btn');
const dropdownToggleIcon = document.querySelector('.btn.dropdown-toggle i');
const body = document.body;

lightModeBtn.addEventListener('click', () => {
    body.setAttribute('data-bs-theme', 'light');
    // Change the icon in the dropdown toggler button
    dropdownToggleIcon.className = 'bi bi-moon-stars-fill';
    lightModeBtn.classList.add("active")
    darkModeBtn.classList.remove("active")
});

darkModeBtn.addEventListener('click', () => {
    body.setAttribute('data-bs-theme', 'dark');
    // Change the icon in the dropdown toggler button
    dropdownToggleIcon.className = 'bi bi-sun-fill';
    darkModeBtn.classList.add("active")
    lightModeBtn.classList.remove("active")

});