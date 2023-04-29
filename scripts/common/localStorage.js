import * as helper from "./helperMethods.js";
import * as DateObject from "./generateTimeObject.js";
let users = helper.getLocalStorageConvertedItem("users");
let admins = helper.getLocalStorageConvertedItem("admins");
let report = helper.getLocalStorageConvertedItem("report");
let waitingUsers = helper.getLocalStorageConvertedItem("waitingUsers");
//if users array not found create the default new array
if (!users) {
  users = [
    {
      id: 1,
      firstName: "khaled",
      lastName: "agwa",
      email: "khaledagwa88@gmail.com",
      userName: "khaledagwa88",
      password: "123456789",
      age: 25,
      role: "securityMan",
    },
    {
      id: 2,
      firstName: "khaled",
      lastName: "mohamed",
      email: "khaledagwa888@gmail.com",
      userName: "khaledagwa888",
      password: "123456789",
      age: 30,
      role: "employee",
    },
  ];
  helper.setStringfyJsonInLocalStoage("users", users);
}

if (!admins) {
  admins = [
    { id: 1, email: "khaledagwa@gmail.com", password: "159753KhaledAgwa" },
  ];
  helper.setStringfyJsonInLocalStoage("admins", admins);
}
if (!report) {
  helper.setStringfyJsonInLocalStoage(
    "report",
    DateObject.generateCurrentYearEmptyObject()
  );
}

if (!waitingUsers) {
  helper.setStringfyJsonInLocalStoage("waitingUsers", []);
}
