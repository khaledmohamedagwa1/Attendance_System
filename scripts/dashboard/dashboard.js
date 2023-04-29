import * as reusable from "./../common/reusableComponent.js";
import * as helper from "./../common/helperMethods.js";
import * as mail from "./mail.js";
let waitingUsers = helper.getLocalStorageConvertedItem("waitingUsers");
let tBody = document.querySelector("table");
if (waitingUsers.length > 0) {
  for (let i = waitingUsers.length - 1; i >= 0; i--) {
    let selectedValue;
    let { firstName, lastName, email, address, age } = waitingUsers[i];
    let row = reusable.createCollapseRow(i, firstName, lastName, email, age);
    let temporaryDiv = document.createElement("tbody");
    temporaryDiv.innerHTML = row;
    let acceptButton = temporaryDiv.querySelector(".btn-success");
    let rejectBtn = temporaryDiv.querySelector(".btn-danger");
    acceptButton.addEventListener("click", function () {
      //validate the user role
      if (selectedValue == undefined) {
        alert(`please Select a user Rule`);
        return;
      }
      //get the last user id in the user list
      let users = helper.getLocalStorageConvertedItem("users");
      let lastID = users[users.length - 1].id;

      let generatedPassword = helper.generateRandomPassword(8);
      let generatedUsername = helper.generateUserName(email);
      //create user object
      let user = {
        id: lastID + 1,
        firstName: firstName,
        lastName: lastName,
        email: email,
        age: age,
        password: generatedPassword,
        username: generatedUsername,
        role: selectedValue,
      };
      //push it to the array of users objects
      users.push(user);
      //save the array
      helper.setStringfyJsonInLocalStoage("users", users);
      //send user email

      mail.sendEmail(
        true,
        email,
        firstName,
        lastName,
        selectedValue,
        generatedUsername,
        generatedPassword
      );
      //remove the user from the ui
      acceptButton.closest("tbody").remove();
      //remove the user from the local storage
      waitingUsers.splice(i, 1);
      helper.setStringfyJsonInLocalStoage("waitingUsers", waitingUsers);
    });
    rejectBtn.addEventListener("click", function () {
      //send reject mail
      mail.sendEmail(false, firstName, lastName);
      //remove tthe user from the ui
      rejectBtn.closest("tbody").remove();
    });
    let dropdownItems = temporaryDiv.querySelectorAll("tr td .dropdown-item");
    dropdownItems.forEach((item) => {
      item.addEventListener("click", () => {
        selectedValue = item.getAttribute("data-value");
        console.log(selectedValue);
      });
    });
    tBody.appendChild(temporaryDiv);
  }
}
