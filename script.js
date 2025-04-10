import 'smoothscroll';

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        targetElement.scrollIntoView({ 
            behavior: 'smooth' 
        });
    });
});

// Newsletter form submission
const newsletterForm = document.getElementById('newsletter-form');
newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const emailInput = this.querySelector('input[type="email"]');
    
    // Simple validation
    if (emailInput.value.trim() === '' || !emailInput.validity.valid) {
        alert('Please enter a valid email address.');
        return;
    }

    // In a real-world scenario, you'd send this to a backend service
    alert('Thank you for subscribing to our newsletter!');
    emailInput.value = '';
}