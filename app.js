// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    if (navLinks.style.display === 'flex') {
        gsap.to(navLinks, {
            opacity: 0,
            y: -20,
            duration: 0.3,
            onComplete: () => {
                navLinks.style.display = 'none';
            }
        });
    } else {
        navLinks.style.display = 'flex';
        gsap.fromTo(navLinks,
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 0.3 }
        );
    }
});

// Hero Section Animation
gsap.to('.hero-content', {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: 'power3.out',
    delay: 0.5
});

// About Section Animation
gsap.to('.about-text', {
    scrollTrigger: {
        trigger: '.about',
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
    },
    opacity: 1,
    x: 0,
    duration: 1,
    ease: 'power3.out'
});

// Skills Cards Animation
const skillCards = gsap.utils.toArray('.skill-card');
skillCards.forEach((card, i) => {
    gsap.to(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
        },
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: i * 0.1,
        ease: 'power3.out'
    });
});

// Project Section Animation
const projectTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: '.project',
        start: 'top center',
        toggleActions: 'play none none reverse'
    }
});

projectTimeline
    .from('.preview-frame', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out'
    })
    .from('.frame-dots span', {
        scale: 0,
        opacity: 0,
        duration: 0.4,
        stagger: 0.1,
        ease: 'back.out(1.7)'
    }, '-=0.5')
    .from('.frame-title', {
        opacity: 0,
        x: -20,
        duration: 0.4,
        ease: 'power2.out'
    }, '-=0.3')
    .from('.project-description', {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: 'power3.out'
    }, '-=0.2');

// Achievement Cards Animation
const achievementCards = gsap.utils.toArray('.achievement-card');
achievementCards.forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        delay: i * 0.15,
        ease: 'power3.out'
    });
});

// Tech Tags Animation
const techTags = gsap.utils.toArray('.tech-tags span');
techTags.forEach((tag, i) => {
    gsap.from(tag, {
        scrollTrigger: {
            trigger: tag,
            start: 'top bottom-=50',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 20,
        duration: 0.4,
        delay: i * 0.1,
        ease: 'power2.out'
    });
});

// AI & Tools Animation
const toolCards = gsap.utils.toArray('.tool-card');
toolCards.forEach((card, i) => {
    gsap.to(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
        },
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: i * 0.1,
        ease: 'power3.out'
    });
});

const miniCards = gsap.utils.toArray('.mini-card');
miniCards.forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        delay: i * 0.2,
        ease: 'power3.out'
    });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            // Close mobile menu if open
            if (window.innerWidth <= 768 && navLinks.style.display === 'flex') {
                gsap.to(navLinks, {
                    opacity: 0,
                    y: -20,
                    duration: 0.3,
                    onComplete: () => {
                        navLinks.style.display = 'none';
                    }
                });
            }
            
            // Smooth scroll to target
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Journey Toggle
const journeyToggle = document.querySelector('.journey-toggle');
const journeyContent = document.querySelector('.journey-content');

if (journeyToggle && journeyContent) {
    journeyToggle.addEventListener('click', () => {
        const isExpanding = !journeyContent.classList.contains('active');
        
        journeyToggle.classList.toggle('active');
        journeyContent.classList.toggle('active');
        
        if (!isExpanding) {
            // Collapsing
            journeyContent.style.maxHeight = '0';
            journeyContent.style.opacity = '0';
            journeyContent.style.visibility = 'hidden';
        } else {
            // Expanding
            journeyContent.style.maxHeight = '1000px';
            journeyContent.style.opacity = '1';
            journeyContent.style.visibility = 'visible';
        }
    });
} 