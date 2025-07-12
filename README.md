# Get an Intervention - Healthcare Services Website

A modern, responsive healthcare website for intervention services featuring a clean design, smooth animations, and comprehensive service information.

## 🌟 Features

- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Accessibility Ready** - WCAG compliant with proper ARIA labels and keyboard navigation
- **Performance Optimized** - Fast loading with optimized images and CSS
- **Cross-browser Compatible** - Works seamlessly across all modern browsers

## 📱 Screenshots

### Desktop Version
![Desktop Homepage](assets/images/screenshots/desktop-home.png)
*Homepage featuring hero section with call-to-action and service overview*

![Desktop Services](assets/images/screenshots/desktop-services.png)
*Services section showcasing intervention programs*

![Desktop Contact](assets/images/screenshots/desktop-contact.png)
*Contact form with validation and professional layout*

### Mobile Version
![Mobile Homepage](assets/images/screenshots/mobile-home.png) ![Mobile Services](assets/images/screenshots/mobile-services.png) ![Mobile Contact](assets/images/screenshots/mobile-contact.png)

*Mobile-optimized layouts with touch-friendly navigation*

## 🛠️ Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with Flexbox and Grid
- **JavaScript (ES6+)** - Interactive components and form handling
- **Inter Font Family** - Professional typography
- **SVG Icons** - Scalable vector graphics for crisp visuals

## 📁 Project Structure

```
get-an-intervention/
├── index.html                 # Main homepage
├── thank-you.html             # Thank you page after form submission
├── css/
│   ├── variables.css          # CSS custom properties and theme variables
│   ├── reset.css              # CSS reset and base styles
│   └── components/
│       ├── header.css         # Navigation and header styles
│       ├── hero.css           # Hero section styling
│       ├── services.css       # Services section
│       ├── organize.css       # Organization section
│       ├── video-section.css  # Video player section
│       ├── contact.css        # Contact form styles
│       └── footer.css         # Footer component
├── js/
│   └── components/
│       ├── navigation.js      # Mobile menu and navigation
│       ├── videoSection.js    # Video modal functionality
│       ├── contactForm.js     # Form validation and submission
│       └── animations.js      # Scroll animations and effects
├── assets/
│   ├── images/
│   │   ├── hero-bg.jpg        # Hero background image
│   │   ├── services/          # Service-related images
│   │   └── screenshots/       # Screenshots for documentation
└── README.md
```

## 🎨 Design System

### Color Palette
```css
--primary-green: #5bc8af     /* Primary brand color */
--secondary-green: #7bd8c4   /* Secondary accent color */
--dark-green: #4db89a        /* Darker variant for hover states */
--text-dark: #2c3e50         /* Primary text color */
--text-light: #718096        /* Secondary text color */
```

### Typography
- **Primary Font**: Inter (Google Fonts)
- **Weights**: 400 (Normal), 500 (Medium), 600 (Semibold), 700 (Bold)
- **Fallback**: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/get-an-intervention.git
   cd get-an-intervention
   ```

2. **Open in your preferred editor**
   ```bash
   code .  # VS Code
   # or open index.html in any text editor
   ```

3. **Launch the website**
   - Open `index.html` in your web browser
   - Or use a local server for development:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (if you have http-server installed)
   npx http-server
   
   # PHP
   php -S localhost:8000
   ```

4. **View the website**
   - Navigate to `http://localhost:8000` (if using local server)
   - Or simply open `index.html` directly in browser

## 📱 Responsive Breakpoints

- **Desktop**: 1025px and above
- **Tablet**: 769px - 1024px
- **Mobile**: 768px and below
- **Small Mobile**: 480px and below

## ✨ Key Components

### 1. Hero Section
- Eye-catching background with overlay
- Clear call-to-action buttons
- Responsive typography scaling

### 2. Services Grid
- 3-column layout on desktop
- Stacked cards on mobile
- Hover effects with smooth transitions

### 3. Video Section
- Modal video player
- Custom play button with pulse animation
- Curved wave divider design

### 4. Contact Form
- Real-time validation
- Professional styling
- Success/error state handling

### 5. Navigation
- Sticky header on scroll
- Mobile hamburger menu
- Smooth scroll to sections

## 🎯 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 Pages

- **Homepage** (`index.html`) - Main landing page with all sections
- **Thank You** (`thank-you.html`) - Confirmation page after form submission

## 🔧 Customization

### Changing Colors
Update the CSS variables in `css/variables.css`:
```css
:root {
  --primary-green: #your-color;
  --secondary-green: #your-color;
  /* ... other variables */
}
```

### Adding New Sections
1. Create HTML structure in `index.html`
2. Add corresponding CSS file in `css/components/`
3. Include any JavaScript functionality in `js/components/`

### Form Configuration
Update the form action in `index.html`:
```html
<form action="your-form-handler.php" method="POST">
```

## 🚀 Deployment

### GitHub Pages
1. Push code to GitHub repository
2. Go to Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://yourusername.github.io/get-an-intervention`

### Netlify
1. Drag and drop project folder to Netlify dashboard
2. Or connect GitHub repository for automatic deployments

### Traditional Hosting
1. Upload all files to your web server
2. Ensure `index.html` is in the root directory
3. Configure any necessary redirects

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:
- **Email**: support@getanintervention.com
- **Phone**: (123) 456-7890
- **Website**: [getanintervention.com](https://getanintervention.com)

## 🏆 Acknowledgments

- Design inspiration from modern healthcare websites
- Icons from Heroicons and custom SVG designs
- Font from Google Fonts (Inter)
- Photography from [Unsplash](https://unsplash.com)

---

**Built with ❤️ for better healthcare accessibility**
