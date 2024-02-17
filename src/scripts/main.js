// src/scripts/main.js

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

 console.log('Script is running');
  window.onload = function() {
    const menuButton = document.getElementById('menu-toggle');
    console.log('Menu button:', menuButton); // Should log the button element
    if (menuButton) {
      menuButton.addEventListener('click', function() {
        document.getElementById('mobile-menu').classList.toggle('hidden');
        console.log('Button clicked');
      });
    } else {
      console.log('Menu button not found');
    }
  };
