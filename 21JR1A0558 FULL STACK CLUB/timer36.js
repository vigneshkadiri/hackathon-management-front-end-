let seconds = 0;
let minutes = 0;
let hours = 36;
let interval;

function startTimer() {
  if (!interval) {
    interval = setInterval(updateTimer, 1000);
  }
}

function stopTimer() {
  clearInterval(interval);
  interval = null;
}

function resetTimer() {
  clearInterval(interval);
  interval = null;
  seconds = 0;
  minutes = 0;
  hours = 36;
  document.getElementById('clock').innerText = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
}

function updateTimer() {
  if (seconds === 0 && minutes === 0 && hours === 0) {
    clearInterval(interval);
    interval = null;
  } else {
    if (seconds === 0) {
      if (minutes === 0) {
        hours--;
        minutes = 59;
        seconds = 59;
      } else {
        minutes--;
        seconds = 59;
      }
    } else {
      seconds--;
    }
  }
  document.getElementById('clock').innerText = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}