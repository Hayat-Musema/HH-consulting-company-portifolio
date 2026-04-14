const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const menuClose = document.querySelector('.menu-close');

// Toggle menu with hamburger button
menuToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('active');
  menuToggle.classList.toggle('open', isOpen);
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

// Close menu with Close (✕) button
menuClose.addEventListener('click', closeMenu);

// Close menu when clicking any menu link + smooth scroll
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else if (targetId === "hero") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // === IMPORTANT: Close menu after clicking any option ===
    closeMenu();
  });
});

// Function to close menu
function closeMenu() {
  navMenu.classList.remove('active');
  menuToggle.classList.remove('open');
  menuToggle.setAttribute('aria-label', 'Open navigation');
}

// Hero button (Explore Projects)
document.querySelector('.hero-button').addEventListener('click', (e) => {
  e.preventDefault();
  const targetSection = document.getElementById('projects');
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }
});

// Projects section logic (your existing code)
const seeMoreBtns = document.querySelectorAll('.see-more-btn');
const projectDetails = document.querySelectorAll('.project-details');
const backBtns = document.querySelectorAll('.back-btn');
const categoriesGrid = document.getElementById('categories-grid');

seeMoreBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const category = btn.closest('.category-card').dataset.category;
    categoriesGrid.style.display = 'none';
    document.getElementById(`${category}-details`).style.display = 'block';
  });
});

backBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    projectDetails.forEach(detail => detail.style.display = 'none');
    categoriesGrid.style.display = 'grid';
  });
});

// ============== SCROLL ANIMATIONS ==============
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.animate-on-scroll');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.15,     // Trigger when 15% of element is visible
    rootMargin: "0px 0px -50px 0px"
  });

  elements.forEach(el => observer.observe(el));
};

// Run animations after page loads
window.addEventListener('load', animateOnScroll);