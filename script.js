// Dynamic Typing Effect
const dynamicText = document.querySelector('.dynamic-text');
const words = ["a Developer.", "a Designer.", "an Innovator."];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    const currentText = isDeleting
        ? currentWord.substring(0, charIndex--)
        : currentWord.substring(0, charIndex++);

    dynamicText.textContent = currentText;

    if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => (isDeleting = true), 1000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, isDeleting ? 100 : 200);
}

typeEffect();
