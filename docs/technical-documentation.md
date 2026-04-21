# Technical Documentation

---

## Introduction

**Purpose:**
This technical documentation provides a comprehensive overview of the Wajd Alghamdi Portfolio website for Assignment 3. It is intended for developers who need to understand, maintain, or extend the codebase, specifically the advanced features added for this assignment.

**Project Overview:**
A responsive personal portfolio website built with vanilla HTML, CSS, and JavaScript. The site showcases software engineering projects, technical skills, and provides advanced features including GitHub API integration, an interactive developer quiz, real-time stats bar, and combined filter+sort functionality.

---

## Key Features

1. GitHub API Integration
2. Filter + Sort Logic
3. Interactive Developer Quiz
4. Stats Bar
5. Dark/Light Theme
6. Responsive Design
7. Form Validation
8. Project Filtering
9. Animated Skill Bars

---

## System Architecture

-  Frontend Stack:

| Layer | Technology | File | Key Features |
|-------|------------|------|--------------|
| 📄 Structure | HTML5 | index.html | Semantic structure, SEO-friendly tags, ARIA accessibility, GitHub section, quiz container, stats bar |
| 🎨 Styling | CSS3 | styles.css | CSS Variables for theming, Flexbox & Grid layouts, media queries, keyframe animations, GitHub repo cards, quiz styles, stats bar |
| ⚡ Functionality | JavaScript | script.js | DOM manipulation, GitHub API fetch, filter+sort logic, quiz scoring, localStorage/sessionStorage, event listeners |

- Browser APIs:

| API | Function | Implementation |
|-----|----------|----------------|
| LocalStorage | Persistent state management | Saves theme preference, visit count, quiz results |
| sessionStorage | SSession state management | Tracks session start time for timer |
| Intersection Observer | Scroll-triggered animations | Animates skill bars when scrolled into view |
| Fetch API | GitHub API calls | Fetches repositories |
| DOM API | Element manipulation | Selects and modifies page elements dynamically |
| History API | Smooth navigation | Handles anchor link scrolling without page reload |

- External Resources:

| Resource | Icon | Type | Usage |
|----------|------|------|-------|
| Google Fonts | 🔤 | Typography | Main font family for all text |
| Font Awesome | 🎯 | Icons | UI icons for navigation, skills, GitHub meta, social links |

---

## File Structure

| Directory | File | Description |
|-----------|------|-------------|
| / | README.md | Project overview and setup instructions |
| / | index.html | Main entry point / Homepage |
| /css/ | styles.css | All styling and themes |
| /js/ | script.js | All JavaScript functionality |
| /assets/images/ | PFP.png | Profile picture |
| /assets/images/ | KSIH.png | KFUPM Student Impact Hub project image |
| /assets/images/ | EBS.png | Event Booking System project image |
| /assets/images/ | KE.png | KFUPM Events project image |
| /docs/ | ai-usage-report.md | AI usage documentation |
| /docs/ | technical-documentation.md | Technical documentation |

---

## Component Documentation

1. Navigation Component:  index.html (lines 18-55) | styles.css (lines 84-170) | script.js (lines 38-108):

- HTML:
```html
<!--
<nav class="navbar" aria-label="Main navigation">
    <div class="nav-container">
        <div class="logo">
            <a href="#home">Wajd Alghamdi</a>
        </div>
        <button class="hamburger" aria-label="Toggle menu">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </button>
        <ul class="nav-menu">
            <li><a href="#home" class="nav-link">Home</a></li>
            <li><a href="#about" class="nav-link">About</a></li>
            <li><a href="#projects" class="nav-link">Projects</a></li>
            <li><a href="#skills" class="nav-link">Skills</a></li>
            <li><a href="#github-repos" class="nav-link">GitHub</a></li>
            <li><a href="#contact" class="nav-link">Contact</a></li>
        </ul>
        <div class="theme-toggle">
            <button id="themeToggle"><i class="fas fa-moon"></i></button>
        </div>
    </div>
</nav>
-->
```

2. Stats Bar Component: index.html (lines 57-72) | styles.css (lines 350-380) | script.js (lines 650-680):

- HTML:
```html
<!--
<div class="stats-bar" id="statsBar">
    <div class="stats-container">
        <div class="stat-item">
            <i class="fas fa-user-friends"></i>
            <span id="visitCount">Loading...</span>
            <small>Total Visits</small>
        </div>
        <div class="stat-item">
            <i class="fas fa-clock"></i>
            <span id="sessionTimer">0s</span>
            <small>Session Duration</small>
        </div>
        <div class="stat-item">
            <i class="fas fa-code-branch"></i>
            <span id="repoCount">0</span>
            <small>GitHub Repos</small>
        </div>
    </div>
</div>
-->
```

3. GitHub Repositories Section: index.html (lines 200-230) | styles.css (lines 500-600) | script.js (lines 700-800):

