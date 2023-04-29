import * as DateObject from "./../common/generateTimeObject.js";
import * as helper from "./../common/helperMethods.js";
import * as constant from "./../common/constant.js";

//select the report object
let reportObject = helper.getLocalStorageConvertedItem("report");
//check if not found in local storage

//check for the year object equal to the current year

const currentYear = new Date().getFullYear();
if (reportObject.currentYear !== currentYear) {
  helper.setStringfyJsonInLocalStoage(
    "report",
    DateObject.generateCurrentYearEmptyObject()
  );
  reportObject = helper.getLocalStorageConvertedItem("report");
}

const currentTime = new Date();
const currentMonth = currentTime.getMonth();
const currentDay = currentTime.getDate();
let currentDayArray = reportObject.months[currentMonth].dayOfMonth[currentDay];
//when dom loaded read from local storage to update the table
document.addEventListener("DOMContentLoaded", function () {
  updateAttendanceTable(currentDayArray);
});

const usernameInput = document.getElementById("usernameInput");
const attendanceTableBody = document.getElementById("attendanceTableBody");
const buttonAttendence = document.querySelector("#addAttendanceButton");
let foundUser;
usernameInput.addEventListener("input", function () {
  const users = JSON.parse(localStorage.getItem("users"));
  const enteredUsername = usernameInput.value.trim().toLowerCase();
  foundUser = users.find((user) => user.userName == enteredUsername);

  if (foundUser) {
    buttonAttendence.disabled = false;
    usernameInput.style.borderColor = "green";
    usernameInput.style.boxShadow = "0 0 3px green";
  } else {
    buttonAttendence.disabled = true;
    usernameInput.style.borderColor = "red";
    usernameInput.style.boxShadow = "0 0 3px red";
  }
});

function updateAttendanceTable(currentDayArray) {
  attendanceTableBody.innerHTML = "";
  currentDayArray.forEach((attendance) => {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>${attendance.userName}</td>
      <td>${attendance.startTime}</td>
      <td>${attendance.endTime || ""}</td>
    `;
    attendanceTableBody.appendChild(newRow);
  });
}

buttonAttendence.addEventListener("click", function () {
  const currentTime = new Date();
  const currentMonth = currentTime.getMonth();
  const currentDay = currentTime.getDate();
  let currentDayArray =
    reportObject.months[currentMonth].dayOfMonth[currentDay];

  let isExist = currentDayArray.find(
    (currentDayAttendUser) =>
      foundUser.userName === currentDayAttendUser.userName
  );
  if (currentTime <= constant.endTime && currentTime >= constant.startTime) {
    //check if the user exist in the day array
    if (isExist) {
      //if the user exist but have an end time before
      if (isExist.endTime) {
        alert("The User Are Logged Out Before");
      }
      //the user does not have exist time
      else {
        isExist.endTime = currentTime.toLocaleTimeString();
      }
    }
    //if the user not in the login "login for the first Time"
    else {
      let userAttendent = {
        userName: foundUser.userName,
        startTime: currentTime.toLocaleTimeString(),
        endTime: null,
      };
      currentDayArray.push(userAttendent);
    }
  } else {
    alert("You are to LogIn Or LogOut in Out work Hours");
  }
  //save the last updated object
  helper.setStringfyJsonInLocalStoage("report", reportObject);
  //update the ui to the current date array
  updateAttendanceTable(currentDayArray);
  usernameInput.value = "";
  usernameInput.style.borderColor = "";
  usernameInput.style.boxShadow = "";
});
//check if the current time be 3:30
//check the all user that have not end time and it as 3:30
function endUsersWorkHours() {
  if (currentTime >= constant.endTime) {
    const currentMonth = currentTime.getMonth();
    const currentDay = currentTime.getDate();
    let currentDayArray =
      reportObject.months[currentMonth].dayOfMonth[currentDay];
    //get the users in that specific date
    for (let i = 0; i < currentDayArray.length; i++) {
      if (!currentDayArray[i].endTime) {
        currentDayArray[i].endTime = constant.endTime.toLocaleTimeString();
      }
    }
  }
  helper.setStringfyJsonInLocalStoage("report", reportObject);
  updateAttendanceTable(currentDayArray);
}
endUsersWorkHours();
