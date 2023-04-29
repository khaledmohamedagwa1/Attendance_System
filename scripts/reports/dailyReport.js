import * as helper from "./../common/helperMethods.js";
import * as component from "./../common/reusableComponent.js";
import * as constant from "./../common/constant.js";
let currentUser = helper.getCurrentUserFromSession();
let table = document.createElement("table");
let tBody = document.createElement("tbody");
let reportObject = JSON.parse(localStorage.getItem("report"));
let currentDayArray =
  reportObject.months[constant.currentMonth].dayOfMonth[constant.currentDay];
let isExist = currentDayArray.find(
  (user) => user.userName === currentUser.userName
);
if (!isExist) {
  tBody.innerHTML = component.dailyReportRowContent();
} else {
  tBody.innerHTML = component.dailyReportRowContent(isExist);
}
table.appendChild(
  component.createTableHeader("Start Time", "End Time", "Worked Time")
);
function dailyReportTable() {
  table.appendChild(tBody);
  table.classList.add("table", "table-hover", "table-striped", "text-center");
  return table;
}
export { dailyReportTable };
