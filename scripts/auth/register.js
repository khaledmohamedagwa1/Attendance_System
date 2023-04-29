import * as validation from "./validation.js";
import * as helper from "./../common/helperMethods.js";

let waitingUsers = helper.getLocalStorageConvertedItem("waitingUsers");
let SignupForm = document.querySelector("form");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let address = document.getElementById("address");
let age = document.getElementById("age");
let agree = document.getElementById("agree");
let submit = document.getElementById("submit");

firstName.focus();
validation.inputValidation(firstName, "blur", validation.nameRegex);
validation.inputValidation(lastName, "blur", validation.nameRegex);
validation.inputValidation(email, "blur", validation.emailRegex);
validation.inputValidation(address, "blur", validation.addressRegex);
validation.inputValidation(age, "blur", validation.ageRegex);

SignupForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Check if email already exists in local storage
  if (
    helper.isEmailExistIn(email, helper.getLocalStorageConvertedItem("users"))
  ) {
    alert(
      "Email already exists in users. Please try again with a different email."
    );
    return;
  }
  if (waitingUsers.length > 0 && helper.isEmailExistIn(email, waitingUsers)) {
    alert(
      "Email already exists in waiting users. Please try again with a different email."
    );
    return;
  }

  // Save user data to local storage
  let user = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    address: address.value,
    age: age.value,
  };
  waitingUsers.push(user);
  helper.setStringfyJsonInLocalStoage("waitingUsers", waitingUsers);
  alert("Thank you for signing up. We will get back to you shortly.");
  SignupForm.reset();
});
