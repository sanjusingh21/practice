import { showVariables } from './functions.js';

showVariables();

let heading1 = document.getElementById("heading1");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => heading1.innerText = "Heading1 is clicked");

