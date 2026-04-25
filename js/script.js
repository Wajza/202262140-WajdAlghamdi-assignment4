/**
 * ========================================================
 * AI DECLARATION - JAVASCRIPT FUNCTIONALITY
 * ========================================================
 * 
 * This JavaScript file was developed with assistance from 
 * ChatGPT (GPT-4), then manually 
 * customized, tested, and improved by Wajd Alghamdi
 * 
 * ========================================================
 * ASSIGNMENT 4 - FINAL POLISHED VERSION
 * ========================================================
 * 
 * New Features Added for Assignment 4:
 * - Personal Quote Rotator with navigation and auto-rotation
 * - Interactive Journey Timeline with animations
 * - Year badge on timeline hover
 * - Session persistence for quotes
 * - Fixed GitHub filter functionality
 * - Stats boxes support (visit counter, session timer, repo count)
 * 
 * ========================================================
 */

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio loaded successfully!');
    
    // Initialize all features
    initThemeToggle();
    initMobileMenu();
    initSmoothScroll();
    initGreetingMessage();
    initContactForm();
    initScrollSpy();
    initBackToTop();
    initSkillLevels();
    initNewsletterForm();
    initTypingEffect();
    initProjectFilters();
    initFormValidation();
    initLazyLoading();
    
    // Assignment 3 & 4 Features
    initAssignment3Features();
});

/**
 * Theme Toggle Functionality
 */
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;
    
    const icon = themeToggle.querySelector('i');
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme === 'dark');
    } else {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (systemPrefersDark) {
            document.documentElement.setAttribute('data-theme', 'dark');
            updateThemeIcon(true);
        }
    }
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const isDark = currentTheme === 'dark';
        
        if (isDark) {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
        
        updateThemeIcon(!isDark);
        
        themeToggle.classList.add('rotate');
        setTimeout(() => {
            themeToggle.classList.remove('rotate');
        }, 300);
    });
    
    function updateThemeIcon(isDark) {
        if (icon) {
            icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
        }
    }
}

/**
 * Mobile Menu Functionality
 */
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const body = document.body;
    
    if (!hamburger || !navMenu) return;
    
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });
    
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            closeMenu();
        }
    });
    
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });
    
    let touchStartX = 0;
    let touchEndX = 0;
    
    document.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    document.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function toggleMenu() {
        const isActive = hamburger.classList.contains('active');
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', !isActive);
        
        if (!isActive) {
            body.style.overflow = 'hidden';
            body.classList.add('menu-open');
        } else {
            body.style.overflow = '';
            body.classList.remove('menu-open');
        }
    }
    
    function closeMenu() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        body.style.overflow = '';
        body.classList.remove('menu-open');
    }
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const swipeDistance = touchEndX - touchStartX;
        
        if (swipeDistance > swipeThreshold && touchStartX < 30 && !navMenu.classList.contains('active')) {
            toggleMenu();
        }
        
        if (swipeDistance < -swipeThreshold && navMenu.classList.contains('active')) {
            closeMenu();
        }
    }
}

/**
 * Smooth Scrolling
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            const target = document.querySelector(targetId);
            if (target) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                history.pushState(null, null, targetId);
            }
        });
    });
}

/**
 * Greeting Message
 */
function initGreetingMessage() {
    const greetingElement = document.getElementById('greeting');
    if (!greetingElement) return;
    
    const hour = new Date().getHours();
    const day = new Date().getDay();
    
    let greeting;
    let emoji;
    
    if (hour < 12) {
        greeting = "Good morning";
        emoji = "☀️";
    } else if (hour < 18) {
        greeting = "Good afternoon";
        emoji = "✨";
    } else {
        greeting = "Good evening";
        emoji = "🌙";
    }
    
    const dayMessages = {
        0: "Happy Sunday! ",
        1: "Happy Monday! ",
        2: "Happy Tuesday! ",
        3: "Happy Wednesday! ",
        4: "Happy Thursday! ",
        5: "Happy Friday! ",
        6: "Happy Saturday! "
    };
    
    const fullGreeting = `${emoji} ${greeting}! ${dayMessages[day]}I'm Wajd, a Software Engineer passionate about creating innovative solutions.`;
    
    let i = 0;
    greetingElement.textContent = '';
    
    function typeWriter() {
        if (i < fullGreeting.length) {
            greetingElement.textContent += fullGreeting.charAt(i);
            i++;
            setTimeout(typeWriter, 30);
        }
    }
    
    typeWriter();
}

