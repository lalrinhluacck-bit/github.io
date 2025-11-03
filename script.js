// script.js

document.addEventListener('DOMContentLoaded', () => {
  
  // --- Set Current Year in Footer ---
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.innerText = new Date().getFullYear();
  }

  // --- Sticky Header on Scroll ---
  const header = document.querySelector('.top-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // --- Mobile Menu Toggle ---
  const hamburger = document.getElementById('hamburger-menu');
  const navbar = document.querySelector('.navbar');
  if (hamburger && navbar) {
    hamburger.addEventListener('click', () => {
      navbar.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
  }

  // --- Fade-in Animation on Scroll ---
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Stop observing after it becomes visible
        }
      });
    }, {
      threshold: 0.1
    });

    revealElements.forEach(el => observer.observe(el));
  }

  // --- Contact Form Placeholder Validation ---
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent actual submission
      alert('Thank you for your message! (This is a demo)');
      contactForm.reset();
    });
  }
  
  // --- Set Active Navigation Link ---
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.navbar .menu a');
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.parentElement.classList.add('active');
    }
  });

});