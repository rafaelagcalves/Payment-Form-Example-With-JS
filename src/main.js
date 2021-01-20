/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const creditCard = document.querySelector("#myCard");
const cvc = document.querySelector("#myCvc");
const amouunt = document.querySelector("#myAmount");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const city = document.querySelector("#city");
const state = document.querySelector("#state");
const postalCode = document.querySelector("#postalCode");
const textArea = document.querySelector("#textArea");
const citys = ["madrid", "barcelona", "sevilla", "almeria", "zaragoza"];
const states = ["01", "02", "03", "04", "05"];

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

// 1234123412341234
function checkCreditCardAndCvcAndAmount(input) {
  input.addEventListener("focusout", event => {
    let inputValue = input.value;
    if (inputValue.length > 0 && inputValue.length < 150) {
      input.classList.add("is-valid");
      input.classList.remove("is-invalid");
    } else {
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
    }
  });
}

function checkFirstAndLastName(input) {
  input.addEventListener("focusout", event => {
    let inputValue = input.value;
    if (inputValue.length > 0 && inputValue.length < 150) {
      input.classList.add("is-valid");
      input.classList.remove("is-invalid");
    } else {
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
    }
  });
}

function checkCity() {
  city.addEventListener("focusout", event => {
    let cityValue = city.value;
    cityValue = cityValue.toLowerCase();
    city.value = cityValue.charAt(0).toUpperCase() + cityValue.slice(1);
    if (citys.includes(cityValue)) {
      city.classList.add("is-valid");
      city.classList.remove("is-invalid");
    } else {
      city.classList.remove("is-valid");
      city.classList.add("is-invalid");
    }
  });
}

function checkState() {
  state.addEventListener("focusout", event => {
    let stateValue = state.value;
    if (states.includes(stateValue)) {
      state.classList.add("is-valid");
      state.classList.remove("is-invalid");
    } else {
      state.classList.remove("is-valid");
      state.classList.add("is-invalid");
    }
  });
}

function checkPostalCode() {
  postalCode.addEventListener("focusout", event => {
    let postalCode = postalCode.value;
    if (postalCode.length > 0 && postalCode.length <= 5) {
      postalCode.classList.add("is-valid");
      state.classList.remove("is-invalid");
    } else {
      state.classList.remove("is-valid");
      state.classList.add("is-invalid");
    }
  });
}

function validateForm() {
  checkCreditCardAndCvcAndAmount(creditCard);
  checkCreditCardAndCvcAndAmount(cvc);
  checkCreditCardAndCvcAndAmount(amouunt);
  checkFirstAndLastName(firstName);
  checkFirstAndLastName(lastName);
  checkCity();
  checkState();
}

window.onload = () => {
  validateForm();
};
//  let form = document.querySelectorAll("#form");
//  form.addEventListener("submit", validateForm());
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
