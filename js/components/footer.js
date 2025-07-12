class Footer {
    static render() {
        return `
            <div class="footer-container">
                <div class="footer-content">
                    <div class="footer-copyright">
                        <p>&copy;2021 Get an Intervention Inc. All rights reserved.</p>
                    </div>
                    <div class="footer-nav">
                        <nav class="footer-nav-links" role="navigation" aria-label="Footer navigation">
                            <a href="/privacy-policy" class="footer-link">Privacy Policy</a>
                            <span class="footer-separator">|</span>
                            <a href="/terms-of-use" class="footer-link">Terms of use</a>
                            <span class="footer-separator">|</span>
                            <a href="/site-map" class="footer-link">Site Map</a>
                        </nav>
                    </div>
                </div>
            </div>

        `;
    }

    static addEventListeners() {}
}
