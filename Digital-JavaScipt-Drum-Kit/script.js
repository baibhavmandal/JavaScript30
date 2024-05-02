const keys = document.querySelectorAll(".key");

window.addEventListener("keydown", function (event) {
  playSound(event.key);
  console.log(event.key);
  console.log("Hello World");
});

keys.forEach((key) => {
  key.addEventListener("click", function () {
    const keyAttribute = this.getAttribute("data-key");
    playSound(keyAttribute);
  });
});

function playSound(key) {
  const audio = document.querySelector(
    `audio[data-key="${key.toUpperCase()}"]`
  );
  const keyElement = document.querySelector(
    `.key[data-key="${key.toUpperCase()}"]`
  );
  if (!audio) return;

  keyElement.classList.add("active");
  audio.currentTime = 0;
  audio.play();

  setTimeout(() => {
    keyElement.classList.remove("active");
  }, 100);
}
