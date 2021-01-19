/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  let myButton = document.querySelector("#mySend");
  let creditCard = document.querySelector("#myCard");

  //  myButton.addEventListener("click", event => {
  //    console.log(event);
  //    if (event.size == 16) {
  //      event.preventDefault();
  //    }

  creditCard.addEventListener("keypress", event => {
    console.log(event);
    if (23) {
      console.log("estas pulsadno numeros");
    } else {
      console.log("no estas pulsando numeros");
      creditCard.classList.add("bg-danger");
    }
  });

  creditCard.addEventListener("change", event => {
    console.log(event);
  });

  // });
};
