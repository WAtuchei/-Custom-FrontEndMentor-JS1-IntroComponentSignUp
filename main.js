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
        // formError();
    }
}

// Length Check
const lengthChecked = (input, min) => {
    if (input.value === "") {
        console.log(`${input.name} cannot be empty`);

    } else if (input.value.length < min) {
        console.log(`Looks like this is not ${input.name}`);
        
    } else {
        return true;
    }
}

// Error
const formError = (input) => {

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