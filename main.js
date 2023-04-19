"use strict";

const   trialForm = document.getElementById('trialForm'),
    firstName = document.getElementById('firstName'),
    lastName = document.getElementById('lastName'),
    userEmail = document.getElementById('userEmail'),
    password = document.getElementById('password');

// Name check 
const nameChecked = (input, input2) => {
    const regEx = /^[a-zA-Z]+$/,
        nameF = input.value.trim().toLowerCase(),
        nameL = input2.value.trim().toLowerCase();

    const testFirstName = regEx.test(nameF),
        testLastName = regEx.test(nameL);

    if ((testFirstName && testLastName) === true) {
        console.log('double pass');
        // console.log(nameF.charAt(0).toUpperCase() + nameF.slice(1));
        return true;
    }
}

// Mail Check
const mailChecked = (input) => {
    const regEx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const testMail = input.value.trim().toLowerCase();

    if (regEx.test(testMail)) {
        console.log(`mail Pass ${testMail}`);
        return true;

    } else {
        formError(input, `Looks like this is not ${input.name}`);
    }
}

// Length Check
const lengthChecked = (input, min) => {
    if (input.value === "") {
        formError(input, `${input.name} cannot be empty`);

    } else if (input.value.length < min) {
        formError(input, `Looks like this is not ${input.name}`);
        
    } else {
        return true;
    }
}

// Error
const formError = (input, message) => {
    const errorIcon = $(input).next(),
        errorMessage = errorIcon.next();

    input.style.borderColor = "red";
    input.style.color = "red";
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
        input.style.borderColor = "rgba(128, 128, 128, 0.219)";
        input.style.color = "#000";
    });
}

// Submit Form
trialForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const yourName = nameChecked(firstName, lastName),
        eMail = mailChecked(userEmail),
        lengthArr = [
            lengthChecked(firstName, 2),
            lengthChecked(lastName, 2),
            lengthChecked(userEmail, 6),
        ];

    const formArr = [yourName, eMail, ...lengthArr]
    const formArrChecked = (arr) => arr.every(Boolean);

    const formAllChecked = formArrChecked(formArr);

    console.log(formAllChecked);    
    console.log(formArr);

    switch (formAllChecked) {
        case true:
            console.log('Form Pass');
            break;
        default:
            console.log('Form Fail');
            break;
    }
});