# CleanStreet Login Page

A modern, responsive login page for CleanStreet application, built from Figma design specifications.

## Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design matching the Figma specifications
- **Interactive Elements**: Form validation, hover effects, and smooth animations
- **Accessibility**: Proper form labels, keyboard navigation, and screen reader support

## Design Specifications

Based on the Figma design, this page includes:

### Colors
- Primary Blue: `#4E8DF5`
- Background: `#F5F6FA`
- Text: `#000000`
- Border: `#D1D1D1`
- White: `#FFFFFF`

### Typography
- Font Family: Inter
- Font Weights: 100, 200, 400, 700
- Responsive font sizes for different screen sizes

### Layout
- Fixed navigation bar with logo and menu items
- Centered login form with proper spacing
- Responsive grid system

## File Structure

```
clean-street/
├── index.html          # Main HTML structure
├── styles.css          # CSS styling and responsive design
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## Features Implemented

### Navigation Bar
- CleanStreet logo
- Navigation menu (Dashboard, Report Issue, View Complaints)
- Login and Register buttons
- Responsive mobile menu

### Login Form
- Email input with validation
- Password input with validation
- Remember Me checkbox
- Forgot Password link
- Login button with loading state
- Registration link

### Interactive Features
- Real-time form validation
- Smooth hover effects
- Loading animations
- Error message display
- Responsive design for all screen sizes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Getting Started

1. Open `index.html` in your web browser
2. The page will load with all styling and functionality
3. Test the form validation and navigation features

## Customization

### Colors
Edit the CSS variables in `styles.css` to change the color scheme:

```css
:root {
    --primary-blue: #4E8DF5;
    --background: #F5F6FA;
    --text-color: #000000;
    --border-color: #D1D1D1;
}
```

### Fonts
The page uses Google Fonts (Inter). To change fonts, update the font import in `index.html` and the font-family declarations in `styles.css`.

## Future Enhancements

- Backend integration for actual login functionality
- Password strength indicator
- Social login options
- Multi-language support
- Dark mode toggle

## License

This project is created for CleanStreet application development.

