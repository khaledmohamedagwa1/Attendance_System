import * as monthlyReport from "./monthlyReport.js";
import { dailyReportTable } from "./dailyReport.js";
const dropdown = document.getElementsByTagName("select")[0];
const tableHolder = document.getElementById("tableHolder");
tableHolder.append(dailyReportTable());
dropdown.addEventListener("change", function () {
  if (dropdown.value == "monthlyReport") {
    tableHolder.innerHTML = "";
    tableHolder.append(monthlyReport.MonthlyReportTable());
  } else {
    tableHolder.innerHTML = "";
    tableHolder.append(dailyReportTable());
  }
});
