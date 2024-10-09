// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal functionality for project images
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const captionText = document.getElementById("caption");

document.querySelectorAll('.project img').forEach(image => {
    image.addEventListener('click', function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });
});

// Close modal
const closeModal = document.getElementsByClassName("close")[0];
closeModal.onclick = function () {
    modal.style.display = "none";
};

// Intersection Observer for fade-in effect on scroll
const sections = document.querySelectorAll('section');
const options = { root: null, rootMargin: '0px', threshold: 0.1 };
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, options);
sections.forEach(section => { observer.observe(section); });

// Add entrance animation to sections
sections.forEach(section => {
    section.style.opacity = 0; // Initial opacity
    section.style.transform = 'translateY(20px)'; // Initial position
});

// Animate on scroll
window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            section.style.opacity = 1; // Fade in
            section.style.transform = 'translateY(0)'; // Move to original position
            section.style.transition = 'opacity 0.5s ease, transform 0.5s ease'; // Animation
        }
    });
});

// Toggle navigation menu for smaller screens
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navMenu.style.transition = 'transform 0.3s ease';
    if (navMenu.classList.contains('active')) {
        navMenu.style.transform = 'translateY(0)';
    } else {
        navMenu.style.transform = 'translateY(-100%)';
    }
});
