document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling animation for navigation links
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });

                // Apply animation effect to target section
                targetSection.style.animation = 'scrollAnimation 0.5s ease';
                setTimeout(() => {
                    targetSection.style.animation = '';
                }, 500); // Adjust the delay to match the duration of the animation
            }
        });
    });
});
