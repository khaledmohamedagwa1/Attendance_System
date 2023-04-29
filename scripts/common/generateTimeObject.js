function generateCurrentYearEmptyObject() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const yearObject = {
    currentYear: currentYear,
    months: [],
  };
  for (let month = 0; month < 12; month++) {
    const numDaysInMonth = new Date(currentYear, month + 1, 0).getDate();
    const monthName = new Date(currentYear, month, 1).toLocaleString(
      "default",
      { month: "long" }
    );
    const monthObject = {
      currentMonthNum: month,
      currentMonthName: monthName,
      dayOfMonth: [],
    };
    for (let day = 1; day <= numDaysInMonth; day++) {
      monthObject.dayOfMonth[day] = [];
    }
    yearObject.months.push(monthObject);
  }
  return yearObject;
}

export { generateCurrentYearEmptyObject };
