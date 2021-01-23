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
const form = document.querySelector("#form");
const citys = ["madrid", "barcelona", "sevilla", "almeria", "zaragoza"];
const states = ["01", "02", "03", "04", "05"];
const cancelText = ["mierda", "subnormal", "estupido"];

window.onload = () => {
  checkCreditCard(creditCard);
  checkCvc(cvc);
  checkAmount(amount);
  checkFirstAndLastName(firstName);
  checkFirstAndLastName(lastName);
  checkCity(city);
  checkState(state);
  checkPostalCode(postalCode);
  checkTextArea(textArea);
};

const showError = input => {
  let errorMessage = document.querySelector("#fail");
  errorMessage.classList.remove("d-none");
  input.classList.add("is-invalid");
  setTimeout(function() {
    errorMessage.classList.add("d-none");
  }, 3000);
};

const showSent = input => {
  let succesMessage = document.querySelector("#succesMessage");
  succesMessage.classList.remove("d-none");
  input.classList.add("is-valid");
  setTimeout(function() {
    succesMessage.classList.add("d-none");
  }, 3000);
};

// 1234123412341234 // añadir el algoritmo de LU
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

const checkCity = input => {
  input.addEventListener("focusout", event => {
    let cityValue = city.value;
    cityValue = cityValue.toLowerCase();
    city.value = cityValue.charAt(0).toUpperCase() + cityValue.slice(1);
    isText(input) && citys.includes(cityValue)
      ? isValid(input)
      : isInvalid(input);
  });
};

const checkState = input => {
  input.addEventListener("focusout", event => {
    let stateValue = state.value;
    states.includes(stateValue) ? isValid(input) : isInvalid(input);
  });
};

const checkPostalCode = input => {
  input.addEventListener("focusout", event => {
    isNumber(input) && input.value.length == 5
      ? isValid(input)
      : isInvalid(input);
  });
};
// revisar
const checkTextArea = input => {
  input.addEventListener("focusout", event => {
    !cancelText.includes(input.value) ? isValid(input) : isInvalid(input);
  });
};

const checkForm = input => {
  input.addEventListener("submit", event => {
    event.preventDefault();
  });
};

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
  let inputText = /^[a-zA-Z\s]+$/.test(input.value);
  return inputText;
};
// forEach para recorrer la lista de todos los inputs y ver si tienen algún invalid.

const validateForm = event => {
  event.preventDefault();
  checkCreditCard(creditCard);
  checkCvc(cvc);
  checkAmount(amount);
  checkFirstAndLastName(firstName);
  checkFirstAndLastName(lastName);
  checkCity(city);
  checkState(state);
  checkPostalCode(postalCode);
  checkTextArea(textArea);
};
