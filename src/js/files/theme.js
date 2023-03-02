// Theme toggle + safe on localStorage

let darkMode = false;

// Default to system setting
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    darkMode = true;
}

// Preference from localStorage should overwrite
if (localStorage.getItem('theme') === 'dark') {
    darkMode = true;
}

if (localStorage.getItem('theme') === 'light') {
    darkMode = false;
}

if (darkMode) {
    document.body.classList.toggle('dark');
}

// Create event for click

addEventListener('click', toggleTheme)

function toggleTheme(e) {

    const buttonToggleTheme = document.querySelector('[data-theme-toggle]')

    const targetElement = e.target

    if (targetElement === buttonToggleTheme) {

        // document.body.classList.toggle('dark');

        if (document.body.classList.contains('dark')) {
            document.body.classList.add('light')
            document.body.classList.remove('dark')
        } else {
            document.body.classList.remove('light')
            document.body.classList.add('dark')
        }

        localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
    }
}