/**
 * Contact Form Handling
 */
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            subject: document.getElementById('subject')?.value.trim() || 'No Subject',
            message: document.getElementById('message').value.trim()
        };
        
        if (!validateForm(formData)) {
            return;
        }
        
        const submitBtn = form.querySelector('.submit-btn');
        const originalContent = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        try {
            await simulateSubmission();
            showNotification('✨ Message sent successfully! I\'ll get back to you within 24 hours.', 'success');
            form.reset();
            
            document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
            document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
            
        } catch (error) {
            console.error('Form submission error:', error);
            showNotification('❌ Oops! Something went wrong. Please try again or email me directly.', 'error');
        } finally {
            submitBtn.innerHTML = originalContent;
            submitBtn.disabled = false;
        }
    });
}

/**
 * Form Validation
 */
function validateForm(data) {
    let isValid = true;
    
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
    document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
    
    if (data.name.length < 2) {
        showFieldError('name', 'Please enter a valid name (minimum 2 characters)');
        isValid = false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showFieldError('email', 'Please enter a valid email address');
        isValid = false;
    }
    
    if (data.message.length < 10) {
        showFieldError('message', 'Message must be at least 10 characters long');
        isValid = false;
    }
    
    if (data.message.length > 1000) {
        showFieldError('message', 'Message is too long. Please keep it under 1000 characters.');
        isValid = false;
    }
    
    if (!isValid) {
        showNotification('Please fix the errors in the form', 'error');
    }
    
    return isValid;
}

/**
 * Show Field Error
 */
function showFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorElement = field.closest('.form-group')?.querySelector('.error-message');
    
    if (field && errorElement) {
        field.classList.add('error');
        errorElement.textContent = message;
        
        field.classList.add('shake');
        setTimeout(() => {
            field.classList.remove('shake');
        }, 500);
    }
}

/**
 * Form Validation Initialization
 */
function initFormValidation() {
    const inputs = document.querySelectorAll('#contactForm input, #contactForm textarea');
    
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            const errorElement = this.closest('.form-group')?.querySelector('.error-message');
            if (errorElement && errorElement.textContent) {
                errorElement.textContent = '';
                this.classList.remove('error');
            }
        });
        
        input.addEventListener('blur', function() {
            if (this.hasAttribute('required') && !this.value.trim()) {
                showFieldError(this.id, 'This field is required');
            }
        });
    });
}

/**
 * Simulate API Call
 */
function simulateSubmission() {
    return new Promise((resolve) => {
        setTimeout(resolve, 1500);
    });
}

/**
 * Show Notification
 */
function showNotification(message, type) {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.setAttribute('role', 'alert');
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease forwards';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

/**
 * Scroll Spy
 */
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (!sections.length || !navLinks.length) return;
    
    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href').substring(1);
            if (href === current) {
                link.classList.add('active');
            }
        });
    });
}

/**
 * Back to Top Button
 */
function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    if (!backToTop) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/**
 * Skill Levels Animation
 */
function initSkillLevels() {
    const skillLevels = document.querySelectorAll('.skill-level');
    
    if (!skillLevels.length) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const level = entry.target.getAttribute('data-level');
                entry.target.style.width = level;
            }
        });
    }, { threshold: 0.5 });
    
    skillLevels.forEach(skill => {
        observer.observe(skill);
    });
}

/**
 * Newsletter Form
 */
