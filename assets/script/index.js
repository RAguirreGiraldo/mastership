'use strict';

localStorage.setItem('validUser', false);
localStorage.setItem('dataValidUser', JSON.stringify({email: 'admin@gmail.com', password: 'admin'}));

const adminUser = JSON.parse(localStorage.getItem('dataValidUser'));
const button = document.querySelector("#login-button");
const emailField = document.querySelector("#username");
const passwordField = document.querySelector("#password");
const error = document.querySelector('#error');

button.addEventListener("click", checkboxClick, false);

function checkboxClick(event) {
  event.preventDefault();

  if(emailField.value === adminUser.email && passwordField.value === adminUser.password) {
    error.style.display = 'none';
    localStorage.setItem('validUser', true);
    window.location.href = './home.html'
  } else {
    error.style.display = 'block';
  }
}
