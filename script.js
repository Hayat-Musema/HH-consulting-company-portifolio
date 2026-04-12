const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('active');
  menuToggle.classList.toggle('open', isOpen);
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

// Smooth scroll for nav links
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
    // Close menu after navigation
    navMenu.classList.remove('active');
    menuToggle.classList.remove('open');
    menuToggle.setAttribute('aria-label', 'Open navigation');
  });
});

// Hero button navigation
document.querySelector('.hero-button').addEventListener('click', (e) => {
  e.preventDefault();
  const targetSection = document.getElementById('projects');
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }
});

// Projects navigation
const seeMoreBtns = document.querySelectorAll('.see-more-btn');
const projectDetails = document.querySelectorAll('.project-details');
const backBtns = document.querySelectorAll('.back-btn');
const categoriesGrid = document.getElementById('categories-grid');

seeMoreBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent bubbling if needed
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
