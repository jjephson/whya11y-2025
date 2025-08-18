---
title: "Alt Text Best Practices"
description: "Learn how to write effective alt text that makes images accessible to screen reader users."
date: "2024-12-19"
headerImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
wcagCriteria:
  - code: "1.1.1"
    title: "Non-text Content"
    url: "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
  - code: "1.4.5"
    title: "Images of Text"
    url: "https://www.w3.org/WAI/WCAG21/quickref/#images-of-text"
bestPractices:
  - "Write descriptive alt text that conveys the image's purpose"
  - "Use empty alt text for decorative images"
  - "Keep alt text concise but informative"
  - "Avoid starting with 'Image of' or 'Picture of'"
  - "Consider the context when writing alt text"
  - "Test alt text with screen readers"
  - "Use appropriate alt text length for different image types"
whoBenefits:
  - "Screen reader users who rely on alt text to understand images"
  - "Users with visual impairments who cannot see images"
  - "Users with slow internet connections where images may not load"
  - "All users when images fail to load"
relatedResources:
  - title: "WebAIM Alt Text Guidelines"
    url: "https://webaim.org/techniques/alttext/"
  - title: "W3C Alt Text Decision Tree"
    url: "https://www.w3.org/WAI/tutorials/images/decision-tree/"
  - title: "MDN Alt Text Guide"
    url: "https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML#text_alternatives"
testingTools:
  - title: "axe DevTools"
    url: "https://www.deque.com/axe/browser-extensions/"
  - title: "WAVE Web Accessibility Evaluator"
    url: "https://wave.webaim.org/"
  - title: "Lighthouse Accessibility Audit"
    url: "https://developers.google.com/web/tools/lighthouse"
---

Alt text (alternative text) is essential for making images accessible to screen reader users and others who cannot see visual content. Well-written alt text provides the same information and experience that sighted users get from images.

## Why Alt Text Matters

Images convey important information on websites - from product photos to charts and diagrams. Without alt text, screen reader users miss this content entirely. Good alt text ensures that:

- Screen readers can describe images to users
- Users understand the image's purpose and content
- The page makes sense when images don't load
- Everyone gets the same information regardless of ability

## Basic Alt Text Implementation

The foundation of image accessibility starts with the `alt` attribute:

```html
<img src="cat.jpg" alt="A fluffy orange cat sitting on a windowsill" />
```

**Key Points:**
- Always include the `alt` attribute
- Write descriptive text that conveys the image's purpose
- Consider what information the image provides

## Decorative Images

For purely decorative images, use empty alt text:

```html
<img src="decorative-border.png" alt="" />
```

**When to use empty alt:**
- Decorative borders, backgrounds, or dividers
- Images that don't add information
- Spacer images (though CSS is preferred)

## Informative Images

For images that convey information, write descriptive alt text:

```html
<!-- Product image -->
<img src="coffee-mug.jpg" alt="Ceramic coffee mug with 'Good Morning' text in white letters" />

<!-- Chart or graph -->
<img src="sales-chart.png" alt="Bar chart showing Q4 sales increased 25% from Q3" />

<!-- Action or link image -->
<img src="download-icon.png" alt="Download PDF report" />
```

## Complex Images

For complex images like charts, diagrams, or infographics, consider using `aria-describedby`:

```html
<img src="complex-chart.png" alt="Sales performance chart" aria-describedby="chart-description" />
<div id="chart-description">
  This chart shows quarterly sales data for 2023. Q1: $50K, Q2: $65K, Q3: $80K, Q4: $95K. 
  Overall trend shows consistent growth throughout the year.
</div>
```

## Images of Text

When images contain text, the alt text should include that text:

```html
<img src="logo.png" alt="Acme Corporation" />
<img src="quote.png" alt="The only way to do great work is to love what you do - Steve Jobs" />
```

## CSS Background Images

For CSS background images, ensure the information is available in the HTML:

```html
<!-- Good: Information in HTML -->
<div class="hero-section" role="img" aria-label="Mountain landscape at sunset">
  <h1>Adventure Awaits</h1>
  <p>Explore the great outdoors</p>
</div>

<!-- CSS -->
.hero-section {
  background-image: url('mountain-sunset.jpg');
  background-size: cover;
  padding: 4rem 2rem;
}
```

## Common Alt Text Mistakes

### ❌ Bad: Missing alt attribute

```html
<img src="product.jpg" />
```

**Problems:**
- Screen readers may read the filename
- Users don't know what the image shows

### ❌ Bad: Generic alt text

```html
<img src="product.jpg" alt="Image" />
<img src="product.jpg" alt="Click here" />
```

**Problems:**
- Doesn't describe the image content
- Doesn't help users understand the purpose

### ❌ Bad: Redundant alt text

```html
<img src="cat.jpg" alt="Image of a cat" />
```

**Problems:**
- Screen readers already announce it's an image
- Wastes time with unnecessary words

### ❌ Bad: Alt text that's too long

```html
<img src="logo.png" alt="This is the official logo of our company which was designed in 2010 by our creative team and features our brand colors of blue and white with our company name written in a modern sans-serif font" />
```

**Problems:**
- Overwhelms users with unnecessary detail
- Takes too long to read

## Alt Text Guidelines by Image Type

### Logos
```html
<img src="logo.png" alt="Company Name" />
```

### Icons
```html
<img src="email-icon.png" alt="Email" />
<img src="phone-icon.png" alt="Phone" />
```

### Photos
```html
<img src="team-photo.jpg" alt="Our development team of 5 people working together" />
```

### Charts and Graphs
```html
<img src="revenue-chart.png" alt="Line chart showing revenue growth from $100K in 2021 to $150K in 2023" />
```

### Buttons and Links
```html
<img src="download-button.png" alt="Download user manual" />
```

## Testing Alt Text

1. **Screen Reader Testing**: Use NVDA, JAWS, or VoiceOver
2. **Image Disabled**: Turn off images in browser to see alt text
3. **Automated Tools**: Use accessibility checkers
4. **User Testing**: Get feedback from screen reader users

## Advanced Patterns

### Image with Caption

```html
<figure>
  <img src="data-visualization.png" alt="Bar chart of monthly website traffic" />
  <figcaption>Website traffic increased 40% after implementing new design</figcaption>
</figure>
```

### Responsive Images

```html
<picture>
  <source media="(min-width: 800px)" srcset="large-chart.png" />
  <source media="(min-width: 400px)" srcset="medium-chart.png" />
  <img src="small-chart.png" alt="Quarterly sales performance chart" />
</picture>
```

### SVG Images

```html
<svg role="img" aria-label="Company logo">
  <title>Company Name</title>
  <!-- SVG content -->
</svg>
```

Remember: Good alt text is descriptive, concise, and considers the image's purpose in context. When in doubt, think about what information a sighted user gets from the image and convey that to screen reader users.
