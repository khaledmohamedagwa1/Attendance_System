const dashboardURL = "http://127.0.0.1:5500/admin/dashboard.html";
const homeEmployeeURL = "http://127.0.0.1:5500/home.html";
const homeSecurityManURL = "http://127.0.0.1:5500/seurtity.html";
const loginUrl = "http://127.0.0.1:5500/login.html";
const apiKey =
  "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";
const startTime = new Date();
startTime.setHours(0, 30, 0);
const endTime = new Date();
endTime.setHours(4, 28, 0);
const currentTime = new Date();
const currentMonth = currentTime.getMonth();
const currentDay = currentTime.getDate();
const currentYear = currentTime.getFullYear();

export {
  dashboardURL,
  homeEmployeeURL,
  homeSecurityManURL,
  loginUrl,
  apiKey,
  startTime,
  endTime,
  currentMonth,
  currentDay,
  currentYear,
};
