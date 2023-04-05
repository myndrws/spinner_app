
// need second script to deal with second wheel

let container2 = document.querySelector("#work_spinner");
let btn2 = document.getElementById("spin2");

btn2.onclick = function () {
  let number2 = Math.ceil(Math.random() * 10000);
  container2.style.transform = "rotate(" + number2 + "deg)";
  number2 += Math.ceil(Math.random() * 10000);
};