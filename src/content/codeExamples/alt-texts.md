---
title: "Alternative Text for Images"
description: "How to write effective alt text that makes images accessible to screen reader users."
date: "2024-06-20"
headerImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
tags: ["alt-text", "images", "screen-readers", "accessibility", "content", "descriptions"]
wcagCriteria:
  - code: "1.1.1"
    title: "Non-text Content"
    url: "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
bestPractices:
  - "Be descriptive but concise"
  - "Convey the image's purpose and meaning"
  - "Use empty alt for decorative images"
  - "Include text alternatives for complex images"
whoBenefits:
  - "Screen reader users"
  - "Users with visual impairments"
  - "Users on slow connections"
  - "All users when images fail to load"
relatedResources:
  - title: "WebAIM - Alternative Text"
    url: "https://webaim.org/techniques/alttext/"
  - title: "Alt Text Decision Tree"
    url: "https://www.w3.org/WAI/tutorials/images/decision-tree/"
testingTools:
  - title: "WAVE Web Accessibility Evaluator"
    url: "https://wave.webaim.org/"
  - title: "axe DevTools"
    url: "https://www.deque.com/axe/browser-extensions/"
---

Alternative text (alt text) is essential for making images accessible to screen reader users. Good alt text conveys the meaning and purpose of images in a concise, descriptive way.

## Basic Alt Text

For simple images, provide clear, descriptive alt text:

```html
<img src="cat.jpg" alt="A fluffy orange cat sitting on a windowsill" />
```

**Why this works:**
- Describes what's in the image
- Conveys the image's purpose
- Is concise but informative

## Decorative Images

For purely decorative images, use empty alt text:

```html
<img src="decorative-border.png" alt="" />
```

**When to use empty alt:**
- Purely decorative elements
- Images that don't add meaning
- Spacer images
- Background decorative elements

## Functional Images

For images that serve a function (like buttons or links):

```html
<a href="/search">
  <img src="search-icon.png" alt="Search" />
</a>

<button>
  <img src="close-icon.png" alt="Close dialog" />
</button>
```

## Complex Images

For charts, graphs, or complex images, provide detailed descriptions:

```html
<img src="sales-chart.png" alt="Bar chart showing quarterly sales: Q1 $50K, Q2 $65K, Q3 $80K, Q4 $95K. Overall trend shows consistent growth." />
```

## Images with Captions

When images have captions, the alt text should complement, not duplicate:

```html
<figure>
  <img src="mountain.jpg" alt="Snow-capped mountain peak at sunset" />
  <figcaption>Mount Everest at golden hour</figcaption>
</figure>
```

## CSS Background Images

For CSS background images, ensure the content is accessible through other means:

```html
<div class="hero-section" role="img" aria-label="Mountain landscape at sunset">
  <h1>Adventure Awaits</h1>
  <p>Explore the great outdoors</p>
</div>
```

## SVG Images

For SVG images, provide proper accessibility:

```html
<svg role="img" aria-label="Company logo">
  <title>Company Name</title>
  <!-- SVG content -->
</svg>
```

Remember: Good alt text is descriptive, concise, and considers the image's purpose in the context of the page.
