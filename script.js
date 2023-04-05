
// first script to deal with first wheel

let container1 = document.querySelector("#name_spinner");
let btn1 = document.getElementById("spin1");

btn1.onclick = function () {
  let number1 = Math.ceil(Math.random() * 10000);
  container1.style.transform = "rotate(" + number1 + "deg)";
  number1 += Math.ceil(Math.random() * 10000);
};