const questions = document.querySelectorAll(".questions");
const openButtons = document.querySelectorAll(".plus-icon");
const closeButtons = document.querySelectorAll(".minus-icon");
const answers = document.querySelectorAll(".answers");
const qnas = document.querySelectorAll(".qna");
// console.log(questions, openButtons, answers, qna, closeButtons);

qnas.forEach(function (qna) {
  const plusBtn = qna.firstElementChild.lastElementChild;
  // console.log("plusbtns", plusBtn);
  const ans = qna.lastElementChild;
  // console.log(answers, ans);
  const minusBtn = qna.lastElementChild.lastElementChild;
  console.log(minusBtn);

  plusBtn.addEventListener("click", function (e) {
    ans.classList.toggle("showAnswers");
    console.log(ans.classList);

    answers.forEach(function (item) {
      if (item != ans) {
        item.classList.remove("showAnswers");
      }
    });
  });
  minusBtn.addEventListener("click", function (e) {
    ans.classList.toggle("showAnswers");
    answers.forEach(function (item) {
      if (item != ans) {
        item.classList.remove("showAnswers");
      }
    });
  });
});
