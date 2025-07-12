class VideoSection {
    constructor() {
        this.modal = null;
        this.video = null;
        this.playButton = null;
        this.isPlaying = false;
        
        this.init();
    }
    
    static render() {
        return `
            
            <div class="video-container">
                <div class="video-content-section">
                    
                    <div class="content-wrapper">
                        <!-- Title -->
                        
                        <h2 class="video-title">
                            <span class="title-outline">WATCH</span> <span>THE</span> <span>VIDEO</span>
                        </h2>
                        
                        <!-- Service Points -->
                        <div class="service-points">
                            <!-- Needs Assessment -->
                            <div class="service-point">
                                <div class="point-icon">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M16.25 8.125L8.75 15.625L3.75 10.625" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div class="point-content">
                                    <h3 class="point-title">Needs Assessment</h3>
                                    <p class="point-description">
                                        The Advocacy Evaluation Toolkit contains the instruments used to collect data for evaluating the Consumer Voices for Coverage program.
                                    </p>
                                </div>
                            </div>
                            
                            <!-- Insurance Advocacy -->
                            <div class="service-point">
                                <div class="point-icon">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M16.25 8.125L8.75 15.625L3.75 10.625" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div class="point-content">
                                    <h3 class="point-title">Insurance Advocacy</h3>
                                    <p class="point-description">
                                        We are committed to advocating for appropriate coverage and payment policies.
                                    </p>
                                </div>
                            </div>
                            
                            <!-- Treatment Planning & Placement -->
                            <div class="service-point">
                                <div class="point-icon">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M16.25 8.125L8.75 15.625L3.75 10.625" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div class="point-content">
                                    <h3 class="point-title">Treatment Planning & Placement</h3>
                                    <p class="point-description">
                                        Patients can better understand medical procedures, discharge instructions, etc.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
                <!-- Play Button -->
                <button class="video-play-button" id="videoPlayButton" aria-label="Play video">
                    <div class="play-button-ring"></div>
                    <div class="play-button-inner">
                        <svg width="24" height="28" viewBox="0 0 24 28" fill="none">
                            <path d="M22 12.2679C23.3333 13.0377 23.3333 14.9623 22 15.7321L3.5 26.9904C2.16667 27.7602 0.5 26.7979 0.5 25.2583L0.5 2.74167C0.5 1.20207 2.16667 0.239813 3.5 1.00962L22 12.2679Z" fill="white"/>
                        </svg>
                    </div>
                </button>
                
                <!-- Video Player Area -->
                <div class="video-player-area">
                    
                    <div class="video-background">
                        <img src="assets/images/video-background.png" alt="People enjoying outdoor activities" loading="lazy">
                    </div>
                
                    <svg class="wave-divider desktop-wave" viewBox="0 0 100 400" preserveAspectRatio="none">
                        <path d="M0,0 L30,0 Q10,100 30,200 Q70,300 30,400 L0,400 L0,0 Z" fill="currentColor"/>
                        <path d="M10,0 L40,0 Q20,100 40,200 Q80,300 40,400 L10,400 L10,0 Z" fill="currentColor" opacity="0.4"/>
                    </svg>
                    <svg class="wave-divider mobile-wave" viewBox="0 0 400 100" preserveAspectRatio="none">
                        <path d="M0,0 L400,0 Q320,50 240,30 Q160,10 80,50 Q40,70 0,40 Z" fill="currentColor"/>
                    </svg>

                    <!-- Brand Logo -->
                    <div class="video-brand-logo">
                        <img src="assets/images/logo.svg" alt="Get An Intervention">
                    </div>
                </div>
                
                <!-- Video Modal -->
                <div class="video-modal" id="videoModal">
                    <div class="modal-overlay" id="videoModalOverlay"></div>
                    <div class="modal-content">
                        <button class="modal-close" id="videoModalClose" aria-label="Close video">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                            </svg>
                        </button>
                        <div class="video-wrapper" style="border: 3px solid yellow;">
                            <video id="videoPlayer" controls preload="metadata">
                                <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4">
                            </video>
                        </div>

                    </div>
                </div>
            </div>
        `;
    }

    init() {
        this.modal = document.getElementById('videoModal');
        this.video = document.getElementById('videoPlayer');
        this.playButton = document.getElementById('videoPlayButton');
        
        console.log('Video elements found:', {
            modal: !!this.modal,
            video: !!this.video,
            playButton: !!this.playButton
        });
        
        if (!this.modal || !this.video || !this.playButton) {
            console.error('Video section elements not found');
            return;
        }

        this.addEventListeners();
    }

    addEventListeners() {
        // Play button click
        this.playButton.addEventListener('click', (e) => {
            console.log('Play button clicked');
            e.preventDefault();
            this.openVideoModal();
        });

        // Modal close events
        const modalClose = document.getElementById('videoModalClose');
        const modalOverlay = document.getElementById('videoModalOverlay');

        if (modalClose) {
            modalClose.addEventListener('click', () => {
                console.log('Close button clicked');
                this.closeVideoModal();
            });
        }

        if (modalOverlay) {
            modalOverlay.addEventListener('click', () => {
                console.log('Overlay clicked');
                this.closeVideoModal();
            });
        }

        // Keyboard events
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.classList.contains('active')) {
                console.log('Escape key pressed');
                this.closeVideoModal();
            }
        });
    }

    openVideoModal() {
        console.log('Opening video modal');
        
        if (!this.modal || !this.video) {
            console.error('Modal or video not found');
            return;
        }

        // Add active class
        this.modal.classList.add('active');
        console.log('Modal active class added');
        
        // Disable body scrolling
        document.body.style.overflow = 'hidden';
        
        // Check if video sources are available
        this.checkVideoSources();
        
        // Try to load and play video
        setTimeout(() => {
            console.log('Attempting to load video');
            
            // Set video source if not already set
            if (!this.video.src && this.video.children.length === 0) {
                console.log('No video source found, setting test source');
                this.video.src = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
            }
            
            this.video.load();
            this.playVideo();
        }, 300);
    }

    checkVideoSources() {
        console.log('Checking video sources:');
        const sources = this.video.querySelectorAll('source');
        
        if (sources.length === 0 && !this.video.src) {
            console.error('No video sources found!');
            return;
        }
        
        sources.forEach((source, index) => {
            console.log(`Source ${index}:`, source.src, source.type);
        });
        
        if (this.video.src) {
            console.log('Video src:', this.video.src);
        }
    }

    closeVideoModal() {
        console.log('Closing video modal');
        
        if (!this.modal || !this.video) return;

        // Pause video
        this.pauseVideo();
        
        // Reset video
        this.video.currentTime = 0;
        
        // Remove active class
        this.modal.classList.remove('active');
        
        // Re-enable body scrolling
        document.body.style.overflow = '';
    }

    playVideo() {
        console.log('Attempting to play video');
        
        if (!this.video) {
            console.error('Video element not found');
            return;
        }

        // Check if video is ready
        if (this.video.readyState >= 3) {
            console.log('Video ready, playing immediately');
            this.video.play().catch(error => {
                console.error('Video play failed:', error);
                this.handleVideoError();
            });
        } else {
            console.log('Video not ready, waiting for canplay event');
            this.video.addEventListener('canplay', () => {
                console.log('Video can play, starting playback');
                this.video.play().catch(error => {
                    console.error('Video play failed:', error);
                    this.handleVideoError();
                });
            }, { once: true });
        }
    }

    pauseVideo() {
        if (!this.video) return;
        console.log('Pausing video');
        this.video.pause();
    }

    handleVideoError() {
        console.error('Handling video error');
        const error = this.video.error;
        
        if (error) {
            console.error('Video error code:', error.code);
            console.error('Video error message:', error.message);
        }
        
        // Show error message in modal
        this.showErrorMessage();
    }

    showErrorMessage() {
        console.log('Showing error message');
        const videoWrapper = this.modal.querySelector('.video-wrapper');
        
        if (videoWrapper) {
            videoWrapper.innerHTML = `
                <div style="
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    text-align: center;
                    color: white;
                    background: rgba(0,0,0,0.8);
                    padding: 40px;
                    border-radius: 12px;
                    max-width: 80%;
                ">
                    <h3 style="margin: 0 0 16px 0; font-family: var(--font-family);">Video Unavailable</h3>
                    <p style="margin: 0; font-family: var(--font-family); opacity: 0.8;">
                        The video cannot be played at this time.<br>
                        Please check the video files or try again later.
                    </p>
                    <button onclick="this.closest('.video-modal').classList.remove('active'); document.body.style.overflow = '';" 
                            style="
                                margin-top: 24px;
                                padding: 12px 24px;
                                background: var(--primary-green);
                                color: white;
                                border: none;
                                border-radius: 8px;
                                cursor: pointer;
                                font-family: var(--font-family);
                            ">
                        Close
                    </button>
                </div>
            `;
        }
    }

    static addEventListeners() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                console.log('DOM loaded, initializing VideoSection');
                new VideoSection();
            });
        } else {
            console.log('DOM already loaded, initializing VideoSection');
            new VideoSection();
        }
    }

}
