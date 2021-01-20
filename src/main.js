/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function showError(input) {
  let errorMessage = document.querySelector("#fail");
  errorMessage.classList.remove("d-none");
  input.classList.add("is-invalid");
  setTimeout(function() {
    errorMessage.classList.add("d-none");
  }, 3000);
}

function showSent(input) {
  let succesMessage = document.querySelector("#succesMessage");
  succesMessage.classList.remove("d-none");
  input.classList.add("is-valid");
  setTimeout(function() {
    succesMessage.classList.add("d-none");
  }, 3000);
}

const creditCard = document.querySelector("#myCard");
const cvc = document.querySelector("#myCvc");
const amouunt = document.querySelector("#myAmount");
const FirstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const city = document.querySelector("#city");
const state = document.querySelector("#state");
//const city = document.querySelector("#lastName");
const textArea = document.querySelector("#textArea");
// 1234123412341234
function checkCreditCardAndCvc(input) {
  input.addEventListener("focusout", event => {
    if (/[^\d,]/.test(event.key) && event.key !== "Backspace") {
      showSent(input);
    } else {
      showError(input);
    }
  });
}

window.onload = () => {
  checkCreditCardAndCvc(creditCard);
  checkCreditCardAndCvc(cvc);
};
//   let form = document.querySelectorAll("#form");
//   form.addEventListener("submit", validateForm());
//   let creditCard = document.querySelector("#myCard");
//   creditCard.addEventListener("focusout", validateForm());

//   function validateForm() {
//     //preventDefault();
//     checkCreditCard();
//   }
//}

// function validateForm() {
//   //preventDefault();
//   checkCreditCard();
// }
// function checkCreditCard() {
//   let creditCard = document.querySelector("#myCard");
//   creditCard.addEventListener("keydown", event => {
//     if (/[^\d,]/.test(event.key) && event.key !== "Backspace") {
//     }
//   });
// }

// // let cardValue = creditCard.value;
//     //"focusout" //let cardValue = creditCard.value
//     //     });
// function validateForm() {
//   //preventDefault();
//   checkCreditCard();
// }

// function checkCreditCard() {
//   let creditCard = document.querySelector("#myCard");
//   creditCard.addEventListener("input", event => {
//     // let cardValue = creditCard.value;
//     //"focusout" //let cardValue = creditCard.value
//     if (event.data >= 0) {
//       console.log("has tecleado numeros");
//     } else {
//       showError(creditCard);
//     }
//   });
// }

// //   let myButton = document.querySelector("#mySend");
// //   myButton.addEventListener("click", event => {
// //     event.preventDefault();
// //     if (creditCard.value === "") {
// //       showError(creditCard);
// //     }
// //   });
// // };

// //   let creditCard = document.querySelector("#myCard");
// //   creditCard.addEventListener("input", event => {
// //     console.log(event);
// //     if (event>= 0) {
// //       console.log("has tecleado numeros");
// //     } else {
// //       console.log("has tecleado algo que no es un numero");
// //       creditCard.classList.add("bg-danger");
// //     }
// //   });
// //this.submit();
// //}
// //let myButton = document.querySelector("#mySend");
// //let creditCard = document.querySelector("#myCard");
// //  myButton.addEventListener("click", event => {
// //    console.log(event);
// //    if (event.size == 16) {
// //      event.preventDefault();
// //    }
// //creditCard.addEventListener("keypress", event => {
// //console.log(event);
// //     if (23) {
// //       console.log("estas pulsadno numeros");
// //     } else {
// //       console.log("no estas pulsando numeros");
// //       creditCard.classList.add("bg-danger");
// //     }
// //   });
// //   creditCard.addEventListener("change", event => {
// //     console.log(event);
// //   });
// // });
