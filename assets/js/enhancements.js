/**
 * Blog Enhancements - Interactive Features
 * Minimal, Clean & Performant JavaScript
 */

(function() {
    'use strict';

    // ==========================================
    // READING PROGRESS BAR
    // ==========================================
    function initReadingProgress() {
        // Only show on single post pages
        if (!document.querySelector('.post-single')) return;

        // Create progress bar element
        const progressBar = document.createElement('div');
        progressBar.className = 'reading-progress';
        document.body.prepend(progressBar);

        // Update progress on scroll
        function updateProgress() {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

            progressBar.style.width = Math.min(scrollPercent, 100) + '%';
        }

        window.addEventListener('scroll', updateProgress, { passive: true });
        updateProgress(); // Initial call
    }

    // ==========================================
    // BACK TO TOP BUTTON
    // ==========================================
    function initBackToTop() {
        // Create button
        const backToTopBtn = document.createElement('button');
        backToTopBtn.className = 'back-to-top';
        backToTopBtn.setAttribute('aria-label', 'Back to top');
        backToTopBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
        `;
        document.body.appendChild(backToTopBtn);

        // Show/hide on scroll
        function toggleVisibility() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }

        // Scroll to top on click
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        window.addEventListener('scroll', toggleVisibility, { passive: true });
        toggleVisibility(); // Initial call
    }

    // ==========================================
    // IMAGE ZOOM/LIGHTBOX
    // ==========================================
    function initImageZoom() {
        // Only on post content
        const postContent = document.querySelector('.post-content');
        if (!postContent) return;

        const images = postContent.querySelectorAll('img');
        if (images.length === 0) return;

        // Create modal
        const modal = document.createElement('div');
        modal.className = 'image-modal';
        modal.innerHTML = `
            <span class="image-modal-close">&times;</span>
            <img src="" alt="">
        `;
        document.body.appendChild(modal);

        const modalImg = modal.querySelector('img');
        const closeBtn = modal.querySelector('.image-modal-close');

        // Add click handlers to images
        images.forEach(img => {
            img.addEventListener('click', function() {
                modal.classList.add('active');
                modalImg.src = this.src;
                modalImg.alt = this.alt;
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            });
        });

        // Close modal
        function closeModal() {
            modal.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        }

        closeBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', function(e) {
            if (e.target === modal || e.target === modalImg) {
                closeModal();
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });
    }

    // ==========================================
    // CODE COPY BUTTON
    // ==========================================
    function initCodeCopy() {
        const codeBlocks = document.querySelectorAll('pre code');
        if (codeBlocks.length === 0) return;

        codeBlocks.forEach(codeBlock => {
            const pre = codeBlock.parentElement;

            // Wrap in highlight div if not already
            if (!pre.parentElement.classList.contains('highlight')) {
                const wrapper = document.createElement('div');
                wrapper.className = 'highlight';
                pre.parentElement.insertBefore(wrapper, pre);
                wrapper.appendChild(pre);
            }

            const wrapper = pre.parentElement;

            // Create copy button
            const copyBtn = document.createElement('button');
            copyBtn.className = 'code-copy-btn';
            copyBtn.textContent = 'Copy';
            copyBtn.setAttribute('aria-label', 'Copy code to clipboard');

            wrapper.appendChild(copyBtn);

            // Copy functionality
            copyBtn.addEventListener('click', async function() {
                const code = codeBlock.textContent;

                try {
                    await navigator.clipboard.writeText(code);
                    copyBtn.textContent = 'Copied!';
                    copyBtn.classList.add('copied');

                    setTimeout(() => {
                        copyBtn.textContent = 'Copy';
                        copyBtn.classList.remove('copied');
                    }, 2000);
                } catch (err) {
                    // Fallback for older browsers
                    const textArea = document.createElement('textarea');
                    textArea.value = code;
                    textArea.style.position = 'fixed';
                    textArea.style.opacity = '0';
                    document.body.appendChild(textArea);
                    textArea.select();

                    try {
                        document.execCommand('copy');
                        copyBtn.textContent = 'Copied!';
                        copyBtn.classList.add('copied');

                        setTimeout(() => {
                            copyBtn.textContent = 'Copy';
                            copyBtn.classList.remove('copied');
                        }, 2000);
                    } catch (err) {
                        copyBtn.textContent = 'Failed';
                        setTimeout(() => {
                            copyBtn.textContent = 'Copy';
                        }, 2000);
                    }

                    document.body.removeChild(textArea);
                }
            });
        });
    }

    // ==========================================
    // LAZY LOAD IMAGES WITH SKELETON
    // ==========================================
    function initLazyLoad() {
        const images = document.querySelectorAll('.entry-cover img');

        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        const container = img.closest('.entry-cover');

                        if (container) {
                            container.classList.add('loading');
                        }

                        img.addEventListener('load', function() {
                            if (container) {
                                container.classList.remove('loading');
                            }
                        });

                        // If image is already cached/loaded
                        if (img.complete) {
                            if (container) {
                                container.classList.remove('loading');
                            }
                        }

                        observer.unobserve(img);
                    }
                });
            }, {
                rootMargin: '50px'
            });

            images.forEach(img => imageObserver.observe(img));
        }
    }

    // ==========================================
    // SMOOTH ANCHOR LINKS
    // ==========================================
    function initSmoothAnchors() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');

                // Skip if it's just "#"
                if (href === '#') return;

                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 80;

                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // ==========================================
    // EXTERNAL LINKS - Open in New Tab
    // ==========================================
    function initExternalLinks() {
        const domain = window.location.hostname;
        const links = document.querySelectorAll('a[href^="http"]');

        links.forEach(link => {
            const linkDomain = new URL(link.href).hostname;

            if (linkDomain !== domain) {
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', 'noopener noreferrer');
            }
        });
    }

    // ==========================================
    // KEYBOARD SHORTCUTS
    // ==========================================
    function initKeyboardShortcuts() {
        document.addEventListener('keydown', function(e) {
            // Ignore if user is typing in input/textarea
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
                return;
            }

            // Ctrl/Cmd + K: Focus search (if exists)
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                const searchInput = document.querySelector('input[type="search"]');
                if (searchInput) searchInput.focus();
            }

            // T or Home: Scroll to top
            if (e.key === 't' || e.key === 'Home') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }

            // B or End: Scroll to bottom
            if (e.key === 'b' || e.key === 'End') {
                e.preventDefault();
                window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: 'smooth'
                });
            }
        });
    }

    // ==========================================
    // PERFORMANCE OPTIMIZATION
    // ==========================================

    // Throttle function for scroll events
    function throttle(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // ==========================================
    // INITIALIZE ALL FEATURES
    // ==========================================
    function init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', runInit);
        } else {
            runInit();
        }
    }

    function runInit() {
        initReadingProgress();
        initBackToTop();
        initImageZoom();
        initCodeCopy();
        initLazyLoad();
        initSmoothAnchors();
        initExternalLinks();
        initKeyboardShortcuts();

        // Log for debugging
        console.log('🎨 Blog enhancements loaded successfully!');
    }

    // Start initialization
    init();

})();
