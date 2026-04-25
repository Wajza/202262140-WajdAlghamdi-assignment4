# Technical Documentation

---

## Introduction

### Purpose
This document provides a comprehensive technical overview of the portfolio website for developers who need to understand, maintain, or extend the codebase.

### Project Overview
A responsive personal portfolio website built with vanilla HTML, CSS, and JavaScript. Features include GitHub API integration, interactive developer quiz, journey timeline, quote rotator, and state management (localStorage/sessionStorage).

---

## System Architecture

### Frontend Stack

| Layer | Technology | Files | Key Features |
|-------|------------|-------|--------------|
| Structure | HTML5 | index.html | Semantic elements, ARIA labels, SEO tags |
| Styling | CSS3 | styles.css | CSS variables, Grid/Flexbox, animations |
| Logic | JavaScript ES6+ | script.js | API calls, DOM manipulation, state management |

### Browser APIs Used

| API | Function | Implementation |
|-----|----------|----------------|
| localStorage | Persistent storage | Theme, visit count, quiz results |
| sessionStorage | Session storage | Session timer, current quote index |
| Fetch API | HTTP requests | GitHub API calls |
| Intersection Observer | Scroll animations | Skill bars, timeline items |
| History API | Navigation | Smooth scroll with URL updates |

## External Resources

| Resource | Usage |
|----------|-------|
| Google Fonts (Poppins) | Typography |
| Font Awesome 6 | Icons |
| GitHub REST API | Repository data |

---

## File Structure

```
202262140-wajd-alghamdi-assignment4/
├── README.md # Project overview
├── index.html # Main entry point
├── css/
│ └── styles.css # All styling
├── js/
│ └── script.js # All JavaScript
├── assets/
│ └── images/
│ ├── PFP.png # Profile picture
│ ├── KSIH.png # Project 1 image
│ ├── EBS.png # Project 2 image
│ └── KE.png # Project 3 image
├── docs/
│ ├── ai-usage-report.md # AI documentation
│ └── technical-documentation.md # This file
├── presentation/
│ ├── slides.pdf # Presentation slides
│ └── demo-video.mp4 # Video demo
└── .gitignore
```

---

## Component Documentation

**1. Navigation Component:**
**Location:** `index.html` (lines 18-55) | `styles.css` (lines 84-170) | `script.js` (lines 38-108)

**Features:**
- Fixed position with backdrop blur
- Responsive hamburger menu on mobile
- Active link highlighting (scroll spy)
- Keyboard and swipe gesture support

**Key Classes:**
```css
.navbar        /* Fixed navigation bar */
.nav-menu      /* Desktop menu */
.hamburger     /* Mobile menu button */
.nav-link      /* Individual links */
```

**2. Stats Boxes Component:**
**Location:** `index.html` (lines 57-83) | `styles.css` (stats-boxes section) | `script.js` (initVisitCounter, initSessionTimer)

**Features:**
- Displays visit count, session timer, GitHub repo count
- Glass morphism effect
- Hover animation
- Responsive sizing

**Key Classes:**
```css
.stats-boxes        /* Container */
.stats-boxes-grid   /* Flex layout */
.stats-box          /* Individual card */
.stats-box-number   /* Value display */
.stats-box-label    /* Label text */
```
**3. GitHub Repositories Component**
**Location:** `index.html` (lines 200-230) | `styles.css` (github-section) | `script.js` (fetchGitHubRepos, filterAndSortRepos)

**Features:**
- Fetches live data from GitHub API
- Dynamic language filter
- Sort by stars, name, or recent
- Error handling with retry button

**Key Classes:**
```javascript
fetchGitHubRepos()      // API call
populateLanguageFilter() // Dynamic dropdown
displayRepos()          // Render cards
filterAndSortRepos()    // Combined logic
```
**4. Developer Quiz Component**
**Location:** `index.html` (lines 232-260) | `styles.css` (quiz-section) | `script.js` (quiz functions)

**Features:**
- 3 questions with 4 options each
- Weighted scoring system
- Progress bar
- LocalStorage result saving

**Key Classes:**
```javascript
initQuiz()       // Initialize quiz
showQuestion()   // Display current question
showQuizResult() // Calculate and show result
restartQuiz()    // Reset quiz
```
**5. Journey Timeline Component**
**Location:** `index.html` (my-journey section) | `styles.css`  (journey-section) | `script.js` (timeline functions)

**Features:**
- 6 personal milestones (2023-2026)
- Scroll-triggered animations
- Year badges on hover
- Intersection Observer implementation

**Key Classes:**
```javascript
initTimelineAnimations()      // Scroll animations
enhanceTimelineInteractivity() // Hover badges
```
**6. Quote Rotator Component**
**Location:** `index.html` (quote-rotator) | `styles.css`  (quote-rotator) | `script.js` (quote functions)

**Features:**
- 7 personal quotes
- Auto-rotation every 8 seconds
- Previous/next navigation
- Pause on hover
- Session persistence

**Key Classes:**
```javascript
initQuoteRotator()    // Initialize rotator
displayQuote()        // Show current quote
startAutoRotate()     // Auto-rotation
resetAutoRotate()     // Reset timer
```
**7. Contact Form Component**
**Location:** `index.html` (contact section) | `styles.css`  (contact-form) | `script.js` (form functions)

**Validation Rules:**
| Field | Validation | Error Message |
|-------|------------|---------------|
| Name | Min 2 characters | "Please enter a valid name" |
| Email | Regex pattern | "Please enter a valid email" |
| Message | 10-1000 characters | "Message must be 10-1000 characters" |


**Key Classes:**
```javascript
initContactForm()   // Form handler
validateForm()      // Validation logic
showFieldError()    // Display error
showNotification()  // Success/error popup
```

---

##  JavaScript Functions Reference

