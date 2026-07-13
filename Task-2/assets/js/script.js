/* ==========================================================================
   CareConnect Core Global System Architecture Engine
   Author: Senior Frontend Engineer CHALLA
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initStickyHeader();
    initMobileNavigation();
    initScrollToTop();
    initFAQAccordion();
    initScrollRevealAnimation();
    initStatCountersAnimation();
    
    // Page-specific initializers based on container identification flags
    if (document.getElementById('featuredDoctorsContainer')) {
        renderFeaturedDoctors();
    }
});

/**
 * Sticky Header Navigation Logic
 */
function initStickyHeader() {
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

/**
 * Mobile Hamburguer Menu Toggler Engine
 */
function initMobileNavigation() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (!menuToggle || !navLinks) return;

    menuToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.contains('open');
        navLinks.classList.toggle('open');
        menuToggle.classList.toggle('open');
        menuToggle.setAttribute('aria-expanded', !isOpen);
    });

    // Close mobile menu when anchor links are explicitly triggered
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            menuToggle.classList.remove('open');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

/**
 * Back to Top Button Tracking Matrix
 */
function initScrollToTop() {
    const btn = document.getElementById('scrollToTop');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/**
 * FAQ Accordion Framework
 */
function initFAQAccordion() {
    const headers = document.querySelectorAll('.accordion-header');
    
    headers.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const isOpen = item.classList.contains('open');
            
            // Mutually exclusive behavior close sisters instances
            document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('open'));
            document.querySelectorAll('.accordion-header').forEach(h => h.setAttribute('aria-expanded', 'false'));

            if (!isOpen) {
                item.classList.add('open');
                header.setAttribute('aria-expanded', 'true');
            }
        });
    });
}

/**
 * Intersection Observer Engine for Scroll Reveal Animations
 */
function initScrollRevealAnimation() {
    const revealElements = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
        revealElements.forEach(el => el.style.opacity = '1');
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Animate once
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    revealElements.forEach(el => {
        // Setup initial reveal classes inline safe rules
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });

    // Custom runtime styles handler class injected into head safely
    if (!document.getElementById('reveal-runtime-style')) {
        const style = document.createElement('style');
        style.id = 'reveal-runtime-style';
        style.innerHTML = '.reveal.active { opacity: 1 !important; transform: translateY(0) !important; }';
        document.head.appendChild(style);
    }
}

/**
 * Fluid Counter Incrementation Processor via Intersection Observer
 */
function initStatCountersAnimation() {
    const counters = document.querySelectorAll('.stat-counter');
    if (counters.length === 0) return;

    const runCounter = (counter) => {
        const target = parseFloat(counter.getAttribute('data-target'));
        const isDecimal = target % 1 !== 0;
        const duration = 2000; // 2 seconds total transition loop
        const startTime = performance.now();

        const updateNumber = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // EaseOutQuad formula
            const easeProgress = progress * (2 - progress);
            const currentVal = easeProgress * target;

            if (isDecimal) {
                counter.textContent = currentVal.toFixed(1) + '%';
            } else {
                counter.textContent = Math.floor(currentVal).toLocaleString();
            }

            if (progress < 1) {
                requestAnimationFrame(updateNumber);
            } else {
                counter.textContent = isDecimal ? target + '%' : target.toLocaleString() + (target === 12 ? '' : '+');
            }
        };

        requestAnimationFrame(updateNumber);
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                runCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));
}

/**
 * Populates Featured Doctors Section on Landing Page Matrix (Renders first 4 nodes)
 */
function renderFeaturedDoctors() {
    const container = document.getElementById('featuredDoctorsContainer');
    if (!container || !window.careConnectDoctorsData) return;

    const featuredSelection = window.careConnectDoctorsData.slice(0, 4);
    container.innerHTML = '';

    featuredSelection.forEach(doc => {
        const card = document.createElement('div');
        card.className = 'doctor-card-ui';
        card.innerHTML = `
            <div class="doc-card-image-wrapper">
                <span class="doc-image-placeholder">${doc.photo}</span>
                <div class="doc-card-rating-badge">
                    <span>★</span> ${doc.rating.toFixed(1)}
                </div>
            </div>
            <div class="doc-card-body">
                <span class="doc-card-dept">${doc.department}</span>
                <h3>${doc.name}</h3>
                <p class="doc-meta-string">${doc.specialization}</p>
                <div class="doc-data-row">
                    <span>Experience:</span>
                    <strong>${doc.experience} Years</strong>
                </div>
                <div class="doc-data-row">
                    <span>Consultation:</span>
                    <strong>₹${doc.consultationFee}</strong>
                </div>
            </div>
            <div class="doc-card-footer">
                <a href="doctor-details.html?id=${doc.id}" class="btn btn-outline btn-full">Inspect Schedule</a>
            </div>
        `;
        container.appendChild(card);
    });
}