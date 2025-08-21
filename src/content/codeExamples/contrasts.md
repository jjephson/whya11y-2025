---
title: "Color Contrast"
description: "How to ensure sufficient color contrast for text readability and accessibility."
date: "2024-06-20"
headerImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
tags: ["contrast", "color", "accessibility", "visual", "readability", "wcag"]
wcagCriteria:
  - code: "1.4.3"
    title: "Contrast (Minimum)"
    url: "https://www.w3.org/WAI/WCAG21/quickref/#contrast-minimum"
  - code: "1.4.6"
    title: "Contrast (Enhanced)"
    url: "https://www.w3.org/WAI/WCAG21/quickref/#contrast-enhanced"
bestPractices:
  - "Ensure 4.5:1 contrast ratio for normal text"
  - "Use 3:1 ratio for large text (18pt+)"
  - "Test contrast with color contrast tools"
  - "Consider users with color vision deficiencies"
whoBenefits:
  - "Users with visual impairments"
  - "Users with color blindness"
  - "Users in bright sunlight"
  - "Older users with reduced vision"
relatedResources:
  - title: "WebAIM - Contrast and Color"
    url: "https://webaim.org/articles/contrast/"
  - title: "Color Contrast Checker"
    url: "https://webaim.org/resources/contrastchecker/"
testingTools:
  - title: "WebAIM Contrast Checker"
    url: "https://webaim.org/resources/contrastchecker/"
  - title: "Stark Contrast Checker"
    url: "https://www.getstark.co/contrast-checker/"
---

Color contrast is crucial for text readability and accessibility. This guide covers how to implement proper contrast ratios that meet WCAG guidelines.

## Why Color Contrast Matters

Poor color contrast makes text difficult to read for users with visual impairments, color blindness, or those viewing content in bright light.

## WCAG Contrast Requirements

### Normal Text (4.5:1 ratio)
- Body text, paragraphs, lists
- Form labels and instructions
- Navigation text

### Large Text (3:1 ratio)
- Headings (18pt or 14pt bold)
- Large buttons and links
- Important call-to-action text

## CSS Implementation

### Using CSS Custom Properties

```css
:root {
  /* High contrast colors */
  --text-primary: #1a1a1a;
  --text-secondary: #4a4a4a;
  --bg-primary: #ffffff;
  --bg-secondary: #f5f5f5;
  
  /* Accent colors with good contrast */
  --accent-primary: #0066cc;
  --accent-secondary: #dc3545;
}

body {
  color: var(--text-primary);
  background: var(--bg-primary);
}

.text-secondary {
  color: var(--text-secondary);
}
```

### Dark Mode Considerations

```css
[data-theme="dark"] {
  --text-primary: #ffffff;
  --text-secondary: #cccccc;
  --bg-primary: #1a1a1a;
  --bg-secondary: #2a2a2a;
}
```

## Testing Contrast Ratios

### Using CSS for Testing

```css
/* Example of testing contrast */
.test-contrast {
  /* This should meet 4.5:1 ratio */
  color: #333333;
  background: #ffffff;
}

.test-contrast-large {
  /* This should meet 3:1 ratio */
  color: #666666;
  background: #ffffff;
  font-size: 18px;
  font-weight: bold;
}
```

### JavaScript Contrast Checker

```javascript
function calculateContrastRatio(color1, color2) {
  // Convert hex to RGB
  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };

  // Calculate relative luminance
  const getLuminance = (r, g, b) => {
    const [rs, gs, bs] = [r, g, b].map(c => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  };

  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  
  const lum1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
  const lum2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);
  
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  
  return (brightest + 0.05) / (darkest + 0.05);
}

// Usage
const ratio = calculateContrastRatio('#ffffff', '#333333');
console.log(`Contrast ratio: ${ratio.toFixed(2)}:1`);
```

## Common Contrast Mistakes

### ❌ Bad: Low Contrast Text

```css
/* Too low contrast */
.low-contrast {
  color: #999999;
  background: #ffffff;
  /* Ratio: ~2.5:1 - fails WCAG AA */
}
```

### ✅ Good: High Contrast Text

```css
/* Good contrast */
.high-contrast {
  color: #333333;
  background: #ffffff;
  /* Ratio: ~12:1 - exceeds WCAG AAA */
}
```

## Tools for Testing

### Automated Testing

```javascript
// Using axe-core for automated testing
axe.run((err, results) => {
  if (err) throw err;
  
  const contrastViolations = results.violations.filter(
    violation => violation.id === 'color-contrast'
  );
  
  console.log('Contrast violations:', contrastViolations);
});
```

### Manual Testing Checklist

1. **Test with color contrast tools**
2. **View in different lighting conditions**
3. **Test with color blindness simulators**
4. **Check on different devices and screens**
5. **Verify with real users when possible**

## Best Practices

- **Always test contrast ratios** before deploying
- **Use high contrast by default** - don't rely on user preferences
- **Consider color blindness** - don't rely solely on color to convey information
- **Test with real users** when possible
- **Provide alternative high contrast themes**

Remember: Good color contrast benefits all users, not just those with visual impairments!
