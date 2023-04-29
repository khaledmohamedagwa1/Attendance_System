const currentUser = "currentUser";
/**
 * Sets a value in session storage for a given key.
 * @param {any} value - The value to store in session storage.
 * @param {string} [key=currentUser] - The key to use when storing the value. Defaults to 'currentUser'.
 */
function setSession(value, key = currentUser) {
  sessionStorage.setItem(key, JSON.stringify(value));
}
/**
 * Retrieves a session from the browser's sessionStorage object.
 * @param {string} [key=currentUser] - The key of the session to retrieve. Defaults to the value of the `currentUser` variable.
 * @returns {object|null} The parsed session data as a JavaScript object, or `null` if the specified key does not exist.
 */
function getSession(key = currentUser) {
  return JSON.parse(sessionStorage.getItem(key));
}

export { setSession, getSession };
