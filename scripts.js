// Theme Toggle functionality
const themeToggle = document.querySelector('.theme-toggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    // Change the emoji based on the theme
    if (document.body.classList.contains('light-mode')) {
        themeToggle.textContent = '☀️';
    } else {
        themeToggle.textContent = '🌙';
    }
});

// Lazy Loading
window.addEventListener('scroll', function() {
    const lazyElements = document.querySelectorAll('.lazy-load');
    lazyElements.forEach(element => {
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add('visible');
            // Load the actual image
            const lazyImage = element.querySelector('.lazy-image');
            if (lazyImage && lazyImage.dataset.src) {
                lazyImage.src = lazyImage.dataset.src;
            }
        }
    });
});