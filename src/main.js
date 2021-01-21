/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const creditCard = document.querySelector("#myCard");
const cvc = document.querySelector("#myCvc");
const amount = document.querySelector("#myAmount");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const city = document.querySelector("#city");
const state = document.querySelector("#state");
const postalCode = document.querySelector("#postalCode");
const textArea = document.querySelector("#textArea");
const citys = ["madrid", "barcelona", "sevilla", "almeria", "zaragoza"];
const states = ["01", "02", "03", "04", "05"];

window.onload = () => {
  checkCreditCard(creditCard);
  checkCvc(cvc);
  checkAmount(amount);
  checkFirstAndLastName(firstName);
  checkFirstAndLastName(lastName);
};

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
const checkCreditCard = input => {
  input.addEventListener("focusout", event => {
    isNumber(input) && input.value.length >= 14 && input.value.length <= 19
      ? isValid(input)
      : isInvalid(input);
  });
};

const checkCvc = input => {
  input.addEventListener("focusout", event => {
    isNumber(input) && input.value.length >= 3 && input.value.length <= 4
      ? isValid(input)
      : isInvalid(input);
  });
};

const checkAmount = input => {
  input.addEventListener("focusout", event => {
    Number(input.value) && input.value < 10000
      ? isValid(input)
      : isInvalid(input);
  });
};

const checkFirstAndLastName = input => {
  input.addEventListener("focusout", event => {
    isText(input) && input.value.length > 0 && input.value.length < 150
      ? isValid(input)
      : isInvalid(input);
  });
};

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

const isInvalid = input => {
  input.classList.remove("is-valid");
  input.classList.add("is-invalid");
};

const isValid = input => {
  input.classList.add("is-valid");
  input.classList.remove("is-invalid");
};

const isNumber = input => {
  return Number(input.value) % 1 == 0;
};

const isText = input => {
  let inputText = /^[a-zA-Z]+$/.test(input.value);
  return inputText;
};
// forEach para recorrer la lista de todos los inputs y ver si tienen algún invalid.

function validateForm() {
  checkCreditCardAndCvcAndAmount(creditCard);
  checkCreditCardAndCvcAndAmount(cvc);
  checkCreditCardAndCvcAndAmount(amouunt);
  checkFirstAndLastName(firstName);
  checkFirstAndLastName(lastName);
  checkCity();
  checkState();
}

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
