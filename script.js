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

// Add active class to navigation items on scroll (rAF-throttled)
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

let scrollNavTicking = false;
function updateNavFromScroll() {
    const y = window.scrollY;
    let current = '';
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (y >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
    scrollNavTicking = false;
}

window.addEventListener(
    'scroll',
    () => {
        if (scrollNavTicking) return;
        scrollNavTicking = true;
        requestAnimationFrame(updateNavFromScroll);
    },
    { passive: true }
);

requestAnimationFrame(updateNavFromScroll);

// Pause heavy decorative animations for sections outside the viewport
const sectionMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
let sectionAnimationObserver = null;

function setupSectionAnimationPause() {
    if (sectionAnimationObserver) {
        sectionAnimationObserver.disconnect();
        sectionAnimationObserver = null;
    }
    if (sectionMotionQuery.matches) return;
    const mainSections = document.querySelectorAll('main section[id]');
    if (!mainSections.length) return;
    sectionAnimationObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                entry.target.classList.toggle('section-offscreen', !entry.isIntersecting);
            });
        },
        { root: null, rootMargin: '80px 0px 80px 0px', threshold: 0 }
    );
    mainSections.forEach((section) => sectionAnimationObserver.observe(section));
}

setupSectionAnimationPause();
sectionMotionQuery.addEventListener('change', () => {
    document.querySelectorAll('main section[id].section-offscreen').forEach((el) => el.classList.remove('section-offscreen'));
    setupSectionAnimationPause();
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
                    img.style.borderRadius = '4px';
                    
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
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const stagger = (!prefersReducedMotion && (el.classList.contains('skill-category') || el.classList.contains('experience-card') || el.classList.contains('contact-channel-card') || el.classList.contains('mobile-app-card') || el.classList.contains('hobby-project-card')))
            ? (Array.from(el.parentElement.children).indexOf(el) * 0.06)
            : 0;
        el.style.transitionDelay = `${stagger}s`;
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
    });
}, observerOptions);

const scrollRevealSelector = 'section:not(#home) .section-eyebrow, section:not(#home) .section-title, section:not(#home) .about-content, .saas-lead, .saas-card, .skill-category, .experience-card, .contact-panel, .contact-channel-card, .mobile-app-card, .hobby-system-intro, .hobby-project-card, .javbis-showcase, .javbis-feature-card, .documents-list';
document.querySelectorAll(scrollRevealSelector).forEach((el) => {
    if (prefersReducedMotion) {
        el.style.opacity = '1';
        el.style.transform = 'none';
        return;
    }
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.55s cubic-bezier(0.4, 0, 0.2, 1), transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(el);
});

// Hero mockup: looping typewriter-style terminal (pauses off-screen / hidden tab)
(function initHeroCodeTerminal() {
    const codeEl = document.getElementById('hero-code-terminal');
    const pre = document.querySelector('.hero-mockup-code--terminal');
    if (!codeEl || !pre) return;

    const CLS = { k: 'hero-code-k', s: 'hero-code-s', t: 'hero-code-t', str: 'hero-code-str', n: 'hero-code-num' };

    const SNIPPETS = [
        [
            { cls: 't', text: '// studio.dioame\n' },
            { cls: 'k', text: 'const' },
            { cls: 't', text: ' ' },
            { cls: 's', text: 'visitor' },
            { cls: 't', text: ' = ' },
            { cls: 'str', text: '"you"' },
            { cls: 't', text: ';\n' },
            { cls: 'k', text: 'console' },
            { cls: 't', text: '.' },
            { cls: 's', text: 'log' },
            { cls: 't', text: '(' },
            { cls: 'str', text: '`Hey ${visitor} — welcome here.`' },
            { cls: 't', text: ');' },
        ],
        [
            { cls: 't', text: '/*\n * ' },
            { cls: 's', text: 'Dioame Jade' },
            {
                cls: 't',
                text: '\n * Full-stack & prompt engineer.\n * APIs, integrations, AI-assisted delivery.\n */',
            },
        ],
        [
            { cls: 'k', text: 'export default' },
            { cls: 't', text: ' {\n  ' },
            { cls: 'k', text: 'from' },
            { cls: 't', text: ': ' },
            { cls: 'str', text: '"Dioame"' },
            { cls: 't', text: ',\n  ' },
            { cls: 'k', text: 'mode' },
            { cls: 't', text: ': ' },
            { cls: 'str', text: '"fractional · project · remote"' },
            { cls: 't', text: ',\n}' },
        ],
        [
            { cls: 't', text: '$ ' },
            { cls: 's', text: 'whoami\n' },
            { cls: 't', text: '→ dioame — backends, prompts, CI/CD.\n' },
            { cls: 't', text: '$ ' },
            { cls: 's', text: 'cat intro.txt\n' },
            { cls: 'str', text: 'Open to collaboration — tell me what you are building.' },
        ],
        [
            { cls: 't', text: '{\n  ' },
            { cls: 'k', text: '"hello"' },
            { cls: 't', text: ': ' },
            { cls: 'str', text: '"thanks for visiting"' },
            { cls: 't', text: ',\n  ' },
            { cls: 'k', text: '"iam"' },
            { cls: 't', text: ': ' },
            { cls: 'str', text: '"Dioame Jade"' },
            { cls: 't', text: ',\n  ' },
            { cls: 'k', text: '"next"' },
            { cls: 't', text: ': ' },
            { cls: 'str', text: '"scroll down or get in touch."' },
            { cls: 't', text: '\n}' },
        ],
    ];

    const STATIC_HTML = SNIPPETS[0]
        .map((part) => `<span class="${CLS[part.cls]}">${part.text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</span>`)
        .join('');

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
        codeEl.innerHTML = STATIC_HTML;
        return;
    }

    let heroVisible = true;
    let tabVisible = !document.hidden;
    const heroSection = document.getElementById('home');

    function isPaused() {
        return !heroVisible || !tabVisible;
    }

    function syncPauseClass() {
        pre.classList.toggle('hero-mockup-code--paused', isPaused());
    }

    if (heroSection) {
        const io = new IntersectionObserver(
            ([entry]) => {
                heroVisible = entry.isIntersecting;
                syncPauseClass();
            },
            { root: null, rootMargin: '40px 0px 40px 0px', threshold: 0.08 }
        );
        io.observe(heroSection);
    }

    document.addEventListener('visibilitychange', () => {
        tabVisible = !document.hidden;
        syncPauseClass();
    });

    async function delay(ms) {
        const end = Date.now() + ms;
        while (Date.now() < end) {
            while (isPaused()) {
                syncPauseClass();
                await new Promise((r) => setTimeout(r, 100));
            }
            syncPauseClass();
            await new Promise((r) => setTimeout(r, Math.min(30, end - Date.now())));
        }
    }

    async function typeSnippet(parts) {
        codeEl.innerHTML = '';
        for (const part of parts) {
            const span = document.createElement('span');
            span.className = CLS[part.cls];
            codeEl.appendChild(span);
            for (let i = 0; i < part.text.length; i++) {
                while (isPaused()) await delay(80);
                span.textContent += part.text[i];
                const jitter = 14 + Math.random() * 22;
                await delay(part.text[i] === '\n' ? jitter + 40 : jitter);
            }
        }
    }

    async function loop() {
        while (true) {
            for (let s = 0; s < SNIPPETS.length; s++) {
                await typeSnippet(SNIPPETS[s]);
                await delay(1800 + Math.random() * 600);
                for (let step = 0; step < 12; step++) {
                    syncPauseClass();
                    while (isPaused()) await delay(100);
                    codeEl.style.opacity = String(1 - step * 0.08);
                    await delay(45);
                }
                codeEl.style.opacity = '1';
                codeEl.innerHTML = '';
                await delay(350);
            }
        }
    }

    syncPauseClass();
    loop();
})();

