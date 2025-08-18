---
title: "Focus Indicators Best Practices"
description: "Learn how to create clear, visible focus indicators that help keyboard users navigate your website effectively."
date: "2024-12-19"
headerImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
wcagCriteria:
  - code: "2.4.7"
    title: "Focus Visible"
    url: "https://www.w3.org/WAI/WCAG21/quickref/#focus-visible"
  - code: "2.1.1"
    title: "Keyboard"
    url: "https://www.w3.org/WAI/WCAG21/quickref/#keyboard"
  - code: "1.4.11"
    title: "Non-text Contrast"
    url: "https://www.w3.org/WAI/WCAG21/quickref/#non-text-contrast"
bestPractices:
  - "Always provide visible focus indicators for keyboard navigation"
  - "Use high contrast colors for focus indicators"
  - "Make focus indicators at least 2px thick"
  - "Use outline or box-shadow for focus indicators"
  - "Never remove focus indicators with outline: none"
  - "Test focus indicators with keyboard navigation"
  - "Ensure focus indicators work across all themes"
whoBenefits:
  - "Keyboard-only users who rely on focus indicators"
  - "Users with motor impairments who use keyboard navigation"
  - "Screen reader users who need to know which element has focus"
  - "All users who benefit from clear visual feedback"
relatedResources:
  - title: "WebAIM Focus Indicators"
    url: "https://webaim.org/techniques/focus/"
  - title: "W3C Focus Visible"
    url: "https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html"
  - title: "MDN Focus Management"
    url: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets"
testingTools:
  - title: "axe DevTools"
    url: "https://www.deque.com/axe/browser-extensions/"
  - title: "WAVE Web Accessibility Evaluator"
    url: "https://wave.webaim.org/"
  - title: "Lighthouse Accessibility Audit"
    url: "https://developers.google.com/web/tools/lighthouse"
---

Focus indicators are essential visual cues that show users which element currently has keyboard focus. They're crucial for keyboard navigation and help users understand where they are on a page. Good focus indicators ensure that all users can navigate your website effectively.

## Why Focus Indicators Matter

When users navigate with a keyboard, they need to know which element currently has focus. Without clear focus indicators, users can become lost and frustrated. Good focus indicators ensure that:

- Keyboard users can see which element is active
- Users understand the current navigation state
- Focus is clearly visible in all lighting conditions
- All users benefit from clear visual feedback

## Basic Focus Indicator Implementation

The foundation of accessible focus indicators starts with proper CSS:

```css
/* Basic focus indicator */
*:focus {
  outline: 2px solid #007bff;
  outline-offset: 2px;
}

/* Alternative using box-shadow */
*:focus {
  box-shadow: 0 0 0 2px #007bff;
  outline: none;
}
```

**Key Points:**
- Always provide a visible focus indicator
- Use high contrast colors
- Make indicators at least 2px thick
- Use outline-offset for better visibility

## Focus Indicators for Different Elements

### Buttons

```css
.btn {
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #fff;
  cursor: pointer;
}

.btn:focus {
  outline: 2px solid #007bff;
  outline-offset: 2px;
  border-color: #007bff;
}

.btn:focus:not(:focus-visible) {
  outline: none;
  border-color: #ccc;
}
```

### Links

```css
.link {
  color: #007bff;
  text-decoration: underline;
  text-underline-offset: 0.2em;
}

.link:focus {
  outline: 2px solid #007bff;
  outline-offset: 2px;
  text-decoration-thickness: 2px;
}

.link:focus:not(:focus-visible) {
  outline: none;
  text-decoration-thickness: 1px;
}
```

### Form Inputs

```css
.input {
  padding: 0.5rem;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

.input:focus {
  outline: 2px solid #007bff;
  outline-offset: 2px;
  border-color: #007bff;
}

.input:focus:not(:focus-visible) {
  outline: none;
  border-color: #ccc;
}
```

## Advanced Focus Indicator Patterns

### Custom Focus Indicators

```css
/* Custom focus indicator with multiple styles */
.custom-focus:focus {
  outline: 2px solid #007bff;
  outline-offset: 2px;
  box-shadow: 0 0 0 4px rgba(0, 123, 255, 0.2);
  border-color: #007bff;
  transform: scale(1.02);
  transition: all 0.2s ease;
}

/* High contrast focus indicator */
.high-contrast-focus:focus {
  outline: 3px solid #000000;
  outline-offset: 2px;
  box-shadow: 0 0 0 6px #ffffff;
}
```

### Focus Indicators for Different States

```css
/* Default focus */
.btn:focus {
  outline: 2px solid #007bff;
  outline-offset: 2px;
}

/* Hover state */
.btn:hover {
  background-color: #f8f9fa;
}

/* Active state */
.btn:active {
  transform: translateY(1px);
}

/* Focus and hover together */
.btn:focus:hover {
  outline: 2px solid #0056b3;
  background-color: #e9ecef;
}
```

### Focus Indicators for Custom Components

```css
/* Custom checkbox focus */
.custom-checkbox:focus {
  outline: 2px solid #007bff;
  outline-offset: 2px;
  border-radius: 2px;
}

/* Custom radio button focus */
.custom-radio:focus {
  outline: 2px solid #007bff;
  outline-offset: 2px;
  border-radius: 50%;
}

/* Custom select focus */
.custom-select:focus {
  outline: 2px solid #007bff;
  outline-offset: 2px;
  border-color: #007bff;
}
```

## CSS Variables for Consistent Focus

