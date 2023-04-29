import * as session from "../common/session.js";
import * as constant from "./../common/constant.js";
let currentUser = session.getSession();
if (!currentUser) {
  window.location.replace(constant.loginUrl);
}
export { currentUser };
