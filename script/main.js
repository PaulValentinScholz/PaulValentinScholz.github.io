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


//Contact form

const form = document.getElementById("contact-form");
const resultDiv = document.getElementById("contact-form-display");

form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Get form input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const msg = document.getElementById("message").value;

    // Create a new element to display the form inputs
    // Set the innerHTML of the result div to the new content
    resultDiv.innerHTML = `
        <h4><u>Ihre Nachricht wurde erfolgreich versendet. Wir antworten innerhalb von 1-2 Werktagen.</u></h4>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${msg}</p>
    `;

    resultDiv.style.display = "block";

    // Clear the form inputs
    form.reset();
});