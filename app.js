const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
})


// Get references to the video and container elements
const splash = document.getElementById("splash");
const container = document.getElementById("container");

// Show the splash screen
splash.style.display = "block";

// Wait for 3 seconds, then fade out the splash screen and reveal the website content
setTimeout(() => {
  // Fade out the splash screen
  splash.style.opacity = 0;
  // Wait for the fade out animation to complete, then hide the splash screen and show the website content
  setTimeout(() => {
    splash.style.display = "none";
    container.style.opacity = 1;
  }, 1000);
}, 3000);