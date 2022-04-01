const modalBtn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-btn");
const modalScreen = document.querySelector(".modal");
modalBtn.addEventListener("click", function () {
  modalScreen.classList.add("modalShow");
});
closeBtn.addEventListener("click", function () {
  modalScreen.classList.remove("modalShow");
});
