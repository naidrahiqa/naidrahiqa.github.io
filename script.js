// Simple Theme Toggle
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.querySelector('.theme-toggle');
    
    if (body.hasAttribute('data-theme')) {
        body.removeAttribute('data-theme');
        themeToggle.textContent = '🌙';
    } else {
        body.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️';
    }
}

// Navigation and Scroll Functions
function scrollToSection(sectionName) {
    document.getElementById(sectionName).scrollIntoView({
        behavior: 'smooth'
    });
    
    const navItems = document.querySelectorAll('.nav-content li');
    navItems.forEach(item => item.classList.remove('active'));
    event.target.classList.add('active');
}

// Update active navigation based on scroll position
function updateActiveNav() {
    const sections = document.querySelectorAll('.section');
    const navItems = document.querySelectorAll('.nav-content li');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.textContent.toLowerCase() === current) {
            item.classList.add('active');
        }
    });
}

// Enhanced Social Media Hover Effects
function addSocialHoverEffects() {
    const socialItems = document.querySelectorAll('.social-item');
    
    socialItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            if (this.classList.contains('instagram')) {
                this.style.background = 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)';
                this.style.color = 'white';
                this.style.borderColor = '#e4405f';
            } else if (this.classList.contains('twitter')) {
                this.style.background = 'linear-gradient(135deg, #1da1f2, #0d8bd9)';
                this.style.color = 'white';
                this.style.borderColor = '#1da1f2';
            } else if (this.classList.contains('facebook')) {
                this.style.background = 'linear-gradient(135deg, #4267b2, #365899)';
                this.style.color = 'white';
                this.style.borderColor = '#4267b2';
            } else if (this.classList.contains('email')) {
                this.style.background = 'linear-gradient(135deg, #ea4335, #c23321)';
                this.style.color = 'white';
                this.style.borderColor = '#ea4335';
            } else if (this.classList.contains('telegram')) {
                this.style.background = 'linear-gradient(135deg, #0088cc, #006699)';
                this.style.color = 'white';
                this.style.borderColor = '#0088cc';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.background = '';
            this.style.color = '';
            this.style.borderColor = '';
        });
    });
}

// Initialize everything when page loads
window.addEventListener('load', function() {
    addSocialHoverEffects();
    document.body.style.opacity = '1';
});

// Add scroll listener for navigation
window.addEventListener('scroll', updateActiveNav);

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, observerOptions);

// Observe all sections for animations
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        observer.observe(section);
    });
});