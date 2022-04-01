let count = 0;
const increase = document.querySelector(".increase");
const value = document.querySelector(".value");
const allbtns = document.querySelectorAll(".btn");

// allbtns.forEach(function (btn) {
//   console.log(btn);
//   btn.addEventListener("click", function (e) {
//     console.log(e.currentTarget.value);
//     if ((e.currentTarget.value = "increase")) {
//       count++;
//       value.style.color = "green";
//       value.style.backgroundColor = "cyan";
//     } else if ((e.currentTarget.value = "decrease")) {
//       count--;
//       value.style.color = "red";
//       value.style.backgroundColor = "grey";
//     } else {
//       count = 0;
//     }
//     value.textContent = count;
//   });
// });

// increase.addEventListener("click", function () {
//   count++;
// });

allbtns.forEach(function (btn) {
  console.log(btn.classList);

  //   specific button events
  btn.addEventListener("click", function (e) {
    console.log(e.currentTarget.classList);

    //iterating over btns
    if (e.currentTarget.classList.contains("increase")) {
      count++;
    } else if (e.currentTarget.classList.contains("decrease")) {
      count--;
    } else {
      count = 0;
    }

    value.textContent = count;
  });
});
