---
title: "Accessible Buttons"
description: "How to create buttons that work for everyone, including keyboard and screen reader users."
date: "2024-06-20"
headerImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80"
tags: ["buttons", "keyboard", "aria", "accessibility", "interactive", "focus"]
wcagCriteria:
  - code: "2.1.1"
    title: "Keyboard"
    url: "https://www.w3.org/WAI/WCAG21/quickref/#keyboard"
  - code: "2.4.7"
    title: "Focus Visible"
    url: "https://www.w3.org/WAI/WCAG21/quickref/#focus-visible"
bestPractices:
  - "Use semantic button elements"
  - "Provide clear, descriptive accessible names"
  - "Ensure sufficient color contrast"
  - "Make buttons large enough to click/tap"
whoBenefits:
  - "Keyboard-only users"
  - "Screen reader users"
  - "Users with motor impairments"
  - "Users with visual impairments"
relatedResources:
  - title: "ARIA Button Pattern"
    url: "https://www.w3.org/WAI/ARIA/apg/patterns/button/"
  - title: "WebAIM - Buttons"
    url: "https://webaim.org/techniques/forms/controls#button"
testingTools:
  - title: "axe-core"
    url: "https://github.com/dequelabs/axe-core"
  - title: "Lighthouse"
    url: "https://developers.google.com/web/tools/lighthouse"
---

Buttons are one of the most common interactive elements on the web. Making them accessible ensures that all users can interact with your interface effectively.

## Basic Accessible Button

The simplest way to create an accessible button is to use the semantic `<button>` element:

```html
<button type="button" class="btn btn-primary">
  Submit Form
</button>
```

**Why this works:**
- Semantic HTML provides built-in accessibility
- Keyboard accessible by default
- Screen readers announce it as a button
- Focusable and clickable

## Button with Icon

When adding icons to buttons, ensure the icon doesn't interfere with accessibility:

```html
<button type="button" class="btn btn-icon" aria-label="Close dialog">
  <svg aria-hidden="true" focusable="false" width="16" height="16">
    <path d="M4 4l8 8m0-8l-8 8"/>
  </svg>
</button>
```

**Key accessibility features:**
- `aria-label` provides the button's purpose to screen readers
- `aria-hidden="true"` hides the icon from screen readers
- `focusable="false"` prevents the SVG from receiving focus

## Submit and Reset Buttons

For form buttons, use appropriate types:

```html
<button type="submit" class="btn btn-primary">
  Save Changes
</button>

<button type="reset" class="btn btn-secondary">
  Reset Form
</button>
```

## Loading State Button

For buttons that trigger loading states:

```html
<button type="button" class="btn" aria-busy="true" aria-live="polite">
  <span class="spinner" aria-hidden="true"></span>
  Processing...
</button>
```

## CSS for Accessible Buttons

Proper styling ensures buttons are visually accessible:

```css
.btn {
  padding: 0.5rem 1rem;
  border: 2px solid transparent;
  border-radius: 0.25rem;
  font-size: 1rem;
  cursor: pointer;
  min-height: 44px; /* WCAG touch target size */
  transition: all 0.2s ease;
}

.btn:focus {
  outline: 2px solid #0062FF;
  outline-offset: 2px;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Loading state */
.btn[aria-busy="true"] {
  position: relative;
  color: transparent;
}

.btn[aria-busy="true"]::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 16px;
  height: 16px;
  margin: -8px 0 0 -8px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```

## Common Button Patterns

### Toggle Button

```html
<button type="button" aria-pressed="false" aria-label="Toggle notifications">
  <svg aria-hidden="true">
    <!-- bell icon -->
  </svg>
</button>
```

### Menu Button

```html
<button type="button" aria-expanded="false" aria-haspopup="true" aria-label="Open menu">
  Menu
  <svg aria-hidden="true">
    <!-- dropdown arrow -->
  </svg>
</button>
```

Remember: The key to accessible buttons is using semantic HTML, providing clear accessible names, ensuring keyboard accessibility, and maintaining sufficient visual contrast. 