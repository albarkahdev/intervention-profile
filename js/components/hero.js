class Hero {
    static render() {
        return `
            <div class="hero-container">
                <div class="hero-background">
                    <div class="hero-overlay"></div>
                </div>
                
                <header id="header" class="header"></header>
                
                <!-- Content Area -->
                <div class="hero-content">
                    <!-- Left Content -->
                    <div class="hero-text">
                        <h1 class="hero-title">
                            <span class="title-outline">GET AN</span>
                            <span class="title-solid">INTERVENTION</span>
                        </h1>
                        <p class="hero-description">
                            Showing greater respect to older adults can be done in several ways : 
                            acknowledging and putting to use the talents and skills of older adults; creating 
                            intergenerational initiatives; and allowing older adults to stay active and independent 
                            for as long as possible.
                        </p>
                    </div>
                    
                    <!-- Right Content - Contact Form -->
                    <div class="hero-form-container">
                        <form class="contact-form" id="contactForm">
                            <h2 class="form-title">Contact Us</h2>
                            
                            <!-- Form Grid -->
                            <div class="form-grid">
                                <!-- First Row -->
                                <div class="form-row">
                                    <div class="form-group">
                                        <input type="text" class="form-input error" id="firstName">
                                        <label class="label error active" for="firstName">First Name</label>
                                        <div class="error-tooltip show">
                                            This field can't be empty. Please fill it in.
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-input" id="lastName">
                                        <label class="label" for="lastName">Last Name</label>
                                    </div>
                                </div>
                                
                                <!-- Second Row -->
                                <div class="form-row">
                                    <div class="form-group">
                                        <input type="text" class="form-input" id="businessEmail">
                                        <label class="label" for="businessEmail">Business Email</label>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-input" id="company">
                                        <label class="label" for="company">Company</label>
                                    </div>
                                </div>
                                
                                <!-- Third Row -->
                                <div class="form-row full-width">
                                    <div class="form-group">
                                        <select class="form-select" id="country">
                                            <option value=""></option>
                                            <option value="us">United States</option>
                                            <option value="ca">Canada</option>
                                            <option value="uk">United Kingdom</option>
                                            <option value="de">Germany</option>
                                            <option value="fr">France</option>
                                            <option value="jp">Japan</option>
                                            <option value="au">Australia</option>
                                        </select>
                                        <label class="label" for="country">Country</label>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Submit Button -->
                            <div class="button-row">
                                <button class="btn-primary" type="submit">
                                    <img src="./assets/icons/submit-icon.svg" alt="Submit" class="btn-icon-img">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                
                <!-- Bottom Wave -->
                <div class="hero-wave">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
                    </svg>
                </div>
            </div>
        `;
    }

    static addEventListeners() {
        function handleLabelAnimation(input, label) {
            const updateLabel = () => {
                if (input.value.trim() !== '' || document.activeElement === input) {
                    label.classList.add('active');
                    input.classList.add('filled');
                } else {
                    label.classList.remove('active');
                    input.classList.remove('filled');
                }
            };

            input.addEventListener('focus', updateLabel);
            input.addEventListener('blur', updateLabel);
            input.addEventListener('input', updateLabel);
            
            // For select elements, also check on change
            if (input.tagName === 'SELECT') {
                input.addEventListener('change', updateLabel);
            }
            
            // Initial check
            updateLabel();
        }

        // Apply to all form inputs and selects
        document.querySelectorAll('.form-input, .form-select').forEach(input => {
            const label = input.nextElementSibling;
            if (label && label.classList.contains('label')) {
                handleLabelAnimation(input, label);
            }
        });
        
        const errorInput = document.querySelector('.form-input.error');
        if (errorInput) {
            errorInput.addEventListener('focus', function() {
                this.classList.remove('error');
                const label = this.nextElementSibling;
                if (label) label.classList.remove('error');
                const tooltip = this.parentNode.querySelector('.error-tooltip');
                if (tooltip) tooltip.classList.remove('show');
            });
        }
    }
}
