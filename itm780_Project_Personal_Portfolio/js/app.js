$(document).foundation()

function toggleTextSize() { //font size toggle function for accessibility purposes
    const body = document.body;
    const currentFontSize = window.getComputedStyle(body).fontSize;

    // Convert font size from pixels to em (browser default is 16px = 1em)
    const currentEm = parseFloat(currentFontSize) / 16;

    // Toggle between 1.0em and 1.5em
    const newFontSize = currentEm === 1.0 ? '1.5em' : '1.0em';
    body.style.fontSize = newFontSize;
}