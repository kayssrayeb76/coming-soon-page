// recuperation de donées
let daysD = document.querySelector(".days");
let hoursD = document.querySelector(".hours");
let minsD = document.querySelector(".mins");
let secsD = document.querySelector(".secs");
// set the countdown
let countdown = new Date("Jan 5, 2025 15:37:25").getTime();

let x = setInterval(() => {

  let now = new Date().getTime();

  let diff = countdown - now;

  // calculation
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // display
  if (days < 10) {
    daysD.innerHTML = "0" + days;
  } else {
    daysD.innerHTML = days;
  }
  if (hours < 10) {
    hoursD.innerHTML = "0" + hours;
  } else {
    hoursD.innerHTML = hours;
  }
  if (minutes < 10) {
    minsD.innerHTML = "0" + minutes;
  } else {
    minsD.innerHTML = minutes;
  }
  if (seconds < 10) {
    secsD.innerHTML = "0" + seconds;
  } else {
    secsD.innerHTML = seconds;
  }

  // daysD.innerHTML = days;
  // hoursD.innerHTML = hours;
  // minsD.innerHTML = minutes;
  // secsD.innerHTML = seconds;

}, 1000);
