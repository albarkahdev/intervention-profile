// app.js
class App {
    constructor() {
        this.init();
    }

    init() {
        this.renderComponents();
    }

    renderComponents() {
        // Render static components
        document.getElementById('heroSection').innerHTML = Hero.render();
        Hero.addEventListeners();
        document.getElementById('header').innerHTML = Header.render();
        Header.addEventListeners();
        document.getElementById('understandSection').innerHTML = Understand.render();
        Understand.addEventListeners();
        document.getElementById('testimonialSection').innerHTML = Testimonial.render();
        Testimonial.addEventListeners();
        document.getElementById('organizeSection').innerHTML = Organize.render();
        document.getElementById('videoSection').innerHTML = VideoSection.render();
        VideoSection.addEventListeners();
        document.getElementById('footer').innerHTML = Footer.render();
        
        // Add event listeners
        this.addEventListeners();
    }

    addEventListeners() {
        // Global event listeners
        document.addEventListener('click', (e) => {
            if (e.target.matches('[data-route]')) {
                e.preventDefault();
                router.navigate(e.target.getAttribute('data-route'));
            }
        });
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new App();
});
