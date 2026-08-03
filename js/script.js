// ====================================
// JAVASCRIPT - EnginPro Landing Page
// ====================================

/**
 * Initialize AOS (Animate On Scroll)
 */
function initializeAOS() {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 50
    });
}

/**
 * Navbar Scroll Effect
 */
function handleNavbarScroll() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

/**
 * Mobile Menu Toggle
 */
function handleMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (!menuToggle) return;
    
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        mobileMenu.classList.toggle('hidden');
    });
    
    // Close menu when clicking on a link
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            mobileMenu.classList.add('hidden');
        });
    });
}

/**
 * Smooth Scroll for Navigation Links
 */
function handleSmoothScroll() {
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
}



/**
 * Contact Form Handler
 */
function handleContactForm() {
    const form = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    
    if (!form) return;
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Simple validation
        if (!data.name || !data.email || !data.message) {
            showFormMessage('Por favor, preencha todos os campos obrigatórios.', 'error');
            return;
        }
        
        // Email validation
        if (!validateEmail(data.email)) {
            showFormMessage('Por favor, insira um e-mail válido.', 'error');
            return;
        }
        
        // Simulate form submission
        try {
            form.classList.add('loading');
            
            // Simulate API call (replace with actual API endpoint)
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Success message
            showFormMessage('✓ Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
            form.reset();
            
            // Log form data (for demonstration)
            console.log('Form submitted with data:', data);
            
        } catch (error) {
            showFormMessage('Erro ao enviar mensagem. Tente novamente.', 'error');
            console.error('Form error:', error);
        } finally {
            form.classList.remove('loading');
        }
    });
}

/**
 * Show Form Message
 */
function showFormMessage(message, type) {
    const formMessage = document.getElementById('form-message');
    
    formMessage.textContent = message;
    formMessage.className = `${type} !block`;
    
    // Auto hide success message after 5 seconds
    if (type === 'success') {
        setTimeout(() => {
            formMessage.classList.add('hidden');
        }, 5000);
    }
}

/**
 * Email Validation
 */
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

/**
 * Active Navigation Link Highlight
 */
function handleActiveNavLink() {
    const navLinks = document.querySelectorAll('#navbar a[href^="#"]');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        // Get all sections
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('text-black', 'font-bold');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('text-black', 'font-bold');
            }
        });
    });
}

/**
 * Lazy Load Images
 */
function handleLazyLoadImages() {
    const images = document.querySelectorAll('img');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

/**
 * Add Scroll Animation Classes
 */
function handleScrollAnimations() {
    const elements = document.querySelectorAll('[data-scroll]');
    
    if (!('IntersectionObserver' in window)) {
        return;
    }
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(element => observer.observe(element));
}

/**
 * Initialize All Interactions
 */
function initializeApp() {
    console.log('🔧 Initializing EnginPro Landing Page...');
    
    // Initialize all features
    initializeAOS();
    handleNavbarScroll();
    handleMobileMenu();
    handleSmoothScroll();
    handleContactForm();
    handleActiveNavLink();
    handleLazyLoadImages();
    handleScrollAnimations();
    
    console.log('✓ All features initialized successfully!');
}

/**
 * DOM Ready - Start App
 */
document.addEventListener('DOMContentLoaded', initializeApp);

/**
 * Performance Monitoring
 */
if ('PerformanceObserver' in window) {
    try {
        const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
                console.log(`${entry.name}: ${entry.duration.toFixed(2)}ms`);
            }
        });
        observer.observe({ entryTypes: ['measure', 'navigation'] });
    } catch (e) {
        console.warn('Performance monitoring not available');
    }
}

/**
 * Scroll to top button removed
 */

/**
 * Keyboard Navigation Support
 */
function handleKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // Skip to main content with Tab key
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
    });
}

handleKeyboardNavigation();

/**
 * Export functions for testing/debugging
 */
window.EnginPro = {
    initializeAOS,
    handleNavbarScroll,
    handleContactForm,
    validateEmail,
    showFormMessage
};

console.log('📍 EnginPro JavaScript loaded. Access methods via window.EnginPro');
