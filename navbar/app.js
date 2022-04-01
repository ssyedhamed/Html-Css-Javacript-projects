const button = document.querySelector("button");
const menu = document.getElementById("menu");
const close = document.getElementById("close");

const ul = document.querySelector("ul");
button.addEventListener("click", function () {
  //   if (ul.classList.contains("ulShow")) {
  //     ul.classList.remove("ulShow");
  //     console.log(ul.classList);
  //   } else {
  //     ul.classList.add("ulShow");
  //     console.log(ul.classList);
  //   }

  ul.classList.toggle("ulShow");
});

menu.addEventListener("click", function () {
  menu.style.display = "none";
  close.style.display = "block";
});

close.addEventListener("click", function () {
  menu.style.display = "block";
  close.style.display = "none";
});
