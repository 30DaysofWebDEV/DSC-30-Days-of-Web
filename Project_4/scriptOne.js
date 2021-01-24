var fields = {}
document.addEventListener("DOMContentLoaded", function() {
    fields.firstName = document.getElementById('firstName');
    fields.lastName = document.getElementById('lastName');
    fields.email = document.getElementById('email');
    fields.phoneNo = document.getElementById('phoneNo')
})

function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined') return false;
    return (value.length > 0);
}

function isNumber(phoneNo) {
    return (phoneNo.length > 0) && !isNaN(phoneNo);
}


function fieldValidation(field, validationFunction) {
    if (field == null) return false;

    let isFieldValid = validationFunction(field.value)
    if (!isFieldValid) {
        field.className = 'placeholderRed';
    } else {
        field.className = '';
    }

    return isFieldValid;
}

function isValid() {
    var valid = true;

    valid &= fieldValidation(fields.firstName, isNotEmpty);
    valid &= fieldValidation(fields.lastName, isNotEmpty);
    valid &= fieldValidation(fields.gender, isNotEmpty);
    valid &= fieldValidation(fields.email, isNotEmpty);
    valid &= fieldValidation(fields.phoneNo, isNumber);
    return valid;
}

class User {
    constructor(firstName, lastName, gender, address, country, email, newsletter, question) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNo = phoneNo;
    }
}

function sendContact() {
    if (isValid()) {
        let usr = new User(firstName.value, lastName.value, email.value, phoneNo.value);
        alert(`${usr.firstName} thanks for registering.`);
    } else {
        alert("there was an error...");
    }
}
