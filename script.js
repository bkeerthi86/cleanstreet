// CleanStreet Login Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Form elements
    const loginForm = document.querySelector('.form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const rememberCheckbox = document.getElementById('remember');
    const loginButton = document.querySelector('.login-button');
    
    // Navigation elements
    const navLinks = document.querySelectorAll('.nav-link');
    const navLogin = document.querySelector('.nav-login');
    const navRegister = document.querySelector('.nav-register');
    const registerText = document.querySelector('.register-text');
    const forgotPassword = document.querySelector('.forgot-password');
    
    // Form validation
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function validatePassword(password) {
        return password.length >= 6;
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
    emailInput.addEventListener('blur', function() {
        if (this.value && !validateEmail(this.value)) {
            showError(this, 'Please enter a valid email address');
        } else {
            clearError(this);
        }
    });
    
    passwordInput.addEventListener('blur', function() {
        if (this.value && !validatePassword(this.value)) {
            showError(this, 'Password must be at least 6 characters long');
        } else {
            clearError(this);
        }
    });
    
    // Form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        
        // Clear previous errors
        clearError(emailInput);
        clearError(passwordInput);
        
        // Validate email
        if (!emailInput.value) {
            showError(emailInput, 'Email is required');
            isValid = false;
        } else if (!validateEmail(emailInput.value)) {
            showError(emailInput, 'Please enter a valid email address');
            isValid = false;
        }
        
        // Validate password
        if (!passwordInput.value) {
            showError(passwordInput, 'Password is required');
            isValid = false;
        } else if (!validatePassword(passwordInput.value)) {
            showError(passwordInput, 'Password must be at least 6 characters long');
            isValid = false;
        }
        
        if (isValid) {
            // Show loading state
            loginButton.textContent = 'Logging in...';
            loginButton.disabled = true;
            
            // Simulate login process
            setTimeout(() => {
                alert('Login successful! Welcome to CleanStreet.');
                loginButton.textContent = 'Login';
                loginButton.disabled = false;
                
                // Clear form
                loginForm.reset();
                
                // In a real application, you would redirect to dashboard
                // window.location.href = 'dashboard.html';
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
        // Scroll to login form
        document.querySelector('.login-container').scrollIntoView({
            behavior: 'smooth'
        });
    });
    
    // Register button in nav
    navRegister.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Registration feature coming soon!');
    });
    
    // Register link in form
    registerText.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Registration feature coming soon!');
    });
    
    // Forgot password link
    forgotPassword.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Password reset feature coming soon!');
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
    
    console.log('CleanStreet Login Page initialized successfully!');
});

