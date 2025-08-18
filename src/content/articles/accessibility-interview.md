---
title: "An Interview with Sarah Chen: Building Accessible Products from Day One"
description: "Sarah Chen, Senior Accessibility Engineer at TechCorp, shares insights on integrating accessibility into product development workflows and creating inclusive digital experiences."
date: "2024-12-19"
headerImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
wcagCriteria:
  - code: "1.3.1"
    title: "Info and Relationships"
    url: "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
  - code: "2.4.6"
    title: "Headings and Labels"
    url: "https://www.w3.org/WAI/WCAG21/quickref/#headings-and-labels"
  - code: "4.1.2"
    title: "Name, Role, Value"
    url: "https://www.w3.org/WAI/WCAG21/quickref/#name-role-value"
keyTakeaways:
  - "Accessibility should be integrated into the design process from the beginning"
  - "User testing with people with disabilities is essential for creating truly accessible products"
  - "Accessibility benefits all users, not just those with disabilities"
  - "Simple changes can make a big difference in accessibility"
  - "Education and awareness are key to building accessible products"
whoBenefits:
  - "Product managers and designers learning about accessibility integration"
  - "Developers looking for practical accessibility implementation tips"
  - "Companies wanting to improve their accessibility practices"
  - "Users with disabilities who will benefit from more accessible products"
relatedResources:
  - title: "WebAIM Accessibility Guidelines"
    url: "https://webaim.org/standards/wcag/"
  - title: "W3C Accessibility Tutorials"
    url: "https://www.w3.org/WAI/tutorials/"
  - title: "Inclusive Design Principles"
    url: "https://www.microsoft.com/design/inclusive/"
furtherReading:
  - title: "Designing for Accessibility"
    url: "https://www.interaction-design.org/literature/topics/accessibility"
  - title: "Accessibility Testing Tools"
    url: "https://www.w3.org/WAI/ER/tools/"
  - title: "User Research with People with Disabilities"
    url: "https://www.nngroup.com/articles/user-research-disabilities/"
---

Sarah Chen is a Senior Accessibility Engineer at TechCorp, where she leads efforts to make digital products accessible to everyone. With over 8 years of experience in accessibility and inclusive design, Sarah has helped numerous companies transform their approach to digital accessibility. In this interview, she shares her insights on building accessible products from day one.

## The Journey into Accessibility

**Q: Sarah, can you tell us how you first became interested in accessibility?**

A: It's funny how life works sometimes. I was working as a frontend developer at a startup, and one day our CEO came to me with a complaint from a customer who was blind. The customer couldn't use our app with their screen reader, and it was a wake-up call for me. I realized that we were excluding an entire group of users simply because we hadn't considered their needs.

That moment changed everything for me. I started learning about accessibility standards, testing with assistive technologies, and advocating for inclusive design within our company. What began as a side project became my passion and eventually my career.

**Q: What was the biggest challenge you faced when first implementing accessibility?**

A: The biggest challenge wasn't technical—it was cultural. Many people saw accessibility as an afterthought, something we'd "add later" if we had time. But accessibility isn't something you can bolt on at the end. It needs to be part of your design and development process from the very beginning.

I had to learn how to communicate the business value of accessibility. It's not just about compliance or doing the right thing—it's about reaching more customers, improving user experience for everyone, and avoiding costly retrofits later.

## Building Accessible Products

**Q: What's your approach to integrating accessibility into the product development process?**

A: I follow what I call the "Accessibility-First" approach. Here's how it works:

1. **Start with inclusive design principles** - Consider diverse user needs from the beginning
2. **Include accessibility in design reviews** - Make it part of every design critique
3. **Write accessible code from day one** - Use semantic HTML, proper ARIA, and keyboard navigation
4. **Test early and often** - Don't wait until the end to test with assistive technologies
5. **Involve users with disabilities** - Their feedback is invaluable

The key is making accessibility a requirement, not an option. When it's built into your process, it becomes second nature.

**Q: Can you share a specific example of how this approach made a difference?**

A: Absolutely! We were redesigning our e-commerce checkout flow, and from the very first wireframes, we considered how someone using a screen reader would navigate through it. We structured the form with proper headings, clear labels, and logical tab order.

When we tested with users who are blind, they could complete the checkout process independently—something that wasn't possible with our old design. But here's the interesting part: we also discovered that our sighted users found the new flow more intuitive and completed purchases faster. Accessibility improvements often benefit everyone.

## Common Accessibility Mistakes

**Q: What are the most common accessibility mistakes you see companies making?**

A: There are several patterns I see repeatedly:

