---
title: "Accessible Menus"
description: "How to create navigation menus that work for everyone."
date: "2024-06-22"
headerImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80"
tags: ["menus", "navigation", "keyboard", "aria", "dropdown", "accessibility"]
wcagCriteria:
  - code: "2.1.1"
    title: "Keyboard"
    url: "https://www.w3.org/WAI/WCAG21/quickref/#keyboard"
  - code: "2.4.1"
    title: "Bypass Blocks"
    url: "https://www.w3.org/WAI/WCAG21/quickref/#bypass-blocks"
keyTakeaways:
  - "All menu items must be keyboard accessible"
  - "Use proper ARIA attributes for complex menus"
  - "Provide clear focus indicators"
whoBenefits:
  - "Keyboard-only users"
  - "Screen reader users"
  - "Users with motor impairments"
relatedResources:
  - title: "ARIA Menu Pattern"
    url: "https://www.w3.org/WAI/ARIA/apg/patterns/menu/"
  - title: "Accessible Navigation"
    url: "https://webaim.org/techniques/keyboard/"
furtherReading:
  - title: "Dropdown Menu Accessibility"
    url: "https://www.a11yproject.com/posts/2020-01-22-dropdown-menus/"
  - title: "Keyboard Navigation"
    url: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets"
---

![Accessible menu example](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80)

Navigation menus are a critical part of web accessibility. This article covers how to create menus that work for all users, regardless of how they interact with your site.

## Why Menu Accessibility Matters

Menus are often the primary way users navigate websites. If they're not accessible, users can't effectively use your site.

## Key Accessibility Requirements

### 1. Keyboard Navigation

All menu items must be accessible via keyboard:
- Tab navigation between menu items
- Arrow keys for dropdown menus
- Enter/Space to activate items
- Escape to close dropdowns

### 2. ARIA Attributes

Use appropriate ARIA attributes for complex menus:

```html
<nav aria-label="Main navigation">
  <ul role="menubar">
    <li role="none">
      <a role="menuitem" aria-haspopup="true" aria-expanded="false">
        Products
      </a>
      <ul role="menu">
        <li role="none">
          <a role="menuitem">Software</a>
        </li>
      </ul>
    </li>
  </ul>
</nav>
```

### 3. Focus Management

Ensure clear focus indicators and logical focus order.

## Best Practices

- Test with keyboard-only navigation
- Use semantic HTML elements
- Provide skip links for long menus
- Ensure sufficient color contrast 