- HTML:
```html
<!--
<section id="github-repos" class="github-section">
    <div class="container">
        <h2 class="section-title">My GitHub Projects</h2>
        <div class="github-controls">
            <div class="repo-filter-group">
                <label for="repoFilter">Filter by Language:</label>
                <select id="repoFilter">
                    <option value="all">All Languages</option>
                </select>
            </div>
            <div class="repo-sort-group">
                <label for="repoSort">Sort by:</label>
                <select id="repoSort">
                    <option value="updated">Most Recent</option>
                    <option value="stars">Most Stars</option>
                    <option value="name">Name</option>
                </select>
            </div>
        </div>
        <div id="reposContainer" class="repos-grid"></div>
    </div>
</section>
-->
```

4.  Developer Quiz Section: index.html (lines 232-260) | styles.css (lines 620-700) | script.js (lines 820-920):

- HTML:
```html
<!--
<section id="skill-quiz" class="quiz-section">
    <div class="container">
        <h2 class="section-title">Find Your Developer Match</h2>
        <div class="quiz-container">
            <div class="quiz-intro" id="quizIntro">
                <p>Answer a few questions to see which developer path suits you best!</p>
                <button id="startQuizBtn" class="cta-button">Start Quiz →</button>
            </div>
            <div id="quizContent" style="display: none;">
                <div id="quizQuestion" class="quiz-question"></div>
                <div id="quizOptions" class="quiz-options"></div>
                <div id="quizProgress" class="quiz-progress"></div>
            </div>
            <div id="quizResult" style="display: none;" class="quiz-result"></div>
        </div>
    </div>
</section>
-->
```

5.  Contact Form Component: index.html (lines 262-310) | styles.css (lines 720-820) | script.js (lines 150-200):

- HTML:
```html
<!--
<form class="contact-form" id="contactForm" novalidate>
    <div class="form-row">
        <div class="form-group">
            <label for="name">Full Name <span class="required">*</span></label>
            <input type="text" id="name" name="name" placeholder="Your Full Name" required>
            <div class="error-message"></div>
        </div>
        <div class="form-group">
            <label for="email">Email Address <span class="required">*</span></label>
            <input type="email" id="email" name="email" placeholder="name@example.com" required>
            <div class="error-message"></div>
        </div>
    </div>
    <div class="form-group">
        <label for="message">Message <span class="required">*</span></label>
        <textarea id="message" name="message" rows="5" placeholder="Tell me about your project..." required></textarea>
        <div class="error-message"></div>
    </div>
    <button type="submit" class="submit-btn">Send Message</button>
</form>
-->
```

- Validation Rules:

| Field | Validation | Error Message |
|-------|------------|---------------|
| Name | Min 2 characters | "Please enter a valid name" |
| Email | Regex pattern | "Please enter a valid email" |
| Message | 10-1000 characters | "Message must be 10-1000 characters" |

---

##  JavaScript Functions Reference

1. Core Initialization Functions:

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

2. Assignment 3 Functions:

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

---

##  CSS Architecture

1. CSS Variables:

```css
/*
:root {
    --primary-color: #2563eb;
    --secondary-color: #7c3aed;
    --text-color: #1f2937;
    --bg-color: #ffffff;
    --card-bg: #ffffff;
    --border-color: #e5e7eb;
    --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

[data-theme="dark"] {
    --primary-color: #60a5fa;
    --secondary-color: #a78bfa;
    --text-color: #f3f4f6;
    --bg-color: #111827;
    --card-bg: #1f2937;
    --border-color: #374151;
}
*/
```

2. Grid Layouts:

```css
/*
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--spacing-lg);
}

.repos-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: var(--spacing-lg);
}

.stats-bar {
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    position: sticky;
    top: 70px;
    z-index: 99;
}
*/
```

3. Animation Keyframes:

```css
/*
@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes shake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
    20%, 40%, 60%, 80% { transform: translateX(5px); }
}
*/
```
---

##  Performance Optimization
```html
<!--
<img loading="lazy" src="assets/images/PFP.png" alt="Profile">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://cdnjs.cloudflare.com">

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" media="print" onload="this.media='all'">

<link rel="preload" as="image" href="assets/images/PFP.png">
-->
```

```javascript
/**
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const level = entry.target.getAttribute('data-level');
            entry.target.style.width = level;
        }
    });
}, { threshold: 0.5 });
 */
```
---

##  Accessibility Features

```html
<!--
<nav aria-label="Main navigation">
<button aria-label="Toggle menu" aria-expanded="false">
<div id="greeting" aria-live="polite">
<footer role="contentinfo">
-->
```


```css
/*
:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
    }
}
*/
```
---

##  Troubleshooting Guide

- Common Issues and Solutions:

| Issue | Solution |
|-------|----------|
| GitHub repos not loading | Check console for errors, click retry button, verify username Wajza |
| Filter dropdown empty | Ensure repos have language property, check API response |
| Quiz result not showing | Check console, verify answer types match result keys |
| Session timer resets on navigation | Timer is designed to reset on new session, normal behavior |
| Theme not persisting | Enable localStorage in browser settings |
| Images not loading | Verify images exist in assets/images/ folde |
| Mobile menu not working | Check console for errors, verify hamburger selectors |
| Form validation not showing| Ensure .error-message div exists after each input |
---

##  References

1. Font Awesome
2. Google Fonts 
3. GitHub REST API
4. MDN Web Docs
5. LocalStorage API
6. Intersection Observer API