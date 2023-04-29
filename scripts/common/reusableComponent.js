import * as helper from "./helperMethods.js";
function createCollapseRow(
  index,
  firstName,
  lastName,
  email,
  age,
  role,
  userName,
  password
) {
  return role && userName && password
    ? `<tr data-bs-toggle="collapse" data-bs-target="#details${index}">
            <th>${index}</th>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${email}</td>
        </tr>
        <tr class="collapse" id="details${index}">
            <td colspan="4">
            <div >
                <p>Age : ${role}</p>
                <p>UserName : ${userName}</p>
                <p>Password : ${password}</p>
                <p>Age : ${age}</p>
                    <div class="d-flex justify-content-end">
                        <button class="btn btn-danger mx-2">Delete</button>
                    </div>
                </div>
            </td>
        </tr>`
    : `<tr data-bs-toggle="collapse" data-bs-target="#details${index}">
        <th>${index}</th>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${email}</td>
    </tr>
    <tr class="collapse" id="details${index}">
        <td colspan="4">
            <div >
                <p>Age : ${age}</p>
                <div class="d-flex justify-content-end">
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button"
                            id="dropdownMenuButton" data-bs-toggle="dropdown">
                            Employee Role
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item"  data-value="employee">Employee</a></li>
                            <li><a class="dropdown-item"  data-value="securityMan">Security Man action</a></li>

                        </ul>
                    </div>
                    <button class="btn btn-success mx-2">Accept</button>
                    <button class="btn btn-danger mx-2">Reject</button>
                </div>
            </div>
        </td>
    </tr>`;
}
function createTableHeader(...titles) {
  let thead = document.createElement("thead");
  let tr = document.createElement("tr");
  for (let i = 0; i < titles.length; i++) {
    let th = document.createElement("th");
    th.innerHTML = titles[i];
    tr.appendChild(th);
  }
  thead.appendChild(tr);
  return thead;
}
function dailyReportRowContent(user) {
  if (user) {
    return `<td>${user.startTime}</td><td>${
      user.endTime || "still Working"
    }</td> 
        <td>${
          user.endTime
            ? helper.getTimeDifference(user.startTime, user.endTime)
            : helper.getTimeDifference(user.startTime)
        }</td>`;
  }
  return `<tr><td colspan="3">Absent </td></tr>`;
}
function MonthlyReportRowContent(
  dayNumber,
  currentMonth,
  currentYear,
  state,
  user
) {
  if (user) {
    return `<td>${dayNumber}</td> <td>${helper.getDayName(
      `${currentMonth + 1} ${dayNumber}  ${currentYear}`
    )}</td>
          <td>${user.startTime}</td>
          <td>${user.endTime}</td>
          <td>${
            user.endTime
              ? helper.getTimeDifference(user.startTime, user.endTime)
              : helper.getTimeDifference(user.startTime)
          }</td>
        `;
  } else {
    return `<td>${dayNumber}</td><td>${helper.getDayName(
      `${currentMonth + 1} ${dayNumber}  ${currentYear}`
    )}</td><td colspan="3">${state}</td>`;
  }
}

export {
  createCollapseRow,
  createTableHeader,
  dailyReportRowContent,
  MonthlyReportRowContent,
};