**1. Core Functions**
| Function | Purpose | Line |
|----------|---------|------|
| initThemeToggle() | Dark/light theme switching | 38 |
| initMobileMenu() | Hamburger menu functionality | 68 |
| initSmoothScroll() | Smooth anchor scrolling | 110 |
| initGreetingMessage() | Time-based greeting | 125 |
| initContactForm() | Form handling | 150 |
| validateForm() | Form validation | 203 |
| showFieldError() | Display field error | 243 |
| showNotification() | Display popup message | 270 |
| initScrollSpy() | Active nav highlighting | 210 |
| initBackToTop() | Back to top button | 230 |
| initSkillLevels() | Skill bar animations | 250 |
| initProjectFilters() | Project filtering | 315 |

**2. Assignment 3 Functions**
| Function | Purpose | Line |
|----------|---------|------|
| fetchGitHubRepos() | Fetches repositories from GitHub API | 700 |
| populateLanguageFilter() | Extracts unique languages for filter dropdown | 740 |
| displayRepos() | Renders repository cards in the grid | 760 |
| filterAndSortRepos() | Combined filter + sort logic | 795 |
| initQuiz() | Initializes the developer quiz | 830 |
| showQuestion() | Displays current quiz question | 850 |
| showQuizResult() | Calculates and displays quiz result | 885 |
| initVisitCounter() | Manages persistent visit count | 930 |
| initSessionTimer() | Manages real-time session timer | 950 |
| debounce() | Performance optimization for rapid events | 975 |

**3. Assignment 4 Functions**
| Function | Purpose | Line |
|----------|---------|------|
| initQuoteRotator() | Quote rotator with auto-rotation | 1000 |
| initTimelineAnimations() | Scroll-triggered timeline | 1050 |
| enhanceTimelineInteractivity() | Year badges on hover | 1080 |

---

##  CSS Architecture

**1. CSS Variables (Theming)**
```CSS
:root {
    /* Light theme */
    --primary-color: #2563eb;
    --secondary-color: #7c3aed;
    --bg-color: #ffffff;
    --text-color: #1f2937;
}

[data-theme="dark"] {
    /* Dark theme */
    --primary-color: #60a5fa;
    --secondary-color: #a78bfa;
    --bg-color: #111827;
    --text-color: #f3f4f6;
}
```
**2. Key Layouts**
| Layout | 	CSS Property | Usage |
|--------|---------------|-------|
| Projects Grid | grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) | Responsive project card |
| Repos Grid | grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)) | GitHub repo cards |
| Stats Boxes | display: flex; justify-content: center; gap: 2rem | Centered stats boxes |
| Timeline | position: relative; padding-left: 30px | Vertical timeline |

**3. Animations**
| Keyframe | Purpose | Duration |
|----------|---------|----------|
| fadeInUp | Fade in with upward motion | 0.6s |
| bounce | Bouncing arrow in hero | 2s (infinite) |
| shake | Form field error shake | 0.5s |
| spin | Loading spinner rotation | 1s (infinite) |
| slideIn | Notification slide in | 0.3s |

**3. Responsive Breakpoints**
| Breakpoint | Target | Key Changes |
|------------|--------|-------------|
| 992px | Tablet | 2-column layouts, reduced padding |
| 768px | Mobile | 	Hamburger menu, stacked layouts |
| 480px | Small Mobile | Compact stats, smaller fonts |
| 360px | Extra Small | Minimal padding, single column |

---

## State Management

**1. localStorage Items**
| Key | Value | Purpose |
|-----|-------|---------|
| theme | "light" / "dark" | Theme preference |
| portfolioVisitCount | Number | Total visit count |
| quizResult | JSON object | Quiz result with timestamp |

**2. sessionStorage Items**
| Key | Value | Purpose |
|-----|-------|---------|
| sessionStarted | "true" | Track new session |
| sessionStartTime | Timestamp | Calculate session duration |
| currentQuoteIndex | Number | Current quote position |

---

## Performance Optimizations

| Technique | Implementation | Benefit |
|-----------|----------------|---------|
| Lazy Loading | loading="lazy" on images | Faster initial load |
| Debouncing | debounce() function | Prevents excessive re-renders |
| Intersection Observer | Skill bars, timeline items | 	Animations only when visible |
| Preconnect | Google Fonts, CDN | Reduced DNS lookup time |
| Preload | Hero image | Critical resource priority |

---

## Accessibility Features

| Feature | Implementation | 
|---------|----------------|
| ARIA Labels | aria-label, aria-live, aria-expanded | 
| Semantic HTML | nav, section, footer, main | 
| Keyboard Navigation | Tab focus, Enter key, Escape to close | 
| Reduced Motion | prefers-reduced-motion media query | 
| Color Contrast | WCAG compliant (7:1 ratio) | 
| Focus Indicators | :focus-visible outline | 

---

## Error Handling

| Scenario | Handling | 
|----------|----------|
| GitHub API fails | Show error message with retry button | 
| Form validation fails | Display specific field errors | 
| Network offline | Show notification to user | 
| localStorage unavailable | Fallback to memory | 
| Image load fails | CSS background fallback | 

---

##  Troubleshooting Guide

| Issue | Solution |
|-------|----------|
| Stats boxes not visible | Add margin-top: 70px |
| GitHub repos not loading | Click retry button, wait 1 hour |
| Filter dropdown empty | Ensure repos have language property |
| Theme not persisting | Enable in browser settings |
| Mobile menu not working | Check console for errors |
| Quiz result not showing | Verify quizQuestions structure |
| Images not loading | Check assets/images/ folder |

---

##  References

1. Font Awesome
2. Google Fonts 
3. GitHub REST API
4. MDN Web Docs
5. LocalStorage API
6. Intersection Observer API