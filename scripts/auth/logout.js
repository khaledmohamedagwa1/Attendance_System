import * as session from "./../common/session.js";
import * as constant from "./../common/constant.js";
let currentUser = null;
let logout = document.getElementById("logout");
logout.addEventListener("click", function () {
  console.log("logOut Found");
  session.setSession(currentUser);
  location.replace("index.html");
});
