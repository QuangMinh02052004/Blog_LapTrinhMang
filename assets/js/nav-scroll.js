/**
 * Navigation Scroll Effect
 */
(function() {
    'use strict';

    const nav = document.querySelector('.nav');
    if (!nav) return;

    let lastScroll = 0;

    function updateNav() {
        const currentScroll = window.pageYOffset;

        // Add scrolled class after 50px
        if (currentScroll > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    }

    // Throttle scroll event
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                updateNav();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });

    // Initial call
    updateNav();
})();
