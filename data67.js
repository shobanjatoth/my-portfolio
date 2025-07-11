/* --- script.js --- */
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

function toggleDarkMode() {
  document.body.classList.toggle('dark');
  document.querySelector('nav').classList.toggle('dark');
  document.querySelector('footer').classList.toggle('dark');
}

// Scroll fade-in effect
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});



ScrollReveal({
  distance: '50px',
  duration: 1000,
  easing: 'ease-out',
  origin: 'bottom',
  reset: false,
});

ScrollReveal().reveal('#profile, #about, #experience, #projects, #contact, footer', {
  interval: 100
});




window.onscroll = () => {
  document.getElementById("backToTop").style.display =
    window.scrollY > 300 ? "block" : "none";
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}





const typedText = [
  "Aspiring Data Scientist",
  "MLOps Enthusiast",
  "Flask & Streamlit Developer &Fast Api",
  "Learner"
];

let typedIndex = 0;
let charIndex = 0;
let currentText = '';
let isDeleting = false;
const subtitle = document.getElementById("typed-subtitle");

function typeEffect() {
  if (typedIndex >= typedText.length) typedIndex = 0;
  currentText = typedText[typedIndex];

  subtitle.textContent = isDeleting
    ? currentText.substring(0, charIndex--)
    : currentText.substring(0, charIndex++);

  if (!isDeleting && charIndex === currentText.length + 1) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    typedIndex++;
    setTimeout(typeEffect, 300);
  } else {
    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }
}
typeEffect();


