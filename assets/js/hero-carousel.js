/**
 * Hero Carousel - Auto-rotating image carousel
 * Inspired by Claude.ai landing page design
 */

(function() {
    'use strict';

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCarousel);
    } else {
        initCarousel();
    }

    function initCarousel() {
        const carousel = document.querySelector('.image-carousel');
        if (!carousel) return;

        const track = carousel.querySelector('.carousel-track');
        const items = Array.from(track.querySelectorAll('.carousel-item'));
        const indicators = Array.from(carousel.querySelectorAll('.indicator'));

        if (items.length === 0) return;

        let currentIndex = 0;
        let autoplayInterval = null;
        const AUTOPLAY_DELAY = 5000; // 5 seconds
        const TRANSITION_DURATION = 600; // matches CSS transition

        /**
         * Show slide at specified index
         */
        function showSlide(index) {
            // Ensure index is within bounds
            if (index < 0) index = items.length - 1;
            if (index >= items.length) index = 0;

            // Update current index
            currentIndex = index;

            // Update items
            items.forEach((item, i) => {
                if (i === currentIndex) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });

            // Update indicators
            indicators.forEach((indicator, i) => {
                if (i === currentIndex) {
                    indicator.classList.add('active');
                    indicator.setAttribute('aria-current', 'true');
                } else {
                    indicator.classList.remove('active');
                    indicator.removeAttribute('aria-current');
                }
            });
        }

        /**
         * Go to next slide
         */
        function nextSlide() {
            showSlide(currentIndex + 1);
        }

        /**
         * Go to previous slide
         */
        function prevSlide() {
            showSlide(currentIndex - 1);
        }

        /**
         * Start autoplay
         */
        function startAutoplay() {
            stopAutoplay(); // Clear any existing interval
            autoplayInterval = setInterval(nextSlide, AUTOPLAY_DELAY);
        }

        /**
         * Stop autoplay
         */
        function stopAutoplay() {
            if (autoplayInterval) {
                clearInterval(autoplayInterval);
                autoplayInterval = null;
            }
        }

        /**
         * Restart autoplay after user interaction
         */
        function restartAutoplay() {
            stopAutoplay();
            startAutoplay();
        }

        // Initialize indicators with click handlers
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                showSlide(index);
                restartAutoplay();
            });

            // Add keyboard navigation
            indicator.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    showSlide(index);
                    restartAutoplay();
                }
            });

            // Make indicators keyboard accessible
            indicator.setAttribute('role', 'button');
            indicator.setAttribute('aria-label', `Go to slide ${index + 1}`);
            indicator.setAttribute('tabindex', '0');
        });

        // Pause autoplay on hover
        carousel.addEventListener('mouseenter', stopAutoplay);
        carousel.addEventListener('mouseleave', startAutoplay);

        // Pause autoplay when page is not visible
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                stopAutoplay();
            } else {
                startAutoplay();
            }
        });

        // Keyboard navigation for the carousel
        carousel.addEventListener('keydown', (e) => {
            switch (e.key) {
                case 'ArrowLeft':
                    e.preventDefault();
                    prevSlide();
                    restartAutoplay();
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    nextSlide();
                    restartAutoplay();
                    break;
            }
        });

        // Touch swipe support for mobile
        let touchStartX = 0;
        let touchEndX = 0;
        const MIN_SWIPE_DISTANCE = 50;

        carousel.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            stopAutoplay();
        }, { passive: true });

        carousel.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
            startAutoplay();
        }, { passive: true });

        function handleSwipe() {
            const swipeDistance = touchEndX - touchStartX;

            if (Math.abs(swipeDistance) < MIN_SWIPE_DISTANCE) {
                return; // Swipe too short, ignore
            }

            if (swipeDistance > 0) {
                // Swipe right - go to previous
                prevSlide();
            } else {
                // Swipe left - go to next
                nextSlide();
            }
        }

        // Add smooth scroll behavior on page load
        items.forEach((item, index) => {
            if (index === 0) {
                item.style.transition = 'none';
                item.classList.add('active');
                // Force reflow
                item.offsetHeight;
                item.style.transition = '';
            }
        });

        // Initialize - show first slide and start autoplay
        showSlide(0);
        startAutoplay();

        // Expose control methods for potential external use
        window.heroCarousel = {
            next: nextSlide,
            prev: prevSlide,
            goto: showSlide,
            play: startAutoplay,
            pause: stopAutoplay
        };
    }

    // Add smooth fade-in animation on page load
    window.addEventListener('load', () => {
        const heroSection = document.querySelector('.hero-section');
        if (heroSection) {
            heroSection.style.opacity = '1';
        }
    });

    // Intersection Observer for scroll animations
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe elements that should animate on scroll
        document.addEventListener('DOMContentLoaded', () => {
            const animatedElements = document.querySelectorAll('.feature-card, .post-card');
            animatedElements.forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
                observer.observe(el);
            });
        });
    }

})();
