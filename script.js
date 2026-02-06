function goTo(n) {
  document.querySelectorAll(".card").forEach(card => {
    card.classList.add("hidden");
  });
  document.getElementById("screen" + n).classList.remove("hidden");
}

function wrongRose() {
  document.getElementById("roseMsg").innerText =
    "This one is pretty, but try another!";
}

function rightRose() {
  document.getElementById("roseMsg").innerText =
    "You found it! Opening the letter…";
  setTimeout(() => goTo(4), 1200);
}
function createHeart(x, y) {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = x + "px";
  heart.style.top = y + "px";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 1000);
}

/* Desktop - mouse */
document.addEventListener("mousemove", function (e) {
  createHeart(e.pageX, e.pageY);
});

/* Mobile - touch */
document.addEventListener("touchmove", function (e) {
  const touch = e.touches[0];
  createHeart(touch.pageX, touch.pageY);
});

/* Mobile - tap */
document.addEventListener("touchstart", function (e) {
  const touch = e.touches[0];
  createHeart(touch.pageX, touch.pageY);
});