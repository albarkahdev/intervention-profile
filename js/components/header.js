class Header {
    static render() {
        return `
            <div class="header-container">
                <div class="header-logo">
                    <img src="assets/images/logo.svg" alt="Get An Intervention" class="logo-desktop">
                    <img src="assets/images/logo.svg" alt="Get An Intervention" class="logo-mobile">
                </div>
                
                <!-- Desktop Layout -->
                <div class="header-right desktop-header">
                    <nav class="header-nav">
                        <ul class="nav-list">
                            <li class="nav-item">
                                <a href="#" data-route="/" class="nav-link active">HOME</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" data-route="/about" class="nav-link">ABOUT</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" data-route="/contact" class="nav-link">CONTACT</a>
                            </li>
                        </ul>
                    </nav>
                    
                    <div class="vertical-divider"></div>
                    
                    <div class="header-cta">
                        <span class="cta-text">CALL NOW FOR A CONSULT</span>
                        <span class="cta-phone">123.456.7890</span>
                    </div>
                </div>
                
                <!-- Tablet Layout -->
                <div class="header-right tablet-header">
                    <div class="tablet-nav-cta">
                        <nav class="header-nav">
                            <ul class="nav-list">
                                <li class="nav-item">
                                    <a href="#" data-route="/" class="nav-link active">HOME</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" data-route="/about" class="nav-link">ABOUT</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" data-route="/contact" class="nav-link">CONTACT</a>
                                </li>
                            </ul>
                        </nav>
                        
                        <div class="header-cta">
                            <span class="cta-text">CALL NOW FOR A CONSULT</span>
                            <span class="cta-phone">XXX.XXX.XXXX</span>
                        </div>
                    </div>
                </div>
                
                <!-- Mobile Menu Toggle -->
                <button class="mobile-menu-toggle" id="mobileMenuToggle" aria-label="Toggle mobile menu">
                    <span class="hamburger-line"></span>
                    <span class="hamburger-line"></span>
                    <span class="hamburger-line"></span>
                </button>
            </div>
            
            <!-- Mobile Navigation -->
            <nav class="mobile-nav" id="mobileNav">
                <ul class="nav-list">
                    <li class="nav-item">
                        <a href="#" data-route="/" class="nav-link active">HOME</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" data-route="/about" class="nav-link">ABOUT</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" data-route="/contact" class="nav-link">CONTACT</a>
                    </li>
                </ul>
                <div class="mobile-cta">
                    <span class="cta-text">CALL NOW FOR A CONSULT</span>
                    <span class="cta-phone">XXX.XXX.XXXX</span>
                </div>
            </nav>
        `;
    }

    static addEventListeners() {
        const mobileToggle = document.getElementById('mobileMenuToggle');
        const mobileNav = document.getElementById('mobileNav');
        
        if (mobileToggle && mobileNav) {
            mobileToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                mobileToggle.classList.toggle('active');
                mobileNav.classList.toggle('active');
            });
        }

        // Handle navigation link clicks
        document.addEventListener('click', (e) => {
            if (e.target.matches('.nav-link')) {
                e.preventDefault();
                
                // Remove active class from all nav links
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                
                // Close mobile menu if open
                if (mobileNav && mobileNav.classList.contains('active')) {
                    mobileNav.classList.remove('active');
                    mobileToggle.classList.remove('active');
                }
            }
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (mobileNav && mobileNav.classList.contains('active')) {
                if (!e.target.closest('.header')) {
                    mobileNav.classList.remove('active');
                    mobileToggle.classList.remove('active');
                }
            }
        });

        // Close mobile menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileNav && mobileNav.classList.contains('active')) {
                mobileNav.classList.remove('active');
                mobileToggle.classList.remove('active');
            }
        });

        // Handle logo clicks
        document.addEventListener('click', (e) => {
            if (e.target.closest('.header-logo')) {
                window.router?.navigate('/');
            }
        });
    }
}
