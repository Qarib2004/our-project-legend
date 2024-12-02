
function saveRegisteredUser(userData) {
    localStorage.setItem('registeredUser', JSON.stringify(userData));
}


function getRegisteredUser() {
    return JSON.parse(localStorage.getItem('registeredUser'));
}


function saveCurrentUser(userData) {
    localStorage.setItem('currentUser', JSON.stringify(userData));
}


function getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
}


function removeCurrentUser() {
    localStorage.removeItem('currentUser');
}