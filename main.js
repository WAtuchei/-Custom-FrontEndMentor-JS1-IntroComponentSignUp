"use strict";

const   trialForm = document.getElementById('trialForm'),
    firstName = document.getElementById('firstName'),
    lastName = document.getElementById('lastName'),
    userEmail = document.getElementById('userEmail'),
    password = document.getElementById('password');

// Name check 
const nameChecked = (input, input2) => {
    const regEx = /^([A-Za-z]+[\s]?)+$/;
    const testFirstName = input.value.trim().toLowerCase();
    const testLastName = input2.value.trim().toLowerCase();

    if (regEx.test(testLastName, testFirstName)) {
        const allName = [testFirstName, testLastName];

        const capitalizedName = allName.map((name) => {
            if ((lengthChecked(name, 1)) === true) {
            name.charAt(0).toUpperCase() + name.slice(1);

            return name;
            }
        });
        console.log(capitalizedName);
        console.log('name pass');
        return true;

    } else {
        console.log('name fail');
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
        console.log(`mail Fail`);
    }
}

// Length Check
const lengthChecked = (input, min) => {
    if (input === "") {
        console.log(`${input.name} cannot be empty`);

    } else if (input < min) {
        console.log(`Looks like this is not ${input.name}`);
        
    } else {
        console.log('length pass');
        return true;
    }
}

// Error
const formError = (input) => {

}

// Submit Form
trialForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const yourName = nameChecked(firstName, lastName);
    const eMail = mailChecked(userEmail);

    switch (yourName && eMail) {
        case true:
            console.log('Form Pass');
            break;
        default:
            console.log('Form Fail');
            break;
    }
});