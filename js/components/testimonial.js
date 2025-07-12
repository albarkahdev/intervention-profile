class Testimonial {
    constructor() {
        this.currentSlide = 0;
        this.totalSlides = 4;
        this.isAnimating = false;
        this.autoSlideInterval = null;
        this.touchStartX = 0;
        this.touchEndX = 0;
        this.isDragging = false;
        
        this.init();
    }

    static render() {
        return `
            <div class="testimonials-container">
                <!-- Testimonials Carousel -->
                <div class="carousel-container">
                    <button class="carousel-arrow prev" id="prevSlide" aria-label="Previous testimonial">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                            <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                    <div class="carousel-testimonial">
                        <div class="testimonials-carousel" id="testimonialsCarousel">
                            <div class="carousel-track" id="carouselTrack">
                                <!-- Testimonial 1 -->
                                <div class="testimonial-slide active" data-slide="0">
                                    <div class="testimonial-content">
                                        <div class="testimonial-image testimonial-image-first">
                                            <img src="assets/images/testimonial-1.png" alt="Abbie Harvey" loading="lazy">
                                        </div>
                                        <div class="testimonial-text">
                                            <div class="quote-icon">
                                                <svg width="40" height="32" viewBox="0 0 40 32" fill="none">
                                                    <path d="M0 16C0 7.16344 7.16344 0 16 0V8C11.5817 8 8 11.5817 8 16H16V32H0V16Z" fill="currentColor" opacity="0.3"/>
                                                    <path d="M24 16C24 7.16344 31.1634 0 40 0V8C35.5817 8 32 11.5817 32 16H40V32H24V16Z" fill="currentColor" opacity="0.3"/>
                                                </svg>
                                            </div>
                                            <h3 class="testimonial-name">Abbie Harvey</h3>
                                            <p class="testimonial-quote">
                                                I have been caring for my mom & dad off and on for about 10 years now, and I know the importance of me being there for appointments. Older people need attention, love and care that they truly deserve.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <!-- Testimonial 2 -->
                                <div class="testimonial-slide" data-slide="1">
                                    <div class="testimonial-content">
                                        <div class="testimonial-image">
                                            <img src="assets/images/testimonial-1.png" alt="Sarah Johnson" loading="lazy">
                                        </div>
                                        <div class="testimonial-text">
                                            <div class="quote-icon">
                                                <svg width="40" height="32" viewBox="0 0 40 32" fill="none">
                                                    <path d="M0 16C0 7.16344 7.16344 0 16 0V8C11.5817 8 8 11.5817 8 16H16V32H0V16Z" fill="currentColor" opacity="0.3"/>
                                                    <path d="M24 16C24 7.16344 31.1634 0 40 0V8C35.5817 8 32 11.5817 32 16H40V32H24V16Z" fill="currentColor" opacity="0.3"/>
                                                </svg>
                                            </div>
                                            <h3 class="testimonial-name">Sarah Johnson</h3>
                                            <p class="testimonial-quote">
                                                I have been caring for my mom & dad off and on for about 10 years now, and I know the importance of me being there for appointments. Older people need attention, love and care that they truly deserve.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <!-- Testimonial 3 -->
                                <div class="testimonial-slide" data-slide="2">
                                    <div class="testimonial-content">
                                        <div class="testimonial-image">
                                            <img src="assets/images/testimonial-1.png" alt="Michael Chen" loading="lazy">
                                        </div>
                                        <div class="testimonial-text">
                                            <div class="quote-icon">
                                                <svg width="40" height="32" viewBox="0 0 40 32" fill="none">
                                                    <path d="M0 16C0 7.16344 7.16344 0 16 0V8C11.5817 8 8 11.5817 8 16H16V32H0V16Z" fill="currentColor" opacity="0.3"/>
                                                    <path d="M24 16C24 7.16344 31.1634 0 40 0V8C35.5817 8 32 11.5817 32 16H40V32H24V16Z" fill="currentColor" opacity="0.3"/>
                                                </svg>
                                            </div>
                                            <h3 class="testimonial-name">Michael Chen</h3>
                                            <p class="testimonial-quote">
                                                I have been caring for my mom & dad off and on for about 10 years now, and I know the importance of me being there for appointments. Older people need attention, love and care that they truly deserve.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <!-- Testimonial 4 -->
                                <div class="testimonial-slide" data-slide="3">
                                    <div class="testimonial-content">
                                        <div class="testimonial-image">
                                            <img src="assets/images/testimonial-1.png" alt="Emma Rodriguez" loading="lazy">
                                        </div>
                                        <div class="testimonial-text">
                                            <div class="quote-icon">
                                                <svg width="40" height="32" viewBox="0 0 40 32" fill="none">
                                                    <path d="M0 16C0 7.16344 7.16344 0 16 0V8C11.5817 8 8 11.5817 8 16H16V32H0V16Z" fill="currentColor" opacity="0.3"/>
                                                    <path d="M24 16C24 7.16344 31.1634 0 40 0V8C35.5817 8 32 11.5817 32 16H40V32H24V16Z" fill="currentColor" opacity="0.3"/>
                                                </svg>
                                            </div>
                                            <h3 class="testimonial-name">Emma Rodriguez</h3>
                                            <p class="testimonial-quote">
                                                I have been caring for my mom & dad off and on for about 10 years now, and I know the importance of me being there for appointments. Older people need attention, love and care that they truly deserve.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Carousel Indicators -->
                        <div class="carousel-indicators" id="carouselIndicators">
                            <button class="indicator active" data-slide="0" aria-label="Go to testimonial 1"></button>
                            <button class="indicator" data-slide="1" aria-label="Go to testimonial 2"></button>
                            <button class="indicator" data-slide="2" aria-label="Go to testimonial 3"></button>
                            <button class="indicator" data-slide="3" aria-label="Go to testimonial 4"></button>
                        </div>
                    </div>
            
                    <button class="carousel-arrow next" id="nextSlide" aria-label="Next testimonial">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                            <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        `;
    }

    init() {
        this.carousel = document.getElementById('testimonialsCarousel');
        this.track = document.getElementById('carouselTrack');
        this.indicators = document.querySelectorAll('.indicator');
        this.prevBtn = document.getElementById('prevSlide');
        this.nextBtn = document.getElementById('nextSlide');

        if (!this.carousel) return;

        this.addEventListeners();
        this.startAutoSlide();
    }

    addEventListeners() {
        // Indicator clicks
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                this.goToSlide(index);
            });
        });

        // Arrow clicks
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => {
                this.previousSlide();
            });
        }

        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => {
                this.nextSlide();
            });
        }

        // Touch events for swipe
        this.carousel.addEventListener('touchstart', (e) => {
            this.handleTouchStart(e);
        });

        this.carousel.addEventListener('touchmove', (e) => {
            this.handleTouchMove(e);
        });

        this.carousel.addEventListener('touchend', (e) => {
            this.handleTouchEnd(e);
        });

        // Mouse events for drag (desktop)
        this.carousel.addEventListener('mousedown', (e) => {
            this.handleMouseDown(e);
        });

        this.carousel.addEventListener('mousemove', (e) => {
            this.handleMouseMove(e);
        });

        this.carousel.addEventListener('mouseup', (e) => {
            this.handleMouseUp(e);
        });

        this.carousel.addEventListener('mouseleave', () => {
            this.handleMouseUp();
        });

        // Pause auto-slide on hover
        this.carousel.addEventListener('mouseenter', () => {
            this.pauseAutoSlide();
        });

        this.carousel.addEventListener('mouseleave', () => {
            this.startAutoSlide();
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.previousSlide();
            } else if (e.key === 'ArrowRight') {
                this.nextSlide();
            }
        });

        // Pause on focus
        this.carousel.addEventListener('focusin', () => {
            this.pauseAutoSlide();
        });

        this.carousel.addEventListener('focusout', () => {
            this.startAutoSlide();
        });
    }

    goToSlide(slideIndex) {
        if (this.isAnimating || slideIndex === this.currentSlide) return;

        this.isAnimating = true;
        this.currentSlide = slideIndex;

        // Update track position
        const translateX = -slideIndex * 25; // 25% per slide
        this.track.style.transform = `translateX(${translateX}%)`;

        // Update indicators
        this.indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === slideIndex);
        });

        // Update slides
        const slides = document.querySelectorAll('.testimonial-slide');
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === slideIndex);
        });

        // Reset animation flag
        setTimeout(() => {
            this.isAnimating = false;
        }, 500);
    }

    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.totalSlides;
        this.goToSlide(nextIndex);
    }

    previousSlide() {
        const prevIndex = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        this.goToSlide(prevIndex);
    }

    handleTouchStart(e) {
        this.touchStartX = e.touches[0].clientX;
        this.pauseAutoSlide();
    }

    handleTouchMove(e) {
        if (!this.touchStartX) return;
        
        this.touchEndX = e.touches[0].clientX;
        
        // Prevent scrolling while swiping
        if (Math.abs(this.touchStartX - this.touchEndX) > 10) {
            e.preventDefault();
        }
    }

    handleTouchEnd(e) {
        if (!this.touchStartX || !this.touchEndX) return;

        const difference = this.touchStartX - this.touchEndX;
        const threshold = 50;

        if (Math.abs(difference) > threshold) {
            if (difference > 0) {
                this.nextSlide();
            } else {
                this.previousSlide();
            }
        }

        this.touchStartX = 0;
        this.touchEndX = 0;
        this.startAutoSlide();
    }
    
    handleMouseDown(e) {
        this.isDragging = true;
        this.touchStartX = e.clientX;
        this.carousel.classList.add('dragging');
        this.pauseAutoSlide();
        e.preventDefault();
    }

    handleMouseMove(e) {
        if (!this.isDragging) return;
        this.touchEndX = e.clientX;
    }

    handleMouseUp(e) {
        if (!this.isDragging) return;

        this.isDragging = false;
        this.carousel.classList.remove('dragging');

        if (this.touchStartX && this.touchEndX) {
            const difference = this.touchStartX - this.touchEndX;
            const threshold = 50;

            if (Math.abs(difference) > threshold) {
                if (difference > 0) {
                    this.nextSlide();
                } else {
                    this.previousSlide();
                }
            }
        }

        this.touchStartX = 0;
        this.touchEndX = 0;
        this.startAutoSlide();
    }

    startAutoSlide() {
        this.pauseAutoSlide();
        this.autoSlideInterval = setInterval(() => {
            this.nextSlide();
        }, 5000); // 5 seconds
    }

    pauseAutoSlide() {
        if (this.autoSlideInterval) {
            clearInterval(this.autoSlideInterval);
            this.autoSlideInterval = null;
        }
    }

    static addEventListeners() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                new Testimonial();
            });
        } else {
            new Testimonial();
        }
    }
}
