---
title: "Accessible Modal Dialog"
description: "Create modal dialogs that are fully accessible to keyboard and screen reader users."
date: "2024-12-19"
headerImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80"
---

# Accessible Modal Dialog

Modal dialogs should trap focus, provide clear navigation, and work seamlessly with assistive technologies.

## HTML Structure

```html
<button id="open-modal" aria-haspopup="dialog">Open Modal</button>

<div id="modal" class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-describedby="modal-description" hidden>
  <div class="modal-content">
    <div class="modal-header">
      <h2 id="modal-title">Modal Title</h2>
      <button id="close-modal" class="close-button" aria-label="Close modal">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    
    <div id="modal-description" class="modal-body">
      <p>This is the modal content. It should be descriptive and helpful.</p>
      <button class="btn btn-primary">Action Button</button>
    </div>
  </div>
</div>
```

## JavaScript Implementation

```javascript
class AccessibleModal {
  constructor(modalId, triggerId, closeId) {
    this.modal = document.getElementById(modalId);
    this.trigger = document.getElementById(triggerId);
    this.closeBtn = document.getElementById(closeId);
    this.previousFocus = null;
    
    this.init();
  }
  
  init() {
    this.trigger.addEventListener('click', () => this.open());
    this.closeBtn.addEventListener('click', () => this.close());
    
    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !this.modal.hidden) {
        this.close();
      }
    });
    
    // Trap focus within modal
    this.modal.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        this.trapFocus(e);
      }
    });
  }
  
  open() {
    this.previousFocus = document.activeElement;
    this.modal.hidden = false;
    this.closeBtn.focus();
    
    // Announce to screen readers
    this.announce('Modal opened');
  }
  
  close() {
    this.modal.hidden = true;
    if (this.previousFocus) {
      this.previousFocus.focus();
    }
    
    this.announce('Modal closed');
  }
  
  trapFocus(e) {
    const focusableElements = this.modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
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
  
  announce(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    setTimeout(() => document.body.removeChild(announcement), 1000);
  }
}

// Initialize modal
new AccessibleModal('modal', 'open-modal', 'close-modal');
```

## CSS for Modal

```css
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  border-radius: 8px;
  max-width: 500px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eee;
}

.close-button {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.25rem;
}

.close-button:focus {
  outline: 2px solid #007bff;
  outline-offset: 2px;
}

.modal-body {
  padding: 1rem;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

## Key Accessibility Features

- **Focus management**: Trap focus within modal, restore focus on close
- **ARIA attributes**: Use `role="dialog"`, `aria-modal="true"`, `aria-labelledby`
- **Keyboard support**: Escape to close, Tab to navigate
- **Screen reader announcements**: Announce modal state changes
- **Semantic structure**: Proper heading hierarchy and descriptions 