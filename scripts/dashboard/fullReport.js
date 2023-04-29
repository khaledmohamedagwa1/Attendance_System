import * as reusable from "./../common/reusableComponent.js";
import * as helper from "./../common/helperMethods.js";
import * as mail from "./mail.js";
let users = helper.getLocalStorageConvertedItem("users");
let tBody = document.querySelector("table");
if (users.length > 0) {
  for (let i = 0, length = users.length; i < length; i++) {
    let { firstName, lastName, email, address, age, role, userName, password } =
      users[i];
    let row = reusable.createCollapseRow(
      i,
      firstName,
      lastName,
      email,
      age,
      role,
      userName,
      password
    );
    let temporaryTbody = document.createElement("tbody");
    temporaryTbody.innerHTML = row;
    let deleteButton = temporaryTbody.querySelector("button");
    deleteButton.addEventListener("click", function () {
      users.splice(i, 1);
      helper.setStringfyJsonInLocalStoage("users", users);
    });
    tBody.appendChild(temporaryTbody);
  }
}
