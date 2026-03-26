const navbar = document.querySelector('.navbar');
const navMenu = document.querySelector('.nav-menu');
const navToggle = document.querySelector('.nav-toggle');

function closeMobileNav() {
    if (!navbar || !navMenu || !navToggle) return;
    navbar.classList.remove('nav-open');
    navMenu.classList.remove('nav-menu-open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Open navigation menu');
}

function openMobileNav() {
    if (!navbar || !navMenu || !navToggle) return;
    navbar.classList.add('nav-open');
    navMenu.classList.add('nav-menu-open');
    navToggle.setAttribute('aria-expanded', 'true');
    navToggle.setAttribute('aria-label', 'Close navigation menu');
}

if (navToggle) {
    navToggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.contains('nav-menu-open');
        if (isOpen) {
            closeMobileNav();
            return;
        }

        openMobileNav();
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            closeMobileNav();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active class to navigation items on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 480) {
        closeMobileNav();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeMobileNav();
    }
});

// Avatar image upload functionality (optional enhancement)
const avatarPlaceholder = document.querySelector('.avatar-placeholder');
if (avatarPlaceholder) {
    avatarPlaceholder.addEventListener('click', function() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const img = document.createElement('img');
                    img.src = e.target.result;
                    img.style.width = '100%';
                    img.style.height = '100%';
                    img.style.objectFit = 'cover';
                    img.style.borderRadius = '50%';
                    
                    // Clear existing content
                    avatarPlaceholder.innerHTML = '';
                    avatarPlaceholder.appendChild(img);
                    
                    // Hide hint
                    const hint = document.querySelector('.avatar-hint');
                    if (hint) hint.style.display = 'none';
                };
                reader.readAsDataURL(file);
            }
        };
        input.click();
    });
    
    // Add cursor pointer to indicate it's clickable
    avatarPlaceholder.style.cursor = 'pointer';
    avatarPlaceholder.title = 'Click to upload your photo';
}

// Add fade-in animation on scroll with staggered delay for grids
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const observerOptions = {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const stagger = el.classList.contains('skill-category') || el.classList.contains('experience-card') || el.classList.contains('contact-item')
            ? (Array.from(el.parentElement.children).indexOf(el) * 0.06)
            : 0;
        const delay = prefersReducedMotion ? 0 : stagger;
        el.style.transitionDelay = `${delay}s`;
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
    });
}, observerOptions);

// Observe sections and cards (hero excluded; entrance handled by CSS)
document.querySelectorAll('section:not(#home) .section-title, section:not(#home) .about-content, .skill-category, .experience-card, .contact-item, .mobile-apps-title, .hobby-system-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.55s cubic-bezier(0.4, 0, 0.2, 1), transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(el);
});

