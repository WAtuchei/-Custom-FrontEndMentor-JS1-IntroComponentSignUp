"use strict";

const   trialForm = document.getElementById('trialForm'),
    firstName = document.getElementById('firstName'),
    lastName = document.getElementById('lastName'),
    userEmail = document.getElementById('userEmail'),
    password = document.getElementById('password');

// Name check 
const nameChecked = (input, input2) => {
    const testFirstName = input.value.trim();
    const testLastName = input2.value.trim();
    const testName = [testFirstName, testLastName];

    testName.toLowerCase();
    testName.charAt(0).toUpperCase();

    console.log(testName);
}

// Mail Check
const mailChecked = (input) => {
    const regEx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const testMail = input.value.trim();

    if (regEx.test(testMail)) {
        const passMail = testMail.toLowerCase();
        console.log(passMail);
        return true;

    }   else {
        formError();
        console.log(passMail);
    }
}

// Error
const formError = (input) => {

}

trialForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const yourName = nameChecked(firstName, lastName);
    const eMail = mailChecked(userEmail);

    switch (yourName && eMail) {
        case true:
            console.log('Pass');
            break;
        default:
            console.log('Not Pass');
            break;
    }
});