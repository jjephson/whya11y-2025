---
title: "Color Contrast Best Practices"
description: "Ensure your text and UI elements meet WCAG color contrast requirements for better readability."
date: "2024-12-19"
headerImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1200&q=80"
---



Good color contrast is essential for users with low vision or color blindness. Here's how to implement it properly.

## WCAG Contrast Requirements

- **Normal text**: 4.5:1 contrast ratio (AA)
- **Large text**: 3:1 contrast ratio (AA)
- **Enhanced**: 7:1 for normal text, 4.5:1 for large text (AAA)

## CSS Custom Properties for Consistent Colors

```css
:root {
  /* Primary colors with good contrast */
  --primary-900: #1a365d; /* Dark blue */
  --primary-700: #2d3748; /* Medium blue */
  --primary-500: #4a5568; /* Light blue */
  --primary-300: #718096; /* Lighter blue */
  --primary-100: #e2e8f0; /* Very light blue */
  
  /* Neutral colors */
  --gray-900: #171923;
  --gray-800: #1a202c;
  --gray-700: #2d3748;
  --gray-600: #4a5568;
  --gray-500: #718096;
  --gray-400: #a0aec0;
  --gray-300: #cbd5e0;
  --gray-200: #e2e8f0;
  --gray-100: #f7fafc;
  --white: #ffffff;
  
  /* Semantic colors */
  --success: #38a169;
  --warning: #d69e2e;
  --error: #e53e3e;
  --info: #3182ce;
}
```

## Accessible Text Combinations

```css
/* High contrast text combinations */
.text-primary {
  color: var(--gray-900);
  background-color: var(--white);
}

.text-secondary {
  color: var(--gray-700);
  background-color: var(--gray-100);
}

.text-muted {
  color: var(--gray-600);
  background-color: var(--white);
}

/* Large text can use lower contrast */
.text-large {
  font-size: 1.25rem;
  color: var(--gray-600);
  background-color: var(--white);
}

/* Link styles with proper contrast */
a {
  color: var(--primary-700);
  text-decoration: underline;
}

a:hover,
a:focus {
  color: var(--primary-900);
  text-decoration-thickness: 2px;
}

/* Focus indicators */
button:focus,
input:focus,
a:focus {
  outline: 2px solid var(--primary-700);
  outline-offset: 2px;
}
```

## JavaScript Color Contrast Checker

```javascript
class ColorContrastChecker {
  constructor() {
    this.contrastRatios = {
      AA: { normal: 4.5, large: 3.0 },
      AAA: { normal: 7.0, large: 4.5 }
    };
  }
  
  // Convert hex to RGB
  hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }
  
  // Calculate relative luminance
  getLuminance(r, g, b) {
    const [rs, gs, bs] = [r, g, b].map(c => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  }
  
  // Calculate contrast ratio
  getContrastRatio(color1, color2) {
    const rgb1 = this.hexToRgb(color1);
    const rgb2 = this.hexToRgb(color2);
    
    if (!rgb1 || !rgb2) return 0;
    
    const lum1 = this.getLuminance(rgb1.r, rgb1.g, rgb1.b);
    const lum2 = this.getLuminance(rgb2.r, rgb2.g, rgb2.b);
    
    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);
    
    return (brightest + 0.05) / (darkest + 0.05);
  }
  
  // Check if combination meets WCAG requirements
  meetsWCAG(color1, color2, level = 'AA', size = 'normal') {
    const ratio = this.getContrastRatio(color1, color2);
    const required = this.contrastRatios[level][size];
    
    return {
      ratio: Math.round(ratio * 100) / 100,
      passes: ratio >= required,
      required: required,
      level: level,
      size: size
    };
  }
}

// Usage example
const checker = new ColorContrastChecker();
const result = checker.meetsWCAG('#ffffff', '#000000', 'AA', 'normal');
console.log(result); // { ratio: 21, passes: true, required: 4.5, level: 'AA', size: 'normal' }
```

## CSS for Dark Mode Support

```css
/* Dark mode with proper contrast */
@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: var(--gray-900);
    --bg-secondary: var(--gray-800);
    --text-primary: var(--gray-100);
    --text-secondary: var(--gray-300);
    --text-muted: var(--gray-400);
  }
  
  body {
    background-color: var(--bg-primary);
    color: var(--text-primary);
  }
  
  .card {
    background-color: var(--bg-secondary);
    border: 1px solid var(--gray-700);
  }
  
  /* Ensure links maintain contrast in dark mode */
  a {
    color: var(--primary-300);
  }
  
  a:hover,
  a:focus {
    color: var(--primary-100);
  }
}
```

## Key Accessibility Features

- **WCAG compliance**: Meet AA or AAA contrast requirements
- **Color independence**: Don't rely solely on color to convey information
- **Focus indicators**: High contrast focus states
- **Dark mode support**: Maintain contrast in both light and dark themes
- **Testing tools**: Use automated tools to verify contrast ratios 