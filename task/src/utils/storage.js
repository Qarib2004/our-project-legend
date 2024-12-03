export function saveRegisteredUser(userData) {
  localStorage.setItem("registeredUser", JSON.stringify(userData));
}

 export function getRegisteredUser() {
  return JSON.parse(localStorage.getItem("registeredUser"));
}

export function saveCurrentUser(userData) {
  localStorage.setItem("currentUser", JSON.stringify(userData));
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem("currentUser"));
}

export function removeCurrentUser() {
  localStorage.removeItem("currentUser");
}


