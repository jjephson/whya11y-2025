---
title: "Accessible Button Implementation"
description: "Learn how to create buttons that work for everyone, including keyboard and screen reader users."
date: "2024-12-19"
headerImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
---

# Accessible Button Implementation

Buttons are one of the most fundamental interactive elements on the web. Here's how to make them accessible to all users.

## Basic Accessible Button

```html
<button type="button" class="btn btn-primary">
  Click me
</button>
```

## Button with Icon

```html
<button type="button" class="btn btn-icon" aria-label="Close dialog">
  <svg aria-hidden="true" focusable="false" width="16" height="16">
    <path d="M4 4l8 8m0-8l-8 8"/>
  </svg>
</button>
```

## Key Accessibility Features

- **Semantic HTML**: Use `<button>` element for actual buttons
- **Type attribute**: Always specify `type="button"` for non-submit buttons
- **Accessible labels**: Use `aria-label` for buttons with only icons
- **Focus management**: Ensure buttons are keyboard accessible
- **Visual feedback**: Provide clear hover and focus states

## CSS for Accessible Buttons

```css
.btn {
  padding: 0.5rem 1rem;
  border: 2px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.2s ease;
}

.btn:focus {
  outline: 2px solid #007bff;
  outline-offset: 2px;
}

.btn:hover {
  background-color: #0056b3;
}
``` 