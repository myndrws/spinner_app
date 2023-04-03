

let container1 = document.querySelector("#name_spinner");
let container2 = document.querySelector("#work_spinner");
let btn = document.getElementById("spin1");
let btn2 = document.getElementById("spin2");
let number1 = Math.ceil(Math.random() * 10000);
let number2 = Math.ceil(Math.random() * 10000);

btn.onclick = function () {
  container1.style.transform = "rotate(" + number1 + "deg)";
  number1 += Math.ceil(Math.random() * 10000);

}

btn2.onclick = function () {
  container2.style.transform = "rotate(" + number2 + "deg)";
  number2 += Math.ceil(Math.random() * 10000);

}
