/* ==========================================
   Floating Navbar & Navigation Script
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.floating-navbar');
    const navLinks = document.querySelector('.nav-links');

    // Add scrolled shadow effect on window scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 30) {
            header.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.4)';
        } else {
            header.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
        }
    });

    // Mobile Hamburger Toggle Creation (if needed dynamically)
    if (window.innerWidth <= 768 && !document.querySelector('.mobile-toggle')) {
        const toggleBtn = document.createElement('button');
        toggleBtn.classList.add('mobile-toggle');
        toggleBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
        toggleBtn.style.cssText = `
            background: transparent;
            border: none;
            color: #ffffff;
            font-size: 20px;
            cursor: pointer;
            margin-left: 10px;
        `;

        header.insertBefore(toggleBtn, header.querySelector('.btn-call'));

        toggleBtn.addEventListener('click', () => {
            const isFlex = navLinks.style.display === 'flex';
            if (isFlex) {
                navLinks.style.display = 'none';
                toggleBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '70px';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = '#0f172a';
                navLinks.style.padding = '20px';
                navLinks.style.borderRadius = '16px';
                navLinks.style.border = '1px solid #1e293b';
                toggleBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
            }
        });
    }
});