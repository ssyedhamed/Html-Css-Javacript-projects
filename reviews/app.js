const reviews = [
  {
    id: 1,
    name: "syed hamed",
    role: "java developer",
    image:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=700&q=60",
    info: "hello im loving your videos a lot... this is my first ever review on youtube. .... and you made me do that... thanks!",
  },
  {
    id: 2,
    name: "syed akheel",
    role: "python developer",
    image:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=700&q=60",
    info: "hello im loving your videos a lot... this is my first ever review on youtube. .... and you made me do that... thanks!",
  },
  {
    id: 3,
    name: "syed junaid",
    role: "full stack developer",
    image:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=700&q=60",
    info: "hello im loving your videos a lot... this is my first ever review on youtube. .... and you made me do that... thanks!",
  },
];
//selection of elements

const image = document.getElementById("image");
const author = document.getElementById("author");
const role = document.getElementById("role");
const info = document.getElementById("info");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const random = document.querySelector(".random-btn");
const newNextBtn = document.querySelector(".new-btn");
const newPrevBtn = document.querySelector(".new-btn");
// console.log(image, author, role, info, nextBtn, prevBtn, random);

// console.log(name);
let currentPerson = 0;
window.addEventListener("DOMContentLoaded", function () {
  //   document.body.style.backgroundColor = "yellow";
  showPerson(currentPerson);
});

function showPerson(person) {
  const values = reviews[person];
  image.src = values.image;
  author.textContent = values.name;
  role.textContent = values.role;
  info.textContent = values.info;
}

nextBtn.addEventListener("click", function () {
  //   naMe.textContent = reviews[0].name;
  currentPerson++;
  if (currentPerson > reviews.length - 1) {
    // currentPerson = 0;
    nextBtn.style.visibility = "hidden";
    // newNextBtn.style.display = "block";
    // newNextBtn.style.backgroundColor = "white";
    // prevBtn.style.display = "inline-block";
    prevBtn.style.visibility = "visible";
  } else {
    showPerson(currentPerson);
  }
});

prevBtn.addEventListener("click", function () {
  //   naMe.textContent = reviews[0].name;
  currentPerson--;
  if (currentPerson < 0) {
    prevBtn.style.visibility = "hidden";
    nextBtn.style.visibility = "visible";
    // currentPerson = reviews.length - 1;
  } else {
    showPerson(currentPerson);
  }
});

random.addEventListener("click", function () {
  currentPerson = Math.floor(Math.random() * reviews.length);
  //   currentPerson = Math.random() ;
  showPerson(currentPerson);
  console.log(currentPerson);
});
