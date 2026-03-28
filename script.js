const year = document.getElementById("year");
const countdown = document.getElementById("countdown");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const loading = document.getElementById("loading");

function updateCountdown() {
  let dmsec = newYear - Date.now();

  const days = Math.floor(dmsec / 86400000);
  dmsec -= days * 86400000;
  const hours = Math.floor(dmsec / 3600000);
  dmsec -= hours * 3600000;
  const minutes = Math.floor(dmsec / 60000);
  dmsec -= minutes * 60000;
  const seconds = Math.floor(dmsec / 1000);

  daysEl.textContent = days;
  hoursEl.textContent = hours < 10 ? `0${hours}` : hours;
  minutesEl.textContent = minutes < 10 ? `0${minutes}` : minutes;
  secondsEl.textContent = seconds < 10 ? `0${seconds}` : seconds;
}

const startTime = new Date();

year.textContent = `${startTime.getFullYear() + 1}`;

const newYear = new Date(`${startTime.getFullYear() + 1}`, 0, 1, 0, 0, 0, 0);

updateCountdown();

setInterval(updateCountdown, 1000);

setTimeout(() => {
  loading.style.display = "none";
  countdown.style.display = "flex";
}, 1000);
