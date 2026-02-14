/**
 * OpenClaw Lab - Main JavaScript
 * Handles search, filtering, and interactive elements
 */

document.addEventListener('DOMContentLoaded', function() {

    // ===== MOBILE HAMBURGER MENU =====
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            // Toggle active class on button and menu
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navToggle.contains(event.target) || navMenu.contains(event.target);
            if (!isClickInsideNav && navMenu.classList.contains('active')) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
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


    // ===== ANIMATE ON SCROLL (AOS) =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const animateOnScroll = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, observerOptions);

    // Observe all elements with data-aos attribute
    const animatedElements = document.querySelectorAll('[data-aos]');
    animatedElements.forEach(el => {
        animateOnScroll.observe(el);
    });


    // ===== PARALLAX EFFECT FOR DECORATIVE SHAPES =====
    const shapes = document.querySelectorAll('.floating-shape');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        
        shapes.forEach((shape, index) => {
            const speed = 0.1 + (index * 0.05);
            const yPos = -(scrolled * speed);
            shape.style.transform = `translateY(${yPos}px)`;
        });
    });


    // ===== ENHANCED STAT COUNTER =====
    const statNumbers = document.querySelectorAll('.stat-number[data-target]');

    if (statNumbers.length > 0) {
        const statObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStatCounter(entry.target);
                    statObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        statNumbers.forEach(stat => {
            statObserver.observe(stat);
        });
    }

    function animateStatCounter(element) {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, duration / steps);
    }


    // ===== SMOOTH REVEAL FOR CARDS =====
    const cards = document.querySelectorAll('.experiment-card');
    
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });


    // ===== NAVBAR SCROLL EFFECT =====
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.08)';
            navbar.style.background = 'var(--color-white)';
            navbar.style.backdropFilter = 'none';
        }

        lastScroll = currentScroll;
    });


    // ===== RIPPLE EFFECT ON BUTTONS =====
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });


    // ===== FLOATING PARROT INTERACTION =====
    const floatingParrot = document.querySelector('.floating-parrot');
    
    if (floatingParrot) {
        floatingParrot.addEventListener('mouseenter', function() {
            this.style.animation = 'none';
            this.style.transform = 'scale(1.2) rotate(15deg)';
        });

        floatingParrot.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
            setTimeout(() => {
                this.style.animation = 'float 3s ease-in-out infinite';
            }, 300);
        });
    }


    // ===== WAVE ANIMATION =====
    const wave = document.querySelector('.wave-fill');
    
    if (wave) {
        let waveOffset = 0;
        
        setInterval(() => {
            waveOffset += 0.5;
            wave.style.transform = `translateX(${Math.sin(waveOffset * 0.05) * 3}px)`;
        }, 50);
    }

    console.log('🦜 OpenClaw Lab initialized with WOW effects!');
});
