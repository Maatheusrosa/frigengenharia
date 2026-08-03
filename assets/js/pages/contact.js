// ====================================
// CONTACT PAGE - FORM HANDLING
// ====================================

/**
 * Initialize Contact Form
 */
function handleContactForm() {
    const form = document.getElementById('contact-form');
    
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Simulate form submission
        const messageDiv = document.getElementById('form-message');
        messageDiv.textContent = '✓ Mensagem enviada com sucesso! Entraremos em contato em breve.';
        messageDiv.classList.remove('error');
        messageDiv.classList.add('success');
        messageDiv.style.display = 'block';
        
        // Reset form
        this.reset();
        
        // Hide message after 5 seconds
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 5000);
    });
}

/**
 * Initialize Contact Page
 */
function initializeContactPage() {
    console.log('🔧 Initializing contact page...');
    handleContactForm();
    console.log('✓ Contact page initialized!');
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', initializeContactPage);
