/**
 * OpenClaw Lab - Main JavaScript
 * Handles search, filtering, and interactive elements
 */

document.addEventListener('DOMContentLoaded', function() {

    // ===== MOBILE HAMBURGER MENU =====
    console.log('🦜 Initializing hamburger menu...');

    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    console.log('Nav toggle found:', navToggle);
    console.log('Nav menu found:', navMenu);

    if (navToggle && navMenu) {
        // Simple toggle on click
        navToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('🍔 Hamburger clicked!');

            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');

            console.log('Menu active:', navMenu.classList.contains('active'));
        });

        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        console.log('Found', navLinks.length, 'navigation links');

        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                console.log('Link clicked, closing menu');
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    } else {
        console.error('❌ Hamburger menu elements not found!');
        console.error('navToggle:', navToggle);
        console.error('navMenu:', navMenu);
    }

    // ===== EXPERIMENT SEARCH & FILTER =====
    const searchInput = document.getElementById('searchInput');
    const filterTags = document.querySelectorAll('.filter-tag');
    const experimentsGrid = document.getElementById('experimentsGrid');
    const emptyState = document.getElementById('emptyState');

    if (searchInput && experimentsGrid) {
        // Search functionality
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            filterExperiments(searchTerm);
        });

        // Filter by tags
        filterTags.forEach(tag => {
            tag.addEventListener('click', function() {
                // Update active state
                filterTags.forEach(t => t.classList.remove('active'));
                this.classList.add('active');

                const filterValue = this.getAttribute('data-filter');
                filterByTag(filterValue);
            });
        });
    }

    /**
     * Filter experiments by search term
     */
    function filterExperiments(searchTerm) {
        const cards = experimentsGrid.querySelectorAll('.experiment-card:not(.placeholder)');
        let visibleCount = 0;

        cards.forEach(card => {
            const title = card.querySelector('.card-title')?.textContent.toLowerCase() || '';
            const excerpt = card.querySelector('.card-excerpt')?.textContent.toLowerCase() || '';
            const tags = card.querySelector('.card-tags')?.textContent.toLowerCase() || '';

            const matchesSearch = title.includes(searchTerm) ||
                                excerpt.includes(searchTerm) ||
                                tags.includes(searchTerm);

            if (matchesSearch) {
                card.style.display = '';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        // Show/hide empty state
        if (emptyState) {
            emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
        }
    }

    /**
     * Filter experiments by tag
     */
    function filterByTag(filterValue) {
        const cards = experimentsGrid.querySelectorAll('.experiment-card:not(.placeholder)');
        let visibleCount = 0;

        cards.forEach(card => {
            const cardTags = card.getAttribute('data-tags') || '';

            if (filterValue === 'all' || cardTags.includes(filterValue)) {
                card.style.display = '';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        // Show/hide empty state
        if (emptyState) {
            emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
        }
    }


    // ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);

                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });


    // ===== MOBILE MENU TOGGLE (for future enhancement) =====
    // Add hamburger menu functionality if needed


    // ===== ANIMATED COUNTERS FOR STATS =====
    const statNumbers = document.querySelectorAll('.stat-number');

    if (statNumbers.length > 0) {
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    animateCounter(target);
                    observer.unobserve(target);
                }
            });
        }, observerOptions);

        statNumbers.forEach(stat => {
            observer.observe(stat);
        });
    }

    /**
     * Animate counter numbers
     */
    function animateCounter(element) {
        const target = element.textContent.trim();

        // Only animate numeric values
        if (!isNaN(target) && target !== '') {
            const targetNumber = parseInt(target);
            const duration = 1000; // 1 second
            const steps = 30;
            const increment = targetNumber / steps;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= targetNumber) {
                    element.textContent = targetNumber;
                    clearInterval(timer);
                } else {
                    element.textContent = Math.floor(current);
                }
            }, duration / steps);
        }
    }


    // ===== IMAGE LAZY LOADING =====
    const images = document.querySelectorAll('img[data-src]');

    if (images.length > 0) {
        const imageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }


    // ===== COPY CODE BLOCKS =====
    const codeBlocks = document.querySelectorAll('.code-block');

    codeBlocks.forEach(block => {
        // Add copy button
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-code-btn';
        copyButton.textContent = 'Copy';
        copyButton.style.cssText = `
            position: absolute;
            top: 8px;
            right: 8px;
            padding: 4px 12px;
            background: rgba(23, 255, 129, 0.2);
            border: 1px solid #17ff81;
            color: #17ff81;
            border-radius: 4px;
            cursor: pointer;
            font-size: 12px;
            transition: all 0.2s;
        `;

        block.style.position = 'relative';
        block.appendChild(copyButton);

        copyButton.addEventListener('click', function() {
            const code = block.querySelector('code');
            if (code) {
                navigator.clipboard.writeText(code.textContent).then(() => {
                    copyButton.textContent = 'Copied!';
                    setTimeout(() => {
                        copyButton.textContent = 'Copy';
                    }, 2000);
                });
            }
        });

        copyButton.addEventListener('mouseenter', function() {
            this.style.background = '#17ff81';
            this.style.color = '#000';
        });

        copyButton.addEventListener('mouseleave', function() {
            this.style.background = 'rgba(23, 255, 129, 0.2)';
            this.style.color = '#17ff81';
        });
    });


    // ===== THEME TOGGLE (optional for future) =====
    // Add dark mode toggle functionality if needed

    console.log('🦜 OpenClaw Lab initialized successfully!');
});
