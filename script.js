// Loading Screen Animation
document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    const mainContent = document.querySelector('.main-content');

    // After 2 seconds, fade out loading screen and fade in main content
    setTimeout(() => {
        loadingScreen.classList.add('fade-out');
        mainContent.classList.add('fade-in');
    }, 2000);
});

// Testimonial Slider
const testimonials = [
    {
        text: "The platform made it incredibly easy to build my dream cricket team. The real-time auction system is smooth and efficient.",
        author: "Rahul Sharma",
        role: "Team Owner, Mumbai Kings"
    },
    {
        text: "As a cricket enthusiast, I love how transparent and fair the auction process is. It's revolutionized team building!",
        author: "Priya Patel",
        role: "Team Owner, Delhi Warriors"
    },
    {
        text: "The analytics and player insights provided are invaluable for making informed decisions during auctions.",
        author: "Vikram Singh",
        role: "Team Owner, Chennai Eagles"
    }
];

let currentTestimonial = 0;

function updateTestimonial() {
    const testimonial = testimonials[currentTestimonial];
    document.querySelector('.testimonial-text').textContent = testimonial.text;
    document.querySelector('.author-name').textContent = testimonial.author;
    document.querySelector('.author-role').textContent = testimonial.role;
}

document.querySelector('.prev-btn').addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    updateTestimonial();
});

document.querySelector('.next-btn').addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateTestimonial();
});

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            if (navLinks.classList.contains('show')) {
                navLinks.classList.remove('show');
            }
        }
    });
});

// Role Selection
const roleSelect = document.querySelector('.role-select');
if (roleSelect) {
    roleSelect.addEventListener('change', (e) => {
        const selectedRole = e.target.value;
        // You can add logic here to handle role selection
        console.log('Selected role:', selectedRole);
    });
}

// Add animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.feature-card, .step, .testimonial');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('animate');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Add CSS class for animations
const style = document.createElement('style');
style.textContent = `
    .feature-card, .step, .testimonial {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.5s ease, transform 0.5s ease;
    }
    
    .feature-card.animate, .step.animate, .testimonial.animate {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);