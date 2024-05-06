const hourBox = document.querySelector("#hour");
const minuteBox = document.querySelector("#minute");
const secondBox = document.querySelector("#second");

setInterval(() => {
  const d = new Date();

  displayTime(d.getHours(), d.getMinutes(), d.getSeconds());
}, 1000);

function displayTime(hour, minute, second) {
  hourBox.innerHTML = hour;
  minuteBox.innerHTML = minute;
  secondBox.innerHTML = second;
}
