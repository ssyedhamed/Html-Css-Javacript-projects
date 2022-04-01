const hexArray = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
const color = document.querySelector(".color_code");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  let colorCode = "#";
  for (let i = 0; i < 6; i++) {
    colorCode += hexArray[Math.floor(Math.random() * hexArray.length)];
  }
  console.log(colorCode);
  color.textContent = colorCode;
  document.body.style.backgroundColor = colorCode;
});
