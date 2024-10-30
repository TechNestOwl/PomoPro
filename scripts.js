let countdown;
let timeLeft = 25 * 60; // 25 minutes in seconds
let isPaused = true;
let isWorkTime = true;


// display footer when user scrolls down
window.addEventListener('scroll', () => {
    const footer = document.getElementById('footer');
    if (window.scrollY > 1) { // Adjust the scroll position as needed
      footer.classList.add('show-footer');
    } else {
      footer.classList.remove('show-footer');
    }
  });