```css
:root {
  --focus-color: #007bff;
  --focus-color-hover: #0056b3;
  --focus-outline-width: 2px;
  --focus-outline-offset: 2px;
  --focus-box-shadow: 0 0 0 4px rgba(0, 123, 255, 0.2);
}

[data-theme="dark"] {
  --focus-color: #4dabf7;
  --focus-color-hover: #74c0fc;
  --focus-box-shadow: 0 0 0 4px rgba(77, 171, 247, 0.3);
}

/* Global focus styles */
*:focus {
  outline: var(--focus-outline-width) solid var(--focus-color);
  outline-offset: var(--focus-outline-offset);
}

*:focus:not(:focus-visible) {
  outline: none;
}
```

## Focus Management with JavaScript

### Programmatic Focus

```javascript
// Focus management for modals
function openModal() {
  const modal = document.getElementById('modal');
  const closeButton = modal.querySelector('.close-button');
  
  modal.style.display = 'block';
  closeButton.focus(); // Focus the close button
  
  // Trap focus within modal
  const focusableElements = modal.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];
  
  // Handle tab key
  modal.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }
  });
}

// Restore focus when modal closes
function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
  
  // Restore focus to the element that opened the modal
  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}
```

### Focus Tracking

```javascript
// Track the last focused element
let lastFocusedElement = null;

document.addEventListener('focusin', function(e) {
  lastFocusedElement = e.target;
});

// Focus indicator for dynamic content
function addFocusIndicator(element) {
  element.addEventListener('focus', function() {
    this.classList.add('has-focus');
  });
  
  element.addEventListener('blur', function() {
    this.classList.remove('has-focus');
  });
}
```

## Common Focus Indicator Mistakes

### ❌ Bad: Removing focus indicators

```css
/* Never do this! */
*:focus {
  outline: none;
}
```

**Problems:**
- Keyboard users can't see which element has focus
- Violates WCAG 2.4.7 (Focus Visible)

### ❌ Bad: Low contrast focus indicators

```css
.focus-bad:focus {
  outline: 1px solid #ccc;
  /* Contrast ratio: 1.6:1 - Very poor */
}
```

**Problems:**
- Focus indicator is barely visible
- Users can't see focus in bright lighting

### ❌ Bad: Focus indicators that disappear

```css
.focus-disappears:focus {
  outline: 2px solid #007bff;
}

.focus-disappears:focus:hover {
  outline: none; /* Focus disappears on hover */
}
```

**Problems:**
- Focus indicator disappears when user hovers
- Confusing for keyboard users

### ❌ Bad: Inconsistent focus indicators

```css
.button:focus {
  outline: 2px solid #007bff;
}

.link:focus {
  background-color: yellow; /* Different style */
}

.input:focus {
  border-color: red; /* Another different style */
}
```

**Problems:**
- Users don't know what focus looks like
- Inconsistent user experience

## Testing Focus Indicators

### Manual Testing

1. **Keyboard Navigation**: Tab through all interactive elements
2. **Focus Visibility**: Ensure focus is clearly visible
3. **Focus Order**: Verify logical tab order
4. **Focus Persistence**: Check that focus doesn't disappear unexpectedly

### Automated Testing

```javascript
// Test focus indicators programmatically
function testFocusIndicators() {
  const focusableElements = document.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  focusableElements.forEach(element => {
    element.focus();
    
    // Check if element has visible focus indicator
    const computedStyle = window.getComputedStyle(element);
    const hasOutline = computedStyle.outline !== 'none';
    const hasBoxShadow = computedStyle.boxShadow !== 'none';
    const hasBorder = computedStyle.borderColor !== 'initial';
    
    if (!hasOutline && !hasBoxShadow && !hasBorder) {
      console.warn('Element lacks visible focus indicator:', element);
    }
    
    element.blur();
  });
}
```

## Focus Indicator Guidelines

### Use High Contrast Colors
```css
/* Good: High contrast focus indicator */
.focus-good:focus {
  outline: 2px solid #007bff;
  outline-offset: 2px;
  /* Contrast ratio: 7:1 - AAA compliant */
}

/* Bad: Low contrast focus indicator */
.focus-bad:focus {
  outline: 1px solid #ccc;
  /* Contrast ratio: 1.6:1 - Very poor */
}
```

### Make Indicators Thick Enough
```css
/* Good: Thick enough to be visible */
.focus-good:focus {
  outline: 2px solid #007bff;
  outline-offset: 2px;
}

/* Bad: Too thin to be visible */
.focus-bad:focus {
  outline: 1px solid #007bff;
  outline-offset: 1px;
}
```

### Use Consistent Styles
```css
/* Good: Consistent focus indicators */
*:focus {
  outline: 2px solid #007bff;
  outline-offset: 2px;
}

/* Bad: Inconsistent focus indicators */
.button:focus { outline: 2px solid #007bff; }
.link:focus { background: yellow; }
.input:focus { border-color: red; }
```

## Advanced Focus Patterns

### Focus Indicators for High Contrast Mode

```css
@media (prefers-contrast: high) {
  *:focus {
    outline: 3px solid;
    outline-offset: 2px;
  }
  
  button:focus,
  input:focus,
  select:focus,
  textarea:focus {
    outline: 3px solid;
    outline-offset: 2px;
  }
}
```

### Focus Indicators for Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *:focus {
    transition: none;
    animation: none;
  }
}
```

### Custom Focus Indicators for Complex Components

```css
/* Custom focus for card components */
.card:focus-within {
  outline: 2px solid #007bff;
  outline-offset: 2px;
  box-shadow: 0 4px 8px rgba(0, 123, 255, 0.2);
}

/* Custom focus for navigation menus */
.nav-menu:focus-within {
  outline: 2px solid #007bff;
  outline-offset: 2px;
  background-color: rgba(0, 123, 255, 0.1);
}
```

Remember: Focus indicators are essential for keyboard accessibility. Always provide clear, visible focus indicators and test them thoroughly with keyboard navigation.
