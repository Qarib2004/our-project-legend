const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


function validatePassword(password) {
    return password.length >= 8 && 
           /[A-Z]/.test(password) && 
           /[a-z]/.test(password) && 
           /[0-9]/.test(password);
}


function validateEmail(email) {
    return EMAIL_REGEX.test(email);
}