class Understand {
    static render() {
        return `
            <div class="understand-container">
                <div class="understand-images">
                    <div class="image-item">
                        <img src="./assets/images/understand-1.png" alt="Active older adults" loading="lazy">
                    </div>
                    <div class="image-item featured">
                        <img src="./assets/images/understand-2.png" alt="Happy elderly couple" loading="lazy">
                    </div>
                    <div class="image-item">
                        <img src="./assets/images/understand-3.png" alt="Community gathering" loading="lazy">
                    </div>
                </div>
                
                <div class="understand-content">
                    <div class="content-grid">
                    
                        <div class="title-section">
                            <h2 class="section-title">
                                <span class="title-outline">WE</span> <span>UNDERSTAND</span>
                            </h2>
                        </div>
                        
                        <div class="text-content">
                            <div class="text-column text-column-a">
                                <p class="content-text">
                                    Older adults want to play active and meaningful roles in their lives, including as part of a social network, a neighborhood, and a community. Service providers and policymakers must consider that a lack of sense of purpose can become problematic as people age.  Engaging them in leisure activities and volunteer work is important.
                                </p>
                            </div>
                            
                            <div class="text-column text-column-b">
                                <p class="content-text">
                                    Older adults want to stay active and contribute to society in a reciprocal manner (meaning that they want to exchange their services and skills with others for the mutual benefit of the neighborhood or community). Qualitative and quantitative studies published from 2005 to 2016 examining the social needs of older adults were eligible for inclusion.
                                </p>
                            </div>
                            
                            <div class="text-column text-column-c">
                                <p class="content-text">
                                    To stimulate social contacts, neighborhood initiatives can be developed. Social meeting places, such as pubs and churches can help to foster the development of close and peripheral relationships.
                                </p>
                                
                                <div class="success-rate-cta">
                                    <a href="#" class="success-rate-link">
                                        <span class="rate-text">92% Success Rate</span>
                                        <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                                            <path d="M15.5303 6.53033C15.8232 6.23744 15.8232 5.76256 15.5303 5.46967L10.7574 0.696699C10.4645 0.403806 9.98959 0.403806 9.6967 0.696699C9.40381 0.989593 9.40381 1.46447 9.6967 1.75736L13.9393 6L9.6967 10.2426C9.40381 10.5355 9.40381 11.0104 9.6967 11.3033C9.98959 11.5962 10.4645 11.5962 10.7574 11.3033L15.5303 6.53033ZM0 6.75H15V5.25H0V6.75Z" fill="currentColor"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    static addEventListeners() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe elements
        const elementsToObserve = document.querySelectorAll(
            '.understand-images, .understand-content, .image-item'
        );

        elementsToObserve.forEach(el => {
            if (el) observer.observe(el);
        });

        // Success rate link analytics (optional)
        const successRateLink = document.querySelector('.success-rate-link');
        if (successRateLink) {
            successRateLink.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Success rate link clicked');
            });
        }
    }
}
