const hourElement = document.querySelector("#hour");
const minuteElement = document.querySelector("#minute");
const secondElement = document.querySelector("#second");

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

  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();
  const currentSecond = currentTime.getSeconds();

  return {
    hour: currentHour,
    minute: currentMinute,
    second: currentSecond,
  };
}

// Function to update the digital clock
function displayTime(hour, minute, second) {
  hourElement.innerHTML = hour;
  minuteElement.innerHTML = minute;
  secondElement.innerHTML = second;
}

// Function to update the analog clock
function setClock(hour, minute, second) {
  const secondsRatio = second / 60;
  const minutesRatio = (secondsRatio + minute) / 60;
  const hoursRatio = (minutesRatio + hour) / 12;

  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
}

// Function to set rotation of clock hands
function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}
