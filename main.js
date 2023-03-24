"use strict";

const firstName = document.getElementById('firstName'),
    lastName = document.getElementById('lastName'),
    userEmail = document.getElementById('userEmail'),
    password = document.getElementById('password'),
    trialForm = document.getElementById('trialForm');


// Mail Check
const mailCheck = (input) => {
    const regEx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const testMail = input.value.trim();
}

// Error
const formError = (input) => {

}

trialForm.addEventListener('submit', (e) => {
    e.preventDefault();
})