// Hero quote: churning 0/1 stream, then decode to readable text
(function initHeroPromptBinaryReveal() {
    const root = document.getElementById('hero-prompt-highlight');
    if (!root) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const FINAL = root.textContent.trim();
    if (!FINAL) return;

    let started = false;

    function setupDom() {
        const display = document.createElement('span');
        display.className = 'hero-prompt-highlight-display';
        display.setAttribute('aria-hidden', 'true');
        const sr = document.createElement('span');
        sr.className = 'sr-only';
        sr.textContent = FINAL;
        root.textContent = '';
        root.appendChild(display);
        root.appendChild(sr);
        return display;
    }

    function paint(display, resolved) {
        let out = '';
        for (let i = 0; i < FINAL.length; i++) {
            const ch = FINAL[i];
            if (ch === ' ') out += ' ';
            else if (resolved[i]) out += ch;
            else out += Math.random() < 0.5 ? '0' : '1';
        }
        display.textContent = out;
    }

    async function runCycle(display) {
        const resolved = new Array(FINAL.length).fill(false);
        root.classList.remove('hero-prompt-highlight--settled');
        root.classList.add('hero-prompt-highlight--binary');

        const BINARY_MS = 1700;
        const BINARY_TICK = 46;
        await new Promise((resolveBin) => {
            const t0 = Date.now();
            const iv = setInterval(() => {
                paint(display, resolved);
                if (Date.now() - t0 >= BINARY_MS) {
                    clearInterval(iv);
                    resolveBin();
                }
            }, BINARY_TICK);
        });

        for (let i = 0; i < FINAL.length; i++) {
            if (FINAL[i] === ' ') {
                resolved[i] = true;
                paint(display, resolved);
                continue;
            }
            const flickers = 4 + Math.floor(Math.random() * 4);
            for (let f = 0; f < flickers; f++) {
                paint(display, resolved);
                await new Promise((r) => setTimeout(r, 30));
            }
            resolved[i] = true;
            paint(display, resolved);
            await new Promise((r) => setTimeout(r, 18 + Math.random() * 16));
        }

        root.classList.remove('hero-prompt-highlight--binary');
        root.classList.add('hero-prompt-highlight--settled');
    }

    async function start() {
        if (started) return;
        started = true;
        const display = setupDom();
        await runCycle(display);
    }

    const hero = document.getElementById('home');
    if (!hero) {
        start();
        return;
    }
    const io = new IntersectionObserver(
        (entries) => {
            if (entries.some((e) => e.isIntersecting)) {
                io.disconnect();
                start();
            }
        },
        { threshold: 0.06, rootMargin: '32px 0px' }
    );
    io.observe(hero);
})();

