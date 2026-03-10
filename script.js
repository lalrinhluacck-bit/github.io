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

          // Lock body scroll when menu is open
          document.body.classList.toggle('menu-open');
        });
  }
  
// --- Mobile Dropdown Toggle ---
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const trigger = dropdown.querySelector('.no-click');

  if (trigger) {
    trigger.addEventListener('click', function (e) {

      if (window.innerWidth <= 768) {
        e.preventDefault();

        // Close others
        dropdowns.forEach(item => {
          if (item !== dropdown) {
            item.classList.remove('active');
          }
        });

        // Toggle this one
        dropdown.classList.toggle('active');
      }
    });
  }
});

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
  // --- book pop up ---
const viewer = document.getElementById("viewer");
  const viewerImg = document.getElementById("viewerImg");
  const links = document.querySelectorAll(".book-link");
  const closeBtn = document.querySelector(".viewer-close");

  let scale = 1;

  if (viewer && viewerImg && closeBtn) {

    links.forEach(link => {

      link.addEventListener("click", function(e){

        e.preventDefault();

        viewer.style.display = "block";
        viewerImg.src = this.dataset.img;

        scale = 1;
        viewerImg.style.transform = "scale(1)";

        document.body.style.overflow = "hidden";

      });

    });


    closeBtn.onclick = function(){

      viewer.style.display = "none";
      document.body.style.overflow = "auto";

    };


    viewer.onclick = function(e){

      if(e.target === viewer){

        viewer.style.display = "none";
        document.body.style.overflow = "auto";

      }

    };


    viewerImg.addEventListener("wheel", function(e){

      e.preventDefault();

      if(e.deltaY < 0){
        scale += 0.15;
      }
      else{
        scale -= 0.15;
      }

      if(scale < 1) scale = 1;
      if(scale > 5) scale = 5;

      viewerImg.style.transform = "scale(" + scale + ")";

    });

  }

});

