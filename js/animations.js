/* ==========================================
   Scroll Animations & Interactive Micro-Effects
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Reveal Elements on Scroll
    const animatedElements = document.querySelectorAll('.new-service-card, .gallery-card, .contact-info-card, .contact-form-card');

    // Add initial hidden style class
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(24px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    const observerOptions = {
        root: null,
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); // Trigger only once
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => scrollObserver.observe(el));

    // 2. Subtle Hover Tilt Effect for Service Cards
    const cards = document.querySelectorAll('.new-service-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-6px) scale(1.01)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
});