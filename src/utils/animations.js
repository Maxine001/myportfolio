// ============================================
// ANIMATION UTILITIES
// ============================================

// Initialize all animations
export const initAnimations = () => {
  // Initialize scroll animations
  initScrollAnimations();
  
  // Parallax effects
  initParallaxEffects();
  
  // Typewriter effect
  initTypewriterEffect();
  
  // Navbar scroll effect
  initNavbarScroll();
  
  // Custom cursor
  initCustomCursor();
};

// Scroll animations using Intersection Observer
const initScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
      }
    });
  }, observerOptions);

  // Add animation classes to elements
  const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
  elements.forEach(el => observer.observe(el));
};

// Parallax scrolling effects
const initParallaxEffects = () => {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax-element');
    
    parallaxElements.forEach(element => {
      const speed = element.dataset.speed || 0.5;
      const yPos = -(scrolled * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
  });
};

// Typewriter effect for hero title
const initTypewriterEffect = () => {
  const heroTitle = document.querySelector('.hero__title');
  if (heroTitle && !heroTitle.classList.contains('typewriter-applied')) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    heroTitle.classList.add('typewriter-applied');
    
    let index = 0;
    const typeWriter = () => {
      if (index < text.length) {
        heroTitle.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
      }
    };
    
    setTimeout(typeWriter, 1000);
  }
};

// Navbar scroll effect
const initNavbarScroll = () => {
  let lastScrollY = window.scrollY;
  
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    
    // Hide/show navbar on scroll
    if (currentScrollY > lastScrollY && currentScrollY > 200) {
      navbar.style.transform = 'translateY(-100%)';
    } else {
      navbar.style.transform = 'translateY(0)';
    }
    
    navbar.style.transition = 'transform 0.3s ease';
    lastScrollY = currentScrollY;
  });
};

// Custom cursor effect
const initCustomCursor = () => {
  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  document.body.appendChild(cursor);
  
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });
  
  const hoverElements = document.querySelectorAll('a, button, .project-container, .experience__skill');
  hoverElements.forEach(element => {
    element.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    element.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
  });
};

// Smooth scroll to section
export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};

// Add loading animation to images
export const addImageLoadingAnimation = () => {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('load', () => {
      img.classList.add('loaded');
    });
    
    if (img.complete) {
      img.classList.add('loaded');
    }
  });
};

// Counter animation for stats
export const animateCounter = (element, start, end, duration) => {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    element.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
};
