// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 15, 15, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.background = 'rgba(15, 15, 15, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all feature cards and testimonials
document.querySelectorAll('.feature-card, .testimonial-card, .step').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Confetti animation trigger
function createConfetti() {
    const confetti = document.createElement('div');
    confetti.innerHTML = '🎉';
    confetti.style.position = 'fixed';
    confetti.style.fontSize = '2rem';
    confetti.style.pointerEvents = 'none';
    confetti.style.zIndex = '1000';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = '-50px';
    confetti.style.animation = 'confetti 3s ease-out forwards';
    
    document.body.appendChild(confetti);
    
    setTimeout(() => {
        confetti.remove();
    }, 3000);
}

// Trigger confetti on hero section scroll
let confettiTriggered = false;
window.addEventListener('scroll', () => {
    if (!confettiTriggered && window.scrollY > 200) {
        confettiTriggered = true;
        for (let i = 0; i < 10; i++) {
            setTimeout(() => createConfetti(), i * 100);
        }
    }
});

// Mobile menu toggle (for future enhancement)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Add mobile menu button click handler
document.addEventListener('DOMContentLoaded', function() {
    // Create mobile menu button
    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.innerHTML = '☰';
    mobileMenuButton.classList.add('mobile-menu-button');
    mobileMenuButton.style.display = 'none';
    mobileMenuButton.style.background = 'none';
    mobileMenuButton.style.border = 'none';
    mobileMenuButton.style.fontSize = '1.5rem';
    mobileMenuButton.style.cursor = 'pointer';
    mobileMenuButton.onclick = toggleMobileMenu;
    
    // Add mobile menu styles
    const mobileMenuStyles = document.createElement('style');
    mobileMenuStyles.textContent = `
        @media (max-width: 768px) {
            .mobile-menu-button {
                display: block !important;
            }
            
            .nav-links {
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: #0f0f0f;
                flex-direction: column;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                transform: translateY(-100%);
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
            }
            
            .nav-links.active {
                transform: translateY(0);
                opacity: 1;
                visibility: visible;
            }
            
            .nav-links a {
                padding: 1rem;
                border-bottom: 1px solid rgba(0, 0, 0, 0.05);
            }
        }
    `;
    
    document.head.appendChild(mobileMenuStyles);
    document.querySelector('.nav-brand').parentNode.appendChild(mobileMenuButton);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-image');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Form submission handler (for contact forms)
function handleFormSubmission(event) {
    event.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your interest! We\'ll be in touch soon.');
}

// Add click tracking for download buttons
document.querySelectorAll('.primary-button, .app-store-badge').forEach(button => {
    button.addEventListener('click', function() {
        // Add analytics tracking here
        console.log('Download button clicked');
        // Example: gtag('event', 'click', { event_category: 'download' });
    });
});

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}