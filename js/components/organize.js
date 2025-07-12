class Organize {
    static render() {
        return `
            <div class="organize-container">
                <!-- Title Section -->
                <div class="organize-header">
                    <h2 class="section-title">
                        <span class="title-outline">WE</span> <span>CAN ORGANIZE</span> <span>EVERYTHING</span>
                    </h2>
                    
                    <!-- Intro Text -->
                    <div class="intro-content">
                    
                        <div class="intro-column intro-a">
                            <p class="intro-lead">
                                <span class="highlight">Interventions</span> should focus on older adult's desire for connectedness, participation and independence.
                            </p>
                        </div>

                        
                        <div class="intro-column intro-b">
                            <p class="intro-text">
                                Loneliness and social isolation are growing public health concerns in our aging society. Whilst these experiences occur across the life span, 50% of individuals aged over 60 are at risk of social isolation and one-third will experience some degree of loneliness later in life. It is vital to reduce loneliness and social isolation among older adults.
                            </p>
                        </div>
                        <div class="intro-column intro-c">
                            <p class="intro-text">
                                The methodology framework proposed by Arksey and O'Malley and further developed by Levac, et al. was used to guide the scoping review process. A total of 33 reviews met the inclusion criteria, evaluating a range of interventions targeted at older people residing in the community or institutionalised settings.
                            </p>
                        </div>
                        
                        <div class="intro-columns">
                        </div>
                    </div>
                </div>

                <!-- Services Grid -->
                <div class="services-grid" id="servicesGrid">
                    <!-- Service Card 1 -->
                    <div class="service-card" data-service="needs-assessment">
                        <div class="card-content">
                            <h3 class="card-title">Needs Assessment</h3>
                            <div class="card-info-btn" aria-label="More information">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-width="1.5"/>
                                    <path d="M8 12V8M8 4V4.01" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                                </svg>
                            </div>
                        </div>
                        
                        <!-- Tooltip  -->
                        <div class="service-tooltip">
                            <div class="tooltip-content">
                                <p>We're experienced in our individual crafts and understand how each one of our roles impacts your plan holistically.</p>
                            </div>
                            <div class="tooltip-arrow"></div>
                        </div>
                    </div>

                    <!-- Service Card 2 -->
                    <div class="service-card" data-service="treatment-planning">
                        <div class="card-content">
                            <h3 class="card-title">Treatment Planning & Placement</h3>
                            <button class="card-info-btn" aria-label="More information">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-width="1.5"/>
                                    <path d="M8 12V8M8 4V4.01" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                                </svg>
                            </button>
                        </div>
                        
                        <!-- Tooltip  -->
                        <div class="service-tooltip">
                            <div class="tooltip-content">
                                <p>We're experienced in our individual crafts and understand how each one of our roles impacts your plan holistically.</p>
                            </div>
                            <div class="tooltip-arrow"></div>
                        </div>
                    </div>

                    <!-- Service Card 3 -->
                    <div class="service-card" data-service="transportation">
                        <div class="card-content">
                            <h3 class="card-title">Transportation & Logistics</h3>
                            <button class="card-info-btn" aria-label="More information">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-width="1.5"/>
                                    <path d="M8 12V8M8 4V4.01" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                                </svg>
                            </button>
                        </div>
                        
                        <!-- Tooltip  -->
                        <div class="service-tooltip">
                            <div class="tooltip-content">
                                <p>We're experienced in our individual crafts and understand how each one of our roles impacts your plan holistically.</p>
                            </div>
                            <div class="tooltip-arrow"></div>
                        </div>
                    </div>

                    <!-- Service Card 4 -->
                    <div class="service-card" data-service="insurance-advocacy">
                        <div class="card-content">
                            <h3 class="card-title">Insurance Advocacy</h3>
                            <div class="card-info-btn" aria-label="More information">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-width="1.5"/>
                                    <path d="M8 12V8M8 4V4.01" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                                </svg>
                            </div>
                        </div>
                        
                        <!-- Tooltip  -->
                        <div class="service-tooltip">
                            <div class="tooltip-content">
                                <p>We're experienced in our individual crafts and understand how each one of our roles impacts your plan holistically.</p>
                            </div>
                            <div class="tooltip-arrow"></div>
                        </div>
                    </div>

                    <!-- Service Card 5 -->
                    <div class="service-card" data-service="employment-advocacy">
                        <div class="card-content">
                            <h3 class="card-title">Employment Advocacy</h3>
                            <button class="card-info-btn" aria-label="More information">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-width="1.5"/>
                                    <path d="M8 12V8M8 4V4.01" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                                </svg>
                            </button>
                        </div>
                        
                        <!-- Tooltip  -->
                        <div class="service-tooltip">
                            <div class="tooltip-content">
                                <p>We're experienced in our individual crafts and understand how each one of our roles impacts your plan holistically.</p>
                            </div>
                            <div class="tooltip-arrow"></div>
                        </div>
                    </div>

                    <!-- Service Card 6 -->
                    <div class="service-card" data-service="aftercare-planning">
                        <div class="card-content">
                            <h3 class="card-title">Aftercare Planning</h3>
                            <button class="card-info-btn" aria-label="More information">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-width="1.5"/>
                                    <path d="M8 12V8M8 4V4.01" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                                </svg>
                            </button>
                        </div>
                        
                        <!-- Tooltip  -->
                        <div class="service-tooltip">
                            <div class="tooltip-content">
                                <p>We're experienced in our individual crafts and understand how each one of our roles impacts your plan holistically.</p>
                            </div>
                            <div class="tooltip-arrow"></div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    static addEventListeners() {}
}
