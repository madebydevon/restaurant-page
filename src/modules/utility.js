export function clearPage() {
    const contentSection = document.querySelector('div#content');
    contentSection.className = "";
    const footerText = document.querySelector('.copyright');

    footerText.textContent = '© 2024 Bites.';
    contentSection.textContent = '';
}