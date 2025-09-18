// TravelVisa Pro - JavaScript Functionality
// Maintains EXACT same functionality as React version

document.addEventListener('DOMContentLoaded', function() {
    // Initialize loader first
    initLoader();
    
    // Initialize all functionality after loader
    setTimeout(() => {
        initScrollAnimations();
        initHero3D();
        initNavbar();
        initContactForm();
    }, 100);
});

// Premium Loader Animation
function initLoader() {
    const loader = document.getElementById('loader');
    
    // Simulate loading time (3 seconds)
    setTimeout(() => {
        loader.classList.add('fade-out');
        
        // Remove loader from DOM after fade
        setTimeout(() => {
            if (loader) {
                loader.remove();
            }
        }, 800);
    }, 3000);
}

// Scroll to section functionality
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
}

// Navbar scroll effect
function initNavbar() {
    const navbar = document.getElementById('navbar');
    
    function handleScroll() {
        const isScrolled = window.scrollY > 50;
        
        if (isScrolled) {
            navbar.classList.add('navbar-scrolled');
            navbar.style.background = 'rgba(250, 250, 250, 0.8)';
            navbar.style.backdropFilter = 'blur(12px)';
            navbar.style.borderBottom = '1px solid hsl(20, 13%, 91%)';
            navbar.style.boxShadow = '0 4px 20px -2px hsl(24, 100%, 50% / 0.1)';
        } else {
            navbar.classList.remove('navbar-scrolled');
            navbar.style.background = 'transparent';
            navbar.style.backdropFilter = 'none';
            navbar.style.borderBottom = 'none';
            navbar.style.boxShadow = 'none';
        }
    }

    window.addEventListener('scroll', handleScroll);
}

// Hero 3D parallax effects
function initHero3D() {
    const heroSection = document.querySelector('.hero-section');
    const heroBg = document.getElementById('hero-bg');
    const heroContent = document.getElementById('hero-content');
    
    let mousePosition = { x: 0, y: 0 };
    
    // Mouse movement for 3D tilt effect
    function handleMouseMove(e) {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        
        mousePosition = {
            x: (clientX - innerWidth / 2) / innerWidth,
            y: (clientY - innerHeight / 2) / innerHeight,
        };
        
        updateHero3D();
    }
    
    // Scroll parallax effect
    function handleScroll() {
        const scrollY = window.scrollY;
        const parallaxOffset = scrollY * 0.5;
        
        if (heroBg) {
            const tiltX = mousePosition.y * 5;
            const tiltY = mousePosition.x * -5;
            
            heroBg.style.transform = `translateY(${parallaxOffset}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
        }
        
        updateHero3D();
    }
    
    function updateHero3D() {
        if (heroContent) {
            const tiltX = mousePosition.y * 2.5;
            const tiltY = mousePosition.x * -2.5;
            
            heroContent.style.transform = `translateZ(50px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
        }
    }
    
    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
}

// Scroll reveal animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);
    
    // Observe all scroll-reveal elements
    const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
    scrollRevealElements.forEach(el => {
        observer.observe(el);
    });
}

// Contact form functionality
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const toast = document.getElementById('toast');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data (same as React version)
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());
            
            // Simulate form submission
            showToast('Message Sent Successfully!', 'We\'ll get back to you within 24 hours with personalized guidance.');
            
            // Reset form
            contactForm.reset();
        });
    }
}

// Toast notification system
function showToast(title, description) {
    const toast = document.getElementById('toast');
    
    if (toast) {
        const titleElement = toast.querySelector('span');
        titleElement.textContent = `${title} ${description}`;
        
        // Show toast
        toast.style.transform = 'translateX(0)';
        toast.style.opacity = '1';
        
        // Hide toast after 5 seconds
        setTimeout(() => {
            toast.style.transform = 'translateX(100%)';
            toast.style.opacity = '0';
        }, 5000);
    }
}

// Additional utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimization for scroll events
const debouncedScroll = debounce(() => {
    // Additional scroll optimizations if needed
}, 10);

window.addEventListener('scroll', debouncedScroll);

// Smooth reveal animations for better performance
function initPerformantAnimations() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (prefersReducedMotion.matches) {
        // Disable animations for users who prefer reduced motion
        document.documentElement.style.setProperty('--transition-smooth', 'none');
        document.documentElement.style.setProperty('--transition-bounce', 'none');
    }
}

initPerformantAnimations();