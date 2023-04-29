import * as constant from "../common/constant.js";
import * as helper from "../common/helperMethods.js";
let reportObject = JSON.parse(localStorage.getItem("report"));
let table = document.querySelector("table");
table.classList.add("table", "table-hover", "table-striped", "text-center");

let currentDayArray =
  reportObject.months[constant.currentMonth].dayOfMonth[constant.currentDay];
for (let i = 0; i < currentDayArray.length; i++) {
  const arrivalTime = new Date(
    "2023-05-01" + " " + currentDayArray[i].startTime
  );
  const startTime = new Date(
    "2023-05-01" + " " + constant.startTime.toLocaleTimeString()
  );
  let tr = document.createElement("tr");
  if (arrivalTime.getTime() > startTime.getTime()) {
    tr.innerHTML = `<td>${i + 1} </td><td>${
      currentDayArray[i].userName
    }</td><td>${currentDayArray[i].startTime}</td>`;
  } else {
    tr.innerHtml = `<td colspan='3'>No One Late</td>`;
  }
  table.appendChild(tr);
}