function initNewsletterForm() {
    const form = document.getElementById('newsletterForm');
    if (!form) return;
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const emailInput = form.querySelector('input[type="email"]');
        const email = emailInput.value;
        const submitBtn = form.querySelector('button');
        const originalContent = submitBtn.innerHTML;
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Please enter a valid email address', 'error');
            emailInput.focus();
            return;
        }
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        submitBtn.disabled = true;
        
        try {
            await simulateSubmission();
            showNotification('🎉 Thanks for subscribing! Check your email for confirmation.', 'success');
            form.reset();
        } catch (error) {
            showNotification('Something went wrong. Please try again.', 'error');
        } finally {
            submitBtn.innerHTML = originalContent;
            submitBtn.disabled = false;
        }
    });
}

/**
 * Typing Effect
 */
function initTypingEffect() {
    const tagline = document.querySelector('.tagline');
    if (!tagline) return;
    
    const originalText = tagline.textContent;
    tagline.textContent = '';
    
    let i = 0;
    function typeTagline() {
        if (i < originalText.length) {
            tagline.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeTagline, 50);
        }
    }
    
    setTimeout(typeTagline, 1000);
}

/**
 * Project Filters
 */
function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project-card');
    
    if (!filterButtons.length || !projects.length) return;
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            projects.forEach(project => {
                if (filter === 'all' || project.getAttribute('data-category') === filter) {
                    project.classList.remove('hidden');
                    project.classList.add('visible');
                } else {
                    project.classList.remove('visible');
                    project.classList.add('hidden');
                }
            });
        });
    });
}

/**
 * Lazy Loading Images
 */
function initLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

/**
 * ========================================================
 * ASSIGNMENT 3 - GITHUB API INTEGRATION
 * ========================================================
 */

const GITHUB_USERNAME = 'Wajza';

/**
 * Fetch GitHub Repositories
 */
