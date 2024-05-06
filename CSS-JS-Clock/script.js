const hourBox = document.querySelector("#hour");
const minuteBox = document.querySelector("#minute");
const secondBox = document.querySelector("#second");

const secondHand = document.querySelector("[data-second-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const hourHand = document.querySelector("[data-hour-hand]");

setInterval(() => {
  const { hour, minute, second } = getCurrentTime();

  displayTime(hour, minute, second);
  setClock(hour, minute, second);
}, 1000);

function getCurrentTime() {
  const currentTime = new Date();

  const hour = currentTime.getHours();
  const minute = currentTime.getMinutes();
  const second = currentTime.getSeconds();

  return {
    hour: hour,
    minute: minute,
    second: second,
  };
}

// This code make changes in digital clock
function displayTime(hour, minute, second) {
  hourBox.innerHTML = hour;
  minuteBox.innerHTML = minute;
  secondBox.innerHTML = second;
}

// This code make change in the analoge clock
function setClock(hour, minute, second) {
  const secondsRatio = second / 60;
  const minutesRatio = (secondsRatio + minute) / 60;
  const hoursRatio = (minutesRatio + hour) / 12;

  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}
