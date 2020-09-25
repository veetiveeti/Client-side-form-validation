// Checks if "password" and "confirm-password" match when button "Sign Up" is activated.

const password = document.getElementById("password");
const confirm_password = document.getElementById("confirm_password");

function validatePassword() {
    if(password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Passwords should match.");
    }
    else {
        confirm_password.setCustomValidity("");
    }
}

//password.onchange = validatePassword; <--Enable to see match on every change
confirm_password.onkeyup = validatePassword;
