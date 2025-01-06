// Display current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Dark Mode Toggle
const toggleDarkMode = () => {
  document.body.classList.toggle('dark-mode');
  const darkModeButton = document.getElementById('darkModeBtn');
  if (document.body.classList.contains('dark-mode')) {
    darkModeButton.textContent = 'Light Mode';
  } else {
    darkModeButton.textContent = 'Dark Mode';
  }
};

// Add Dark Mode Button to Navbar
const darkModeButton = document.createElement('button');
darkModeButton.id = 'darkModeBtn';
darkModeButton.className = 'btn btn-outline-light ms-3';
darkModeButton.textContent = 'Dark Mode';
darkModeButton.onclick = toggleDarkMode;
document.querySelector('.navbar .container-fluid').appendChild(darkModeButton);

// Form Submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  alert(`Thank you, ${name}! Your message has been submitted.`);
});

// Dynamic Background Color Change on Scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('bg-dark', 'shadow');
  } else {
    navbar.classList.remove('bg-dark', 'shadow');
  }
});
