//take javascript object and the key and set a stringfy json in the local storage
function setStringfyJsonInLocalStoage(key, jsObject) {
  localStorage.setItem(key, JSON.stringify(jsObject));
}
//take a key and return a json object from local storage
function getLocalStorageConvertedItem(itemKey) {
  let stringItem = localStorage.getItem(itemKey);
  let jsonObject = JSON.parse(stringItem);
  return jsonObject;
}
function isEmailExistIn(inputEmail, arrayOfObjects) {
  return arrayOfObjects.some((user) => user.email === inputEmail.value);
}

function generateRandomPassword(length) {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}
//take input and if email found return the userObject  if not found return null

function getUserObjectByEmail(email, arrayOfObjects) {
  for (let i = 0; i < arrayOfObjects.length; i++) {
    if (arrayOfObjects[i].email === email.value) {
      return arrayOfObjects[i];
    }
  }

  return null;
}

function generateUserName(email) {
  const username = email.split("@")[0] + Math.floor(Math.random() * 9000);
  return username;
}
//disable or not disabled the inputs in a page
function toggleInputState(inputs) {
  for (let i = 0, length = inputs.length; i < length; i++) {
    inputs[i].disabled = !inputs[i].disabled;
  }
}
function getTimeDifference(
  timeString1,
  timeString2 = new Date().toLocaleTimeString()
) {
  console.log(timeString1);
  console.log(timeString2);
  let date1, date2;
  date1 = new Date("01/01/1970 " + timeString1);
  date2 = new Date("01/01/1970 " + timeString2);
  const timeDiffMs = date2 - date1;
  console.log(timeDiffMs);
  const hours = Math.floor(timeDiffMs / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiffMs % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiffMs % (1000 * 60)) / 1000);
  return `${hours} : ${minutes} : ${seconds}`;
}
function getCurrentUserFromSession() {
  return JSON.parse(sessionStorage.getItem("currentUser"));
}
function getDayName(dateString) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dateObj = new Date(dateString);
  const dayOfWeek = dateObj.getDay();
  return daysOfWeek[dayOfWeek];
}

export {
  isEmailExistIn,
  setStringfyJsonInLocalStoage,
  getLocalStorageConvertedItem,
  getUserObjectByEmail,
  generateRandomPassword,
  generateUserName,
  toggleInputState,
  getTimeDifference,
  getCurrentUserFromSession,
  getDayName,
};
