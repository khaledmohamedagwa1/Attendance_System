import * as authentication from "./userAuthentication.js";
var addAttendceAcceptionTap = false;
if (authentication.currentUser.role == "securityMan") {
  addAttendceAcceptionTap = true;
} else if (authentication.currentUser.role == "employee") {
  addAttendceAcceptionTap = false;
}
if (addAttendceAcceptionTap) {
  window.addEventListener("load", function () {
    let navBarNav = document.getElementById("navs");
    let li = document.createElement("li");
    li.innerHTML =
      '<a class="nav-link " href="confirmAttandence.html">Confirm Attendance </a>';
    li.classList.add("nav-item");
    navBarNav.appendChild(li);
  });
}
