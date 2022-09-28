let button = document.getElementById("button");
let code = document.getElementById("code");
let hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let body = document.querySelector("body");

function changeHex() {
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * hexValues.length);
    hex += hexValues[index];
  }
  console.log(hex);
  code.textContent = hex;
  body.style.backgroundColor = hex;
}
button.addEventListener("click", changeHex);
// let a = "";
// let list = [1, 2, 3, 4, "q", "w", "e"];

// for (let i = 0; i < list.length; i++) {
//   a += list[i];
// }
// // console.log(object);
// for (let i = 0; i < 15; i++) {
//   console.log("Cuma");
// }