**1. Relying on color alone to convey information**
This is probably the most common mistake. Using red text to indicate errors, for example, doesn't help users who are colorblind. Always provide additional cues like icons or text.

**2. Poor keyboard navigation**
Many interactive elements aren't keyboard accessible. Users should be able to navigate your entire site using only the Tab key, and all interactive elements should have visible focus indicators.

**3. Missing alternative text for images**
Images that convey information need descriptive alt text. Decorative images should have empty alt text. It's simple but often overlooked.

**4. Inadequate heading structure**
Using headings for styling instead of structure creates a confusing experience for screen reader users. Your heading hierarchy should reflect the content structure.

**5. Not testing with real users**
Automated tools are helpful, but they can't catch everything. Testing with people who actually use assistive technologies is essential.

## Tools and Resources

**Q: What tools and resources do you recommend for teams getting started with accessibility?**

A: Here's my recommended toolkit:

**For Testing:**
- **axe DevTools** - Great for automated testing
- **WAVE Web Accessibility Evaluator** - Visual accessibility checker
- **NVDA (Windows) or VoiceOver (Mac)** - Screen readers for testing
- **Keyboard navigation testing** - Try using only Tab, Enter, and Space

**For Learning:**
- **WebAIM's accessibility guidelines** - Comprehensive and practical
- **W3C's WCAG guidelines** - The official standards
- **Microsoft's Inclusive Design Toolkit** - Excellent design resources
- **Deque University** - Great courses on accessibility

**For Development:**
- **Lighthouse accessibility audit** - Built into Chrome DevTools
- **eslint-plugin-jsx-a11y** - For React projects
- **@axe-core/react** - For automated testing in React

## Measuring Success

**Q: How do you measure the success of accessibility initiatives?**

A: We track several metrics:

**Quantitative:**
- Number of accessibility issues found and resolved
- Time to complete tasks for users with disabilities
- Error rates for users with assistive technologies
- Accessibility compliance scores

**Qualitative:**
- User feedback from people with disabilities
- Ease of use reported by accessibility testers
- Developer confidence in building accessible features
- Stakeholder understanding of accessibility importance

But the most important metric is whether users with disabilities can successfully complete their goals on our platform. If they can't, we haven't succeeded.

## The Future of Accessibility

**Q: What trends are you seeing in accessibility, and what should companies be preparing for?**

A: I'm excited about several trends:

**1. AI and Machine Learning**
AI is helping with automatic captioning, image descriptions, and even detecting accessibility issues. While it's not perfect, it's making accessibility more scalable.

**2. Voice Interfaces**
As voice assistants become more common, we need to ensure our content works well with voice navigation. This includes proper heading structure and clear, concise content.

**3. Mobile Accessibility**
Mobile accessibility is becoming increasingly important. Touch targets need to be large enough, and we need to consider how assistive technologies work on mobile devices.

**4. Legal Requirements**
More countries are implementing accessibility laws, and companies are being held accountable. It's not just about doing the right thing—it's about compliance.

## Advice for Getting Started

**Q: What advice would you give to a company that wants to improve their accessibility but doesn't know where to start?**

A: Start small but start now. Here's a simple three-step approach:

**Step 1: Audit your current state**
Use automated tools to identify the most critical accessibility issues. Focus on the most important pages or features first.

**Step 2: Fix the basics**
Address the low-hanging fruit: add alt text to images, ensure proper heading structure, and make sure everything is keyboard accessible.

**Step 3: Build accessibility into your process**
Make accessibility part of your design and development workflow. Include it in your definition of done.

Remember, accessibility is a journey, not a destination. You don't have to be perfect from day one, but you do need to start moving in the right direction.

## Final Thoughts

**Q: What's the one thing you wish everyone understood about accessibility?**

A: That accessibility is about people, not just compliance. Every accessibility guideline exists because someone, somewhere, needs it to use the web effectively.

When you make your product accessible, you're not just checking boxes—you're opening doors for people who might otherwise be excluded. That's powerful. And the beautiful thing is that when you design for people with disabilities, you often create better experiences for everyone.

Accessibility isn't charity work. It's good design. It's good business. And it's the right thing to do.

---

*Sarah Chen is a Senior Accessibility Engineer at TechCorp and a passionate advocate for inclusive design. She regularly speaks at conferences and workshops about accessibility and has helped numerous companies improve their digital accessibility practices. You can follow her on Twitter @sarahchen_a11y.*

*This interview was conducted as part of our ongoing series on accessibility in practice. If you'd like to share your accessibility journey or have questions for Sarah, please reach out to us.*
