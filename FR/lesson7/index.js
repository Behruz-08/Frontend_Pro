const decrementButton = document.getElementById("decrement");
const incrementButton = document.getElementById("increment");
const countElement = document.getElementById("count");
const colorBlock = document.getElementById("color-block");

var count = 0;

function updateCounter() {
  countElement.textContent = count;

  if (count >= 0 && count <= 3) {
    colorBlock.className = "red";
  } else if (count >= 4 && count <= 6) {
    colorBlock.className = "yellow";
  } else if (count >= 7 && count <= 9) {
    colorBlock.className = "green";
  }
}

decrementButton.addEventListener("click", function () {
  if (count > 0) {
    count--;
    updateCounter();
  }
});

incrementButton.addEventListener("click", function () {
  if (count < 9) {
    count++;
    updateCounter();
  }
});

updateCounter();
