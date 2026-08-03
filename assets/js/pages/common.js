// ====================================
// COMMON PAGE FUNCTIONS
// ====================================

/**
 * Initialize AOS (Animate On Scroll)
 */
function initializeAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
    }
}

/**
 * Navbar Scroll Effect
 */
function handleNavbarScroll() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
        }
    });
}

/**
 * Mobile Menu Toggle
 */
function handleMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (!menuToggle || !mobileMenu) return;
    
    menuToggle.addEventListener('click', function() {
        if (mobileMenu.style.display === 'none' || mobileMenu.style.display === '') {
            mobileMenu.style.display = 'flex';
        } else {
            mobileMenu.style.display = 'none';
        }
    });

    // Close menu when a link is clicked
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.style.display = 'none';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('nav') && mobileMenu.style.display === 'flex') {
            mobileMenu.style.display = 'none';
        }
    });
}

/**
 * Initialize Common Page Features
 */
function initializeCommonFeatures() {
    console.log('🔧 Initializing common page features...');
    
    initializeAOS();
    handleNavbarScroll();
    handleMobileMenu();
    
    console.log('✓ Common features initialized!');
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', initializeCommonFeatures);
