document.addEventListener('DOMContentLoaded', function() {
    // Typing animation for hero section
    const typingText = document.getElementById('typing-text');
    const texts = [
        "Futuro Neon Digital",
        "Inovação Tecnológica",
        "Transformação Digital",
        "Inteligência Artificial"
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typingSpeed = 1500; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 500; // Pause before typing next
        }
        
        setTimeout(type, typingSpeed);
    }
    
    setTimeout(type, 1000);
    
    // Chatbot functionality
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotWindow = document.getElementById('chatbot-window');
    const chatbotClose = document.getElementById('chatbot-close');
    
    chatbotToggle.addEventListener('click', function() {
        chatbotWindow.classList.toggle('show');
        chatbotToggle.classList.toggle('animate-pulse');
    });
    
    chatbotClose.addEventListener('click', function() {
        chatbotWindow.classList.remove('show');
    });
    
    // Form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const formData = new FormData(contactForm);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            
            // Simulate AJAX submission
            console.log('Form submitted:', data);
            
            // Show success message
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            contactForm.reset();
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Tech card hover effects
    document.querySelectorAll('.tech-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            const tech = this.getAttribute('data-tech');
            let pulseColor = 'var(--neon-cyan)';
            
            switch(tech) {
                case 'ai':
                    pulseColor = 'var(--neon-pink)';
                    break;
                case 'cyber':
                    pulseColor = 'var(--neon-green)';
                    break;
                case 'cloud':
                    pulseColor = 'var(--neon-cyan)';
                    break;
                case 'automation':
                    pulseColor = '#FF6EC7';
                    break;
            }
            
            this.style.setProperty('--pulse-color', pulseColor);
        });
    });
    
    // Initialize feather icons
    feather.replace();
});