import * as validation from "./validation.js";
import * as helper from "./../common/helperMethods.js";
import * as constant from "./../common/constant.js";
import * as session from "./../common/session.js";
const password = document.getElementById("password");
const email = document.getElementById("email");
const toggleButton = document.getElementById("togglePassword");
const loginForm = document.querySelector("form");

toggleButton.addEventListener("click", function () {
  if (password.type === "password") {
    password.type = "text";
    toggleButton.textContent = "Hide";
  } else {
    password.type = "password";
    toggleButton.textContent = "Show";
  }
});
email.focus();
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let isAdmin = helper.getUserObjectByEmail(
    email,
    helper.getLocalStorageConvertedItem("admins")
  );
  let isEmployee = helper.getUserObjectByEmail(
    email,
    helper.getLocalStorageConvertedItem("users")
  );

  if (isAdmin) {
    if (isAdmin.password == password.value) {
      session.setSession(isAdmin);
      window.location.replace(constant.dashboardURL);
    } else {
      alert("password is Incorrect");
    }
  } else if (isEmployee) {
    if (isEmployee.password == password.value) {
      session.setSession(isEmployee);
      window.location.replace(constant.homeEmployeeURL);
    } else {
      alert("password is Incorrect");
    }
  } else {
    alert("email not found");
  }
});
