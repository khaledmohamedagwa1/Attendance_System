import * as session from "./../common/session.js";
import * as constant from "./../common/constant.js";
let currentUser = null;

let logout = document.getElementById("logout");
let currentURl = location.href;
let urlParts = currentURL.split("/");

logout.addEventListener("click", function () {
if(urlParts[length - 2] == "admin"])
{
let loginUrl = urlParts.slice(0,-2).join("/");
location.replace(loginUrl);
return;
}
  session.setSession(currentUser);
  location.replace("index.html");
});
