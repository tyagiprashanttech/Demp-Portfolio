// Initialize AOS (Animate On Scroll) library for animations
AOS.init({
    duration: 1000, // Animation duration
    easing: 'ease-in-out', // Animation easing function
    once: true // Run animations only once when they appear in the viewport
});

// Handling form submission (just for demonstration purposes)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message!');
});