async function fetchGitHubRepos() {
    const container = document.getElementById('reposContainer');
    if (!container) return;
    
    try {
        container.innerHTML = `
            <div class="loading-spinner">
                <i class="fas fa-spinner fa-spin"></i>
                <p>Fetching my latest projects from GitHub...</p>
            </div>
        `;
        
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=50`);
        
        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }
        
        const repos = await response.json();
        const myRepos = repos.filter(repo => !repo.fork);
        
        window.githubRepos = myRepos;
        
        console.log(`Fetched ${myRepos.length} repositories from GitHub`);
        
        populateLanguageFilter(myRepos);
        displayRepos(myRepos);
        
        const repoCountSpan = document.getElementById('repoCount');
        if (repoCountSpan) repoCountSpan.textContent = myRepos.length;
        
    } catch (error) {
        console.error('Failed to fetch repos:', error);
        container.innerHTML = `
            <div class="error-message-repos">
                <i class="fas fa-exclamation-circle"></i>
                <p>Unable to load GitHub repositories. Please try again later.</p>
                <button onclick="fetchGitHubRepos()" class="cta-button" style="margin-top: 1rem;">Retry</button>
            </div>
        `;
    }
}

/**
 * Populate Language Filter Dropdown
 */
function populateLanguageFilter(repos) {
    const filterSelect = document.getElementById('repoFilter');
    if (!filterSelect) return;
    
    const languages = [...new Set(repos.map(repo => repo.language).filter(lang => lang !== null))];
    languages.sort();
    
    console.log('Available languages:', languages);
    
    filterSelect.innerHTML = '<option value="all">🌐 All Languages</option>';
    
    languages.forEach(lang => {
        const option = document.createElement('option');
        option.value = lang;
        option.textContent = lang;
        filterSelect.appendChild(option);
    });
}

/**
 * Display Repositories
 */
function displayRepos(repos) {
    const container = document.getElementById('reposContainer');
    if (!container) return;
    
    if (!repos || repos.length === 0) {
        container.innerHTML = '<p class="error-message-repos">No repositories found for the selected language.</p>';
        return;
    }
    
    container.innerHTML = repos.map(repo => `
        <div class="repo-card">
            <h3 class="repo-name">
                <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-github"></i> ${repo.name}
                </a>
            </h3>
            <p class="repo-description">${repo.description || 'No description provided.'}</p>
            <div class="repo-meta">
                ${repo.language ? `<span class="repo-language"><i class="fas fa-code"></i> ${repo.language}</span>` : '<span class="repo-language"><i class="fas fa-code"></i> Unknown</span>'}
                <span><i class="fas fa-star"></i> ${repo.stargazers_count}</span>
                <span><i class="fas fa-code-branch"></i> ${repo.forks_count}</span>
                <span><i class="fas fa-calendar-alt"></i> ${new Date(repo.updated_at).toLocaleDateString()}</span>
            </div>
        </div>
    `).join('');
}

/**
 * Filter and Sort Repositories
 */
function filterAndSortRepos() {
    if (!window.githubRepos || window.githubRepos.length === 0) {
        console.log('No repos loaded yet');
        return;
    }
    
    let filtered = [...window.githubRepos];
    
    const filterSelect = document.getElementById('repoFilter');
    const filterValue = filterSelect ? filterSelect.value : 'all';
    
    if (filterValue && filterValue !== 'all') {
        filtered = filtered.filter(repo => repo.language === filterValue);
        console.log(`Filtering by: ${filterValue}, found ${filtered.length} repos`);
    }
    
    const sortSelect = document.getElementById('repoSort');
    const sortValue = sortSelect ? sortSelect.value : 'updated';
    
    switch (sortValue) {
        case 'stars':
            filtered.sort((a, b) => b.stargazers_count - a.stargazers_count);
            break;
        case 'name':
            filtered.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'updated':
        default:
            filtered.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
            break;
    }
    
    displayRepos(filtered);
}

/**
 * ========================================================
 * QUIZ SECTION
 * ========================================================
 */

const quizQuestions = [
    {
        question: "What's your favorite way to solve problems?",
        options: [
            { text: "Building visual interfaces and seeing immediate results", type: "frontend" },
            { text: "Optimizing data flow and server logic", type: "backend" },
            { text: "Managing the whole system from start to finish", type: "fullstack" },
            { text: "Breaking down complex algorithms", type: "problem-solver" }
        ]
    },
    {
        question: "Which tool excites you the most?",
        options: [
            { text: "React / Vue - Building interactive UIs", type: "frontend" },
            { text: "Node.js / Python - Server-side magic", type: "backend" },
            { text: "Docker / AWS - Cloud and deployment", type: "fullstack" },
            { text: "VS Code + Terminal - Developer productivity", type: "problem-solver" }
        ]
    },
    {
        question: "What's your ideal project size?",
        options: [
            { text: "Small, focused UI components", type: "frontend" },
            { text: "Complex backend systems with databases", type: "backend" },
            { text: "End-to-end web applications", type: "fullstack" },
            { text: "Algorithm-heavy problem-solving", type: "problem-solver" }
        ]
    }
];

const quizResults = {
    frontend: {
        title: "🎨 Frontend Developer",
        description: "You love creating beautiful, responsive interfaces that users interact with directly. Focus on React, Vue, and modern CSS!",
        skills: ["HTML/CSS", "JavaScript/TypeScript", "React/Vue", "UI/UX Design"],
        projects: "Start with clone projects (e.g., Netflix, Twitter) to build your portfolio!"
    },
    backend: {
        title: "⚙️ Backend Developer",
        description: "You enjoy working with data, APIs, and server logic. The unseen magic of the web is your playground!",
        skills: ["Node.js/Python", "Databases (SQL/NoSQL)", "API Design", "Server Architecture"],
        projects: "Build a REST API, authentication system, or real-time chat server!"
    },
    fullstack: {
        title: "🚀 Full Stack Developer",
        description: "You want to build complete applications from database to UI. Versatility is your superpower!",
        skills: ["Frontend + Backend", "Database Management", "DevOps Basics", "System Design"],
        projects: "Create a full-featured app like a task manager or e-commerce site!"
    },
    "problem-solver": {
        title: "💡 Problem Solver / Software Architect",
        description: "You love tackling complex challenges and optimizing systems. You think about the big picture!",
        skills: ["Algorithms", "System Architecture", "Code Optimization", "Technical Leadership"],
        projects: "Contribute to open source, solve LeetCode problems, or design scalable systems!"
    }
};

let currentQuestion = 0;
let userAnswers = [];

/**
 * Initialize Quiz
 */
function initQuiz() {
    const startBtn = document.getElementById('startQuizBtn');
    if (!startBtn) return;
    
    startBtn.addEventListener('click', () => {
        const quizIntro = document.getElementById('quizIntro');
        const quizContent = document.getElementById('quizContent');
        if (quizIntro) quizIntro.style.display = 'none';
        if (quizContent) quizContent.style.display = 'block';
        currentQuestion = 0;
        userAnswers = [];
        showQuestion();
    });
}

/**
 * Show Current Quiz Question
 */
function showQuestion() {
    if (currentQuestion >= quizQuestions.length) {
        showQuizResult();
        return;
    }
    
    const question = quizQuestions[currentQuestion];
    const questionDiv = document.getElementById('quizQuestion');
    const optionsDiv = document.getElementById('quizOptions');
    const progressDiv = document.getElementById('quizProgress');
    
    if (!questionDiv || !optionsDiv) return;
    
    questionDiv.textContent = question.question;
    
    optionsDiv.innerHTML = question.options.map((opt, idx) => `
        <button class="quiz-option-btn" data-type="${opt.type}" data-index="${idx}">
            ${opt.text}
        </button>
    `).join('');
    
    document.querySelectorAll('.quiz-option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            userAnswers.push(btn.dataset.type);
            currentQuestion++;
            showQuestion();
        });
    });
    
    const progressPercent = (currentQuestion / quizQuestions.length) * 100;
    if (progressDiv) {
        progressDiv.innerHTML = `
            <div>Question ${currentQuestion + 1} of ${quizQuestions.length}</div>
            <div class="quiz-progress-bar">
                <div class="quiz-progress-fill" style="width: ${progressPercent}%"></div>
            </div>
        `;
    }
}

/**
 * Show Quiz Result
 */
function showQuizResult() {
    const quizContent = document.getElementById('quizContent');
    const resultDiv = document.getElementById('quizResult');
    
    if (quizContent) quizContent.style.display = 'none';
    
    const typeCounts = {};
    userAnswers.forEach(type => {
        typeCounts[type] = (typeCounts[type] || 0) + 1;
    });
    
    let dominantType = Object.keys(typeCounts).reduce((a, b) => typeCounts[a] > typeCounts[b] ? a : b, 'frontend');
    const result = quizResults[dominantType];
    
    if (resultDiv) {
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = `
            <h3>${result.title}</h3>
            <p>${result.description}</p>
            <div class="skill-badge">Key Skills: ${result.skills.join(' • ')}</div>
            <p style="margin-top: 1rem;"><strong>Next Steps:</strong> ${result.projects}</p>
            <button onclick="restartQuiz()" class="cta-button" style="margin-top: 1.5rem;">Take Quiz Again</button>
        `;
    }
    
    localStorage.setItem('quizResult', JSON.stringify({
        type: dominantType,
        timestamp: new Date().toISOString()
    }));
}

/**
 * Restart Quiz
 */
function restartQuiz() {
    const quizResult = document.getElementById('quizResult');
    const quizIntro = document.getElementById('quizIntro');
    
    if (quizResult) quizResult.style.display = 'none';
    if (quizIntro) quizIntro.style.display = 'block';
    currentQuestion = 0;
    userAnswers = [];
}

/**
 * ========================================================
 * STATE MANAGEMENT
 * ========================================================
 */

/**
 * Visit Counter
 */
function initVisitCounter() {
    let visitCount = localStorage.getItem('portfolioVisitCount');
    const isNewSession = !sessionStorage.getItem('sessionStarted');
    
    if (visitCount === null) {
        visitCount = 1;
    } else if (isNewSession) {
        visitCount = parseInt(visitCount) + 1;
    }
    
    localStorage.setItem('portfolioVisitCount', visitCount);
    sessionStorage.setItem('sessionStarted', 'true');
    
    const visitCountSpan = document.getElementById('visitCount');
    if (visitCountSpan) {
        visitCountSpan.textContent = visitCount;
    }
    
    console.log('Visit count:', visitCount);
}

/**
 * Session Timer
 */
function initSessionTimer() {
    let startTime = sessionStorage.getItem('sessionStartTime');
    
    if (!startTime) {
        startTime = Date.now();
        sessionStorage.setItem('sessionStartTime', startTime);
    }
    
    const timerSpan = document.getElementById('sessionTimer');
    if (!timerSpan) return;
    
    function updateTimer() {
        const elapsed = Math.floor((Date.now() - parseInt(startTime)) / 1000);
        const minutes = Math.floor(elapsed / 60);
        const seconds = elapsed % 60;
        
        if (elapsed < 60) {
            timerSpan.textContent = `${seconds}s`;
        } else {
            timerSpan.textContent = `${minutes}m ${seconds}s`;
        }
    }
    
    updateTimer();
    setInterval(updateTimer, 1000);
}

/**
 * ========================================================
 * ASSIGNMENT 4 - INNOVATION FEATURES
 * ========================================================
 */

const personalQuotes = [
    { text: "Code is poetry written for both humans and machines. Every line tells a story of problem-solving.", author: "Wajd Alghamdi" },
    { text: "The best code comes from collaboration, not isolation. Together, we build stronger solutions.", author: "Wajd Alghamdi" },
    { text: "Proud to represent Saudi women in tech, one commit at a time. Diversity drives innovation.", author: "Wajd Alghamdi" },
    { text: "Done is better than perfect, but both is the goal. Strive for excellence, deliver with pride.", author: "Wajd Alghamdi" },
    { text: "Every bug is a lesson in disguise. Embrace challenges as opportunities to grow.", author: "Wajd Alghamdi" },
    { text: "Technology is my canvas, code is my brush. Creating solutions that make a difference.", author: "Wajd Alghamdi" },
    { text: "Learning never stops in tech. Stay curious, stay hungry, stay humble.", author: "Wajd Alghamdi" }
];

let currentQuoteIndex = 0;
let quoteInterval = null;

/**
 * Initialize Quote Rotator
 */
function initQuoteRotator() {
    const quoteText = document.getElementById('personalQuote');
    const prevBtn = document.getElementById('prevQuote');
    const nextBtn = document.getElementById('nextQuote');
    const currentIndexSpan = document.getElementById('currentQuoteIndex');
    const totalQuotesSpan = document.getElementById('totalQuotesCount');
    
    if (!quoteText) return;
    
    if (totalQuotesSpan) {
        totalQuotesSpan.textContent = personalQuotes.length;
    }
    
    const savedQuoteIndex = sessionStorage.getItem('currentQuoteIndex');
    if (savedQuoteIndex !== null) {
        currentQuoteIndex = parseInt(savedQuoteIndex);
    }
    
    displayQuote(currentQuoteIndex);
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentQuoteIndex = (currentQuoteIndex - 1 + personalQuotes.length) % personalQuotes.length;
            displayQuote(currentQuoteIndex);
            animateQuoteChange();
            resetAutoRotate();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentQuoteIndex = (currentQuoteIndex + 1) % personalQuotes.length;
            displayQuote(currentQuoteIndex);
            animateQuoteChange();
            resetAutoRotate();
        });
    }
    
    startAutoRotate();
    
    const quoteRotator = document.querySelector('.quote-rotator');
    if (quoteRotator) {
        quoteRotator.addEventListener('mouseenter', () => {
            if (quoteInterval) {
                clearInterval(quoteInterval);
                quoteInterval = null;
            }
        });
        
        quoteRotator.addEventListener('mouseleave', () => {
            startAutoRotate();
        });
    }
    
    function displayQuote(index) {
        if (quoteText) {
            quoteText.textContent = personalQuotes[index].text;
        }
        if (currentIndexSpan) {
            currentIndexSpan.textContent = index + 1;
        }
        sessionStorage.setItem('currentQuoteIndex', index);
    }
    
    function animateQuoteChange() {
        if (quoteText) {
            quoteText.style.animation = 'none';
            quoteText.offsetHeight;
            quoteText.style.animation = 'fadeInUp 0.5s ease';
        }
    }
    
    function startAutoRotate() {
        if (quoteInterval) {
            clearInterval(quoteInterval);
        }
        quoteInterval = setInterval(() => {
            if (document.hasFocus()) {
                currentQuoteIndex = (currentQuoteIndex + 1) % personalQuotes.length;
                displayQuote(currentQuoteIndex);
                animateQuoteChange();
            }
        }, 8000);
    }
    
    function resetAutoRotate() {
        if (quoteInterval) {
            clearInterval(quoteInterval);
        }
        startAutoRotate();
    }
}

/**
 * Initialize Timeline Animations
 */
function initTimelineAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    if (!timelineItems.length) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
}

/**
 * Enhance Timeline Interactivity
 */
function enhanceTimelineInteractivity() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach(item => {
        const year = item.getAttribute('data-year');
        const content = item.querySelector('.timeline-content');
        
        if (content && year) {
            content.addEventListener('mouseenter', () => {
                const existingBadge = content.querySelector('.year-badge');
                if (!existingBadge) {
                    const badge = document.createElement('div');
                    badge.className = 'year-badge';
                    badge.textContent = year;
                    content.appendChild(badge);
                }
            });
            
            content.addEventListener('mouseleave', () => {
                const badge = content.querySelector('.year-badge');
                if (badge) {
                    badge.remove();
                }
            });
        }
    });
}

/**
 * Initialize Assignment 3 & 4 Features
 */
function initAssignment3Features() {
    // GitHub API
    fetchGitHubRepos();
    
    // Set up filter/sort listeners
    const filterSelect = document.getElementById('repoFilter');
    const sortSelect = document.getElementById('repoSort');
    
    if (filterSelect) {
        filterSelect.addEventListener('change', function() {
            console.log('Filter changed to:', this.value);
            filterAndSortRepos();
        });
    }
    
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            console.log('Sort changed to:', this.value);
            filterAndSortRepos();
        });
    }
    
    // Quiz
    initQuiz();
    
    // State Management
    initVisitCounter();
    initSessionTimer();
    
    // Innovation Features
    initQuoteRotator();
    initTimelineAnimations();
    enhanceTimelineInteractivity();
}

/**
 * Page Load Performance Tracking
 */
window.addEventListener('load', () => {
    if (window.performance) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`Page load time: ${pageLoadTime}ms`);
    }
    document.body.classList.add('loaded');
});

/**
 * Handle offline/online status
 */
window.addEventListener('offline', () => {
    showNotification('You are offline. Some features may not work.', 'error');
});

window.addEventListener('online', () => {
    showNotification('You are back online!', 'success');
});

/**
 * Handle escape key to close mobile menu
 */
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        if (hamburger?.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu?.classList.remove('active');
            document.body.style.overflow = '';
            document.body.classList.remove('menu-open');
        }
    }
});

// Make functions available globally
window.fetchGitHubRepos = fetchGitHubRepos;
window.restartQuiz = restartQuiz;
window.filterAndSortRepos = filterAndSortRepos;