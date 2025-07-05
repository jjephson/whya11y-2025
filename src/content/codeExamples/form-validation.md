---
title: "Accessible Form Validation"
description: "Implement form validation that provides clear feedback to all users, including those using assistive technologies."
date: "2024-12-19"
headerImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80"
---

# Accessible Form Validation

Form validation should provide clear, immediate feedback to all users. Here's how to implement it accessibly.

## HTML Structure with ARIA

```html
<form novalidate>
  <div class="form-group">
    <label for="email">Email address</label>
    <input 
      type="email" 
      id="email" 
      name="email"
      aria-describedby="email-error"
      aria-invalid="false"
      required
    />
    <div id="email-error" class="error-message" role="alert" aria-live="polite"></div>
  </div>
  
  <button type="submit">Submit</button>
</form>
```

## JavaScript Validation

```javascript
const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');

emailInput.addEventListener('blur', validateEmail);
emailInput.addEventListener('input', clearError);

function validateEmail() {
  const email = emailInput.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!email) {
    showError('Email is required');
  } else if (!emailRegex.test(email)) {
    showError('Please enter a valid email address');
  } else {
    clearError();
  }
}

function showError(message) {
  emailError.textContent = message;
  emailInput.setAttribute('aria-invalid', 'true');
  emailInput.classList.add('error');
}

function clearError() {
  emailError.textContent = '';
  emailInput.setAttribute('aria-invalid', 'false');
  emailInput.classList.remove('error');
}
```

## CSS for Error States

```css
.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 0.5rem;
  border: 2px solid #ccc;
  border-radius: 4px;
}

input.error {
  border-color: #dc3545;
}

input:focus {
  outline: 2px solid #007bff;
  outline-offset: 2px;
}

.error-message {
  color: #dc3545;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}
```

## Key Accessibility Features

- **ARIA attributes**: Use `aria-invalid`, `aria-describedby`, and `aria-live`
- **Error association**: Link errors to inputs with `aria-describedby`
- **Live regions**: Use `aria-live="polite"` for error messages
- **Clear labeling**: Ensure all form controls have proper labels
- **Keyboard navigation**: Maintain logical tab order 