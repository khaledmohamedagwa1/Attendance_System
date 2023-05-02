import * as validation from "./validation.js";
import * as helper from "./../common/helperMethods.js";
import * as mail from "./../dashboard/mail.js";
const submit = document.getElementById("submit");
const form = document.forms[0];
const emailInput = document.getElementById("email");
const invalidFeedback = document.getElementsByClassName("invalid-feedback")[0];
const inValidEmailMessage = "Invalid email address.";
const emailNotFoundMessage = "Email Not Found.";
let isValid = validation.inputValidation(
  emailInput,
  "blur",
  validation.emailRegex
);
if (!isValid) {
  invalidFeedback.innerText = inValidEmailMessage;
}
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let isExist = helper.getUserObjectByEmail(
    email,
    helper.getLocalStorageConvertedItem("users")
  );
  if (isExist) {
    mail.sendEmail(
      true,
      isExist.email,
      isExist.firstName,
      isExist.lastName,
      isExist.role,
      isExist.userName,
      isExist.password
    );
    alert("We Will Send You Email With New Password");
  } else {
    alert(emailNotFoundMessage);
  }
});
