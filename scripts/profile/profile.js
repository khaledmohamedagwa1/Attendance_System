import * as helper from "./../common/helperMethods.js";
import * as constant from "./../common/constant.js";
/* show the user data from the session data and set it in the input */
//first check the data if found
let inputs = document.getElementsByTagName("input");
let currentUserOBject = JSON.parse(sessionStorage.getItem("currentUser"));

if (currentUserOBject) {
  let { id, firstName, lastName, email, userName, password } =
    currentUserOBject;

  for (let i = 0, length = inputs.length; i < length; i++) {
    if (inputs[i].name === "firstName") {
      inputs[i].value = firstName;
    } else if (inputs[i].name === "lastName") {
      inputs[i].value = lastName;
    } else if (inputs[i].name === "password") {
      inputs[i].value = password;
    }
  }
}
//if the data not found in the session direct the user to login page again
else {
  window.location.replace(constant.loginUrl);
}
//select the edit button

let editButton = document.querySelector(".edit-profile-btn");
let saveButton = document.querySelector('button[type="submit"]');
editButton.addEventListener("click", function () {
  helper.toggleInputState(inputs);
  editButton.classList.add("disabled");
  saveButton.removeAttribute("disabled");
});
saveButton.addEventListener("click", function (e) {
  //update the new values in the users object in the local storage
  //first get the current user by it is id from local storage user object
  e.preventDefault();
  let users = helper.getLocalStorageConvertedItem("users");
  for (let i = 0, length = users.length; i < length; i++) {
    if (currentUserOBject.id === users[i].id) {
      users[i].firstName = inputs[0].value;
      users[i].lastName = inputs[1].value;
      users[i].password = inputs[2].value;
      helper.setStringfyJsonInLocalStoage("users", users);
      break;
    }
  }

  helper.toggleInputState(inputs);
  editButton.classList.remove("disabled");
  saveButton.disabled = true;
  //update the new values in the current session
});
