const paraArr = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fugit voluptate similique eveniet consectetur nemo exercitationem! Repudiandae pariatur at sapiente?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fugit voluptate similique eveniet consectetur nemo exercitationem! Repudiandae pariatur at sapiente?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fugit voluptate similique eveniet consectetur nemo exercitationem! Repudiandae pariatur at sapiente?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fugit voluptate similique eveniet consectetur nemo exercitationem! Repudiandae pariatur at sapiente?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fugit voluptate similique eveniet consectetur nemo exercitationem! Repudiandae pariatur at sapiente?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fugit voluptate similique eveniet consectetur nemo exercitationem! Repudiandae pariatur at sapiente?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fugit voluptate similique eveniet consectetur nemo exercitationem! Repudiandae pariatur at sapiente?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fugit voluptate similique eveniet consectetur nemo exercitationem! Repudiandae pariatur at sapiente?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fugit voluptate similique eveniet consectetur nemo exercitationem! Repudiandae pariatur at sapiente?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fugit voluptate similique eveniet consectetur nemo exercitationem! Repudiandae pariatur at sapiente?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fugit voluptate similique eveniet consectetur nemo exercitationem! Repudiandae pariatur at sapiente?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fugit voluptate similique eveniet consectetur nemo exercitationem! Repudiandae pariatur at sapiente?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fugit voluptate similique eveniet consectetur nemo exercitationem! Repudiandae pariatur at sapiente?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fugit voluptate similique eveniet consectetur nemo exercitationem! Repudiandae pariatur at sapiente?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fugit voluptate similique eveniet consectetur nemo exercitationem! Repudiandae pariatur at sapiente?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fugit voluptate similique eveniet consectetur nemo exercitationem! Repudiandae pariatur at sapiente?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fugit voluptate similique eveniet consectetur nemo exercitationem! Repudiandae pariatur at sapiente?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fugit voluptate similique eveniet consectetur nemo exercitationem! Repudiandae pariatur at sapiente?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fugit voluptate similique eveniet consectetur nemo exercitationem! Repudiandae pariatur at sapiente?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fugit voluptate similique eveniet consectetur nemo exercitationem! Repudiandae pariatur at sapiente?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fugit voluptate similique eveniet consectetur nemo exercitationem! Repudiandae pariatur at sapiente?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fugit voluptate similique eveniet consectetur nemo exercitationem! Repudiandae pariatur at sapiente?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fugit voluptate similique eveniet consectetur nemo exercitationem! Repudiandae pariatur at sapiente?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fugit voluptate similique eveniet consectetur nemo exercitationem! Repudiandae pariatur at sapiente?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fugit voluptate similique eveniet consectetur nemo exercitationem! Repudiandae pariatur at sapiente?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fugit voluptate similique eveniet consectetur nemo exercitationem! Repudiandae pariatur at sapiente?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fugit voluptate similique eveniet consectetur nemo exercitationem! Repudiandae pariatur at sapiente?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fugit voluptate similique eveniet consectetur nemo exercitationem! Repudiandae pariatur at sapiente?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fugit voluptate similique eveniet consectetur nemo exercitationem! Repudiandae pariatur at sapiente?",
];
/////////////////////////////
////////Selectors///////////
////////////////////////////
const btn = document.querySelector(".btn");
const display = document.querySelector(".display");
const form = document.querySelector(".form-container");
const input = document.querySelector("input");
const tabs = document.querySelector(".tabs");
const body = document.querySelector("body");
const gen = document.getElementById("gen-btn");
const clear = document.getElementById("clear-btn");
// console.log(gen);

//////////////////
/////Dynamic Heading//
///////////////////////
const element = document.createElement("h1");
element.className = "main-heading";
element.setAttribute("id", "top");
element.innerHTML = `<p>Max paragraphs that can be generated : ${paraArr.length}</p>`;
// console.log("hello", element);
document.body.insertBefore(element, tabs);

///////////////////////////////
///////Code to generate paragraphs/////
//////////////////////////
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const value = parseInt(input.value);
  //   console.log(isNaN(value));
  document.appendChild = element;
  if (isNaN(value) || value <= 0 || value > paraArr.length) {
    display.innerHTML = `<p class="para" style="background-color:red;color:white;">If you have typed negative value(s) or value(s) more than 9 or nothing in the input box, then you can only see this paragraph </p>`;
  } else {
    tabs.style.display = "grid";
    let slicedArr = paraArr.slice(0, value);
    const arr = slicedArr
      .map(function (text, index) {
        return `<li class="para" id="${index + 1}">${text} <a href="#top">

        <div class="icon-container">
            <i class="fa fa-hand-o-up" id="up-icon"></i>
            <p class="back-to-top">Back To Top</p>
        </div>
    </a></li>`;
      })
      .join("");
    // arr.join("");
    // console.log(arr);
    display.innerHTML = arr;

    ///////////////////////////////////
    ////////TABS///////////
    const tabBtns = slicedArr
      .map(function (btn, index) {
        return ` <a href="#${
          index + 1
        }"><button class="tab-btn">Para${index + 1}</button></a>`;
      })
      .join("");
    // console.log(tabBtns);
    // for (let i = 0; i < slicedArr.length; i++) {
    tabs.innerHTML = tabBtns;
    //   console.log("added");
    // }
  }
});
///////////////////////
/////CODE TO CLEAR PARAS//
/////////////////////////
clear.addEventListener("click", function (e) {
  //   console.log(e.currentTarget);
  display.innerHTML = ``;
  tabs.innerHTML = ``;
  tabs.style.display = "none";
});
