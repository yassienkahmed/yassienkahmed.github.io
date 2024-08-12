// script.js

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('toggleButton');
    const section = document.getElementById('toggleSection');

    button.addEventListener('click', () => {
        if (section.classList.contains('hidden')) {
            section.classList.remove('hidden');
            button.textContent = 'Hide Section';
        } else {
            section.classList.add('hidden');
            button.textContent = 'Show Section';
        }
    });
});