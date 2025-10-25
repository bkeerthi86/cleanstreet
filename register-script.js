// CleanStreet Registration Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Form elements
    const registrationForm = document.querySelector('.form');
    const fullNameInput = document.getElementById('fullname');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const passwordInput = document.getElementById('password');
    const rememberCheckbox = document.getElementById('remember');
    const registerButton = document.querySelector('.register-button');
    
    // Navigation elements
    const navLinks = document.querySelectorAll('.nav-link');
    const navLogin = document.querySelector('.nav-login');
    const navRegister = document.querySelector('.nav-register');
    const loginText = document.querySelector('.login-text');
    
    // Form validation
    function validateFullName(name) {
        return name.trim().length >= 2;
    }
    
    function validateUsername(username) {
        const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
        return usernameRegex.test(username);
    }
    
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function validatePhone(phone) {
        if (!phone) return true; // Optional field
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        return phoneRegex.test(phone.replace(/\s/g, ''));
    }
    
    function validatePassword(password) {
        return password.length >= 8;
    }
    
    function showError(input, message) {
        // Remove existing error
        const existingError = input.parentNode.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        
        // Add error message
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.color = '#FF0000';
        errorDiv.style.fontSize = '14px';
        errorDiv.style.marginTop = '5px';
        errorDiv.textContent = message;
        input.parentNode.appendChild(errorDiv);
        
        // Add error styling to input
        input.style.borderColor = '#FF0000';
    }
    
    function clearError(input) {
        const errorMessage = input.parentNode.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.remove();
        }
        input.style.borderColor = '#D1D1D1';
    }
    
    // Real-time validation
    fullNameInput.addEventListener('blur', function() {
        if (this.value && !validateFullName(this.value)) {
            showError(this, 'Full name must be at least 2 characters long');
        } else {
            clearError(this);
        }
    });
    
    usernameInput.addEventListener('blur', function() {
        if (this.value && !validateUsername(this.value)) {
            showError(this, 'Username must be 3-20 characters, letters, numbers, and underscores only');
        } else {
            clearError(this);
        }
    });
    
    emailInput.addEventListener('blur', function() {
        if (this.value && !validateEmail(this.value)) {
            showError(this, 'Please enter a valid email address');
        } else {
            clearError(this);
        }
    });
    
    phoneInput.addEventListener('blur', function() {
        if (this.value && !validatePhone(this.value)) {
            showError(this, 'Please enter a valid phone number');
        } else {
            clearError(this);
        }
    });
    
    passwordInput.addEventListener('blur', function() {
        if (this.value && !validatePassword(this.value)) {
            showError(this, 'Password must be at least 8 characters long');
        } else {
            clearError(this);
        }
    });
    
    // Form submission
    registrationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        
        // Clear previous errors
        clearError(fullNameInput);
        clearError(usernameInput);
        clearError(emailInput);
        clearError(phoneInput);
        clearError(passwordInput);
        
        // Validate full name
        if (!fullNameInput.value) {
            showError(fullNameInput, 'Full name is required');
            isValid = false;
        } else if (!validateFullName(fullNameInput.value)) {
            showError(fullNameInput, 'Full name must be at least 2 characters long');
            isValid = false;
        }
        
        // Validate username
        if (!usernameInput.value) {
            showError(usernameInput, 'Username is required');
            isValid = false;
        } else if (!validateUsername(usernameInput.value)) {
            showError(usernameInput, 'Username must be 3-20 characters, letters, numbers, and underscores only');
            isValid = false;
        }
        
        // Validate email
        if (!emailInput.value) {
            showError(emailInput, 'Email is required');
            isValid = false;
        } else if (!validateEmail(emailInput.value)) {
            showError(emailInput, 'Please enter a valid email address');
            isValid = false;
        }
        
        // Validate phone (optional)
        if (phoneInput.value && !validatePhone(phoneInput.value)) {
            showError(phoneInput, 'Please enter a valid phone number');
            isValid = false;
        }
        
        // Validate password
        if (!passwordInput.value) {
            showError(passwordInput, 'Password is required');
            isValid = false;
        } else if (!validatePassword(passwordInput.value)) {
            showError(passwordInput, 'Password must be at least 8 characters long');
            isValid = false;
        }
        
        if (isValid) {
            // Show loading state
            registerButton.textContent = 'Registering...';
            registerButton.disabled = true;
            
            // Simulate registration process
            setTimeout(() => {
                alert('Registration successful! Welcome to CleanStreet.');
                registerButton.textContent = 'Register';
                registerButton.disabled = false;
                
                // Clear form
                registrationForm.reset();
                
                // In a real application, you would redirect to login or dashboard
                // window.location.href = 'index.html';
            }, 2000);
        }
    });
    
    // Navigation interactions
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const linkText = this.textContent;
            
            // Add active state
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Show appropriate message
            switch(linkText) {
                case 'Dashboard':
                    alert('Dashboard feature coming soon!');
                    break;
                case 'Report Issue':
                    alert('Report Issue feature coming soon!');
                    break;
                case 'View Complaints':
                    alert('View Complaints feature coming soon!');
                    break;
            }
        });
    });
    
    // Login button in nav
    navLogin.addEventListener('click', function(e) {
        e.preventDefault();
        // Redirect to login page
        window.location.href = 'index.html';
    });
    
    // Register button in nav (current page)
    navRegister.addEventListener('click', function(e) {
        e.preventDefault();
        // Scroll to top of form
        document.querySelector('.registration-form-container').scrollIntoView({
            behavior: 'smooth'
        });
    });
    
    // Login link in form
    loginText.addEventListener('click', function(e) {
        e.preventDefault();
        // Redirect to login page
        window.location.href = 'index.html';
    });
    
    // Remember me functionality
    rememberCheckbox.addEventListener('change', function() {
        if (this.checked) {
            console.log('Remember me checked');
            // In a real application, you would store this preference
        }
    });
    
    // Input focus effects
    const formInputs = document.querySelectorAll('.form-input');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.borderColor = '#4E8DF5';
            this.style.boxShadow = '0 0 0 2px rgba(78, 141, 245, 0.2)';
        });
        
        input.addEventListener('blur', function() {
            if (!this.style.borderColor.includes('FF0000')) {
                this.style.borderColor = '#D1D1D1';
            }
            this.style.boxShadow = 'none';
        });
    });
    
    // Smooth scrolling for better UX
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add loading animation for better UX
    function addLoadingAnimation() {
        const style = document.createElement('style');
        style.textContent = `
            .loading {
                position: relative;
                overflow: hidden;
            }
            
            .loading::after {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
                animation: loading 1.5s infinite;
            }
            
            @keyframes loading {
                0% { left: -100%; }
                100% { left: 100%; }
            }
        `;
        document.head.appendChild(style);
    }
    
    addLoadingAnimation();
    
    // Add active state styles
    const style = document.createElement('style');
    style.textContent = `
        .nav-link.active {
            color: #4E8DF5;
            font-weight: 700;
        }
        
        .error-message {
            animation: fadeIn 0.3s ease-in;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);
    
    console.log('CleanStreet Registration Page initialized successfully!');
});

