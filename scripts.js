let countdown;
let timeLeft = 25 * 60; // 25 minutes in seconds
let isPaused = true;
let isWorkTime = true;
let pomoCounter = 0; // couunter for how many times user has completed a pomodoro



// display footer when user scrolls down
window.addEventListener('scroll', () => {
    const footer = document.getElementById('footer');
    if (window.scrollY > 1) { // Adjust the scroll position as needed
      footer.classList.add('show-footer');
    } else {
      footer.classList.remove('show-footer');
    }
  });


// format and update the timer display
function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60).toString().padStart(2, "0");
    const seconds = (timeLeft % 60).toString().padStart(2, "0");
    document.getElementById("timer").textContent = `${minutes}:${seconds}`;
    
    // Update progress circle by calculating the angle
    const totalDuration = isWorkTime ? 25 * 60 : 5 * 60;
    const progressPercentage = ((totalDuration - timeLeft) / totalDuration) * 100;
    document.documentElement.style.setProperty("--progress", `${progressPercentage}%`);

    //update html counter
    document.getElementById("pomoCount").innerText = pomoCounter;
  }
  
  // Start timer
  function startTimer() {
    if (isPaused) {
      isPaused = false;
      countdown = setInterval(() => {
        if (timeLeft > 0) {
          timeLeft--;
          updateDisplay();
        } else {
          clearInterval(countdown);
          alert(isWorkTime ? "Work session complete! Take a break." : "Break time over! Back to work.");
          toggleSession();
          startTimer(); // start next session
        }
      }, 1000);
    }
  }
  
  // Pause timer
  function pauseTimer() {
    isPaused = true;
    clearInterval(countdown);
  }
  
  // Reset timer
  function resetTimer() {
    isPaused = true;
    clearInterval(countdown);
    isWorkTime = true;
    timeLeft = 25 * 60;
    pomoCounter = 0;
    updateDisplay();
  }
  
  // toggle between work and break sessions  *** needs to be revised ***
  function toggleSession() {
    isWorkTime = !isWorkTime;
    timeLeft = isWorkTime ? 25 * 60 : 5 * 60;
    pomoCounter ++;
    updateDisplay();
  }
  
  // Initialize display on page load
  updateDisplay();