document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.main-nav');
    
    // Check if both elements exist before adding listeners
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            // Toggles the 'active' class on the navigation list
            // The CSS above handles hiding/showing based on this class
            navLinks.classList.toggle('active');
        });

        // Optional: Close menu when a link is clicked (useful for single-page sites)
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove('active');
                }
            });
        });
    }
});