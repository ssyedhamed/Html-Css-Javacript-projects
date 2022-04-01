const simpleColors = [
  "red",
  "green",
  "blue",
  "cyan",
  "black",
  "orange",
  "brown",
  "gray",
];
const colorCode = document.querySelector(".color_code");
const button = document.querySelector(".btn");
const div = document.querySelector("div");
// console.log("hello world");
// console.log(colorCode.classList);
// console.log(button);

// function changeCodeName() {}
function changeColor() {
  const randomNum = Math.floor(Math.random() * simpleColors.length);

  console.log(randomNum);
  document.body.style.backgroundColor = simpleColors[randomNum];
  colorCode.textContent = simpleColors[randomNum];

  const element = document.createElement("h1");
  const text = document.createTextNode(`randomNum:${randomNum}`);
  element.appendChild(text);
  console.log(element.textContent);
  button.style.backgroundColor = simpleColors[randomNum];
  if (randomNum == 4) {
    button.style.color = "white";
  }
  if (div.contains(element)) {
    console.log("replaced");
  }
}

// changeColor();
button.addEventListener("click", changeColor);
