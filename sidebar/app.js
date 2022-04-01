const toggle = document.querySelector(".toggle");
const menuIcon = document.getElementById("menu");
const closeIcon = document.getElementById("close");

const aside = document.querySelector("aside");
console.log(toggle, aside);

toggle.addEventListener(
  "click",
  function () {
    aside.classList.toggle("showAside");
  },
  true
);
menuIcon.addEventListener("click", function () {
  menuIcon.style.display = "none";
  closeIcon.style.display = "block";
});
closeIcon.addEventListener("click", function () {
  menuIcon.style.display = "block";
  closeIcon.style.display = "none";
});
