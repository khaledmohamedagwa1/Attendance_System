import * as helper from "./../common/helperMethods.js";
import * as component from "./../common/reusableComponent.js";
import * as constant from "./../common/constant.js";
const currentUser = helper.getCurrentUserFromSession();
let reportObject = JSON.parse(localStorage.getItem("report"));
let table = document.createElement("table");
const currentMonthArray = reportObject.months[constant.currentMonth].dayOfMonth;
let caption = document.createElement("caption");
caption.innerHTML = `The ${
  reportObject.months[constant.currentMonth].currentMonthName
} Report`;
caption.classList.add(["caption-top"]);

let tbody = document.createElement("tbody");
for (let i = 1; i < currentMonthArray.length; i++) {
  let tr = document.createElement("tr");
  let dayNumber = i;
  //if no one attend so it is holiday time
  if (currentMonthArray[i].length == 0) {
    tr.innerHTML = component.MonthlyReportRowContent(
      dayNumber,
      constant.currentMonth,
      constant.currentYear,
      "Holiday"
    );
  }
  // if some attend so it is a work day
  else {
    for (let j = 0; j < currentMonthArray[i].length; j++) {
      //check for current user worked time
      if (currentMonthArray[i][j].userName === currentUser.userName) {
        tr.innerHTML = component.MonthlyReportRowContent(
          dayNumber,
          constant.currentMonth,
          constant.currentYear,
          "Attend",
          currentMonthArray[i][j]
        );
      } else {
        tr.innerHTML = tr.innerHTML = component.MonthlyReportRowContent(
          dayNumber,
          constant.currentMonth,
          constant.currentYear,
          "Absent"
        );
      }
    }
  }
  tbody.appendChild(tr);
}
table.appendChild(
  component.createTableHeader(
    "Day#",
    "Day",
    "Start Time",
    "End Time",
    "Worked Hours"
  )
);
function MonthlyReportTable() {
  table.appendChild(tbody);
  table.appendChild(caption);
  table.classList.add("table", "table-hover", "table-striped", "text-center");
  return table;
}
export { MonthlyReportTable };
