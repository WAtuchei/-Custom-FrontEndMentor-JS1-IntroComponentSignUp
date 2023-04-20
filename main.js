"use strict";

const   trialForm = document.getElementById('trialForm'),
    firstName = document.getElementById('firstName'),
    lastName = document.getElementById('lastName'),
    userEmail = document.getElementById('userEmail'),
    password = document.getElementById('password');

// Name check 
const nameChecked = (input) => {
    const regEx = /^[a-zA-Z]+$/,
        nameT = input.value.trim().toLowerCase(),
        testName = regEx.test(nameT);

    if (testName === true) {
        return true;
    } 
    else {
        formError((input), `Looks like this is not a ${input.name}`);
    }
}

// Mail Check
const mailChecked = (input) => {
    const regEx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const testMail = input.value.trim().toLowerCase();

    if (regEx.test(testMail)) {
        return true;
    } 
    else {
        formError(input, `Looks like this is not an ${input.name}`);
    }
}

// Length Check
const lengthChecked = (input, min) => {
    if (input.value === "") {
        formError(input, `${input.name} cannot be empty`);

    } else if (input.value.length < min) {
        if (input === userEmail) {
            formError(input, `${input.name} is too short`);
        }
        else if (input === password) {
            formError(input, `${input.name} must be at least ${min} characters`);
        }
        else {
            formError(input, `Looks like this is not a ${input.name}`);
        }
    } 
    else {
        return true;
    }
}

// Error
const formError = (input, message) => {
    const errorIcon = $(input).next(),
        errorMessage = errorIcon.next();

    $(input).css({"border-color": "red",
                    "color": "red"});
    $(input).parent().addClass('error-shaking');
    errorIcon.show();
    errorIcon.addClass('fading-animated');
    errorMessage.text(message);

    input.parentElement.addEventListener('animationend', () => {
        $(input).parent().removeClass('error-shaking');
        errorIcon.removeClass('fading-animated');
    });

    input.addEventListener('keydown', () => {
        errorIcon.hide();
        errorMessage.text("");
        $(input).css("border-color", "rgba(128, 128, 128, 0.219)");
        $(input).css("color", "#000");
    });
}

// store data to localStorage
const storeData = () => {
    
    const objUserData = {
        firstname: firstName.value,
        lastname: lastName.value,
        email: userEmail.value,
        password: password.value
    }

    const jsonUserData = JSON.stringify(objUserData);
    localStorage.setItem('userData', jsonUserData);

    console.log(objUserData);
}

// Submit Form
trialForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const charsArrChecked = [
        nameChecked(firstName),
        nameChecked(lastName),
        mailChecked(userEmail)
    ],
        lengthArr = [
            lengthChecked(firstName, 2),
            lengthChecked(lastName, 2),
            lengthChecked(userEmail, 6),
            lengthChecked(password, 8)
        ]
    const formArr = [...charsArrChecked, ...lengthArr]
    const formArrChecked = (arr) => arr.every(Boolean);
    console.log(formArr);
    
    switch (formArrChecked(formArr)) {
        case true:
            $('button').prop("disabled", true);
            $('button').css("cursor", "default");
            $('button').text('Thank you');
            storeData();
            break;
        default:
            console.log('Form Fail');
            break;
    }
});

// Local Storage Clear
window.addEventListener('unload', () => {
    localStorage.clear();
});