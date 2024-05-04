document.addEventListener("DOMContentLoaded", function() {
    // Capture all navigation links
    const navLinks = document.querySelectorAll('nav a');

    // Add event listener for each link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor click behavior

            const targetId = this.getAttribute('href'); // Get the href attribute of the clicked link
            const targetSection = document.querySelector(targetId); // Find the corresponding section in the document

            if (targetSection) {
                // Scroll to the target section smoothly
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth' // Enable smooth scrolling
                });
            }
        });
    });
});
