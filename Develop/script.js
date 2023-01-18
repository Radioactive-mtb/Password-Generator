// Assignment Code
var generateBtn = document.querySelector("#generate");
var number;
var characters;
var lowercase;
var uppercase;
var choices = [];

numb = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "/", "<", ">", "~"];
alphas = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
caps = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Write password to the #password input
function writePassword() {
  var userchoice = window.prompt("Enter desired length for new password between 8 and 128 characters.")
  if (!userchoice) {
    alert("please enter a value.");
  } else if (userchoice < 8 || userchoice > 128) {
    alert("Length must be between 8 and 128 characters.");
  } else {
    number = confirm("Include numbers?");
    characters = confirm("Include special characters?");
    lowercase = confirm("Include lowercase letters?");
    uppercase = confirm("include uppercase letters?")
  };

  if (!number && !characters && !lowercase && !uppercase) {
    choices = alert("Please choose one of the criterias.");
  } else if (number && characters && lowercase && uppercase) {
    choices = numb + specialCharacters + alphas + caps
  } else if (number && characters && lowercase && !uppercase) {
    choices = numb + specialCharacters + alphas
  } else if (number && characters && !lowercase && uppercase) {
    choices = numb + specialCharacters + caps
  } else if (!number && characters && lowercase && uppercase) {
    choices = specialCharacters + alphas + caps
  } else if (number && !characters && lowercase && uppercase) {
    choices = numb + alphas + caps
  } else if (number && characters && !lowercase && !uppercase) {
    choices = numb + specialCharacters
  } else if (!number && characters && lowercase && !uppercase) {
    choices = specialCharacters + alphas
  } else if (!number && characters && !lowercase && uppercase) {
    choices = specialCharacters + caps
  } else if (number && !characters && lowercase && !uppercase) {
    choices = numb + alphas
  } else if (number && !characters && !lowercase && uppercase) {
    choices = numb + caps
  } else if (!number && !characters && lowercase && uppercase) {
    choices = alphas + caps
  } else if (number && !characters && !lowercase && !uppercase) {
    choices = numb
  } else if (!number && characters && !lowercase && !uppercase) {
    choices = specialCharacters
  } else if (!number && !characters && lowercase && !uppercase) {
    choices = alphas
  } else if (!number && !characters && !lowercase && uppercase) {
    choices = caps
  }

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword() {
    var passwordString = "";
    for (var i = 0; i < userchoice; i++) {
      passwordString += choices[Math.floor(Math.random() * choices.length)];
    }
    return passwordString;
  };

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
