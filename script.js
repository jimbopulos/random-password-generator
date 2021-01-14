// Assignment Code
var generateBtn = document.querySelector("#generate");

// create arrays
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

var specials = [" ", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

var numbers = "0123456789".split("");

var passwordPool = [];

var generatedPassword = [];

// generate password
function generatePassword() {
    // ask the user how long they want password (8-128 characters)
    var passwordLength = prompt("How many characters long would you like the password to be? Please any amount from 8 to 128");
    console.log(passwordLength);
    
    // do they want numbers?
    // do they want lowercase letters?
    // do they want uppercase letters?
    // do they want special characters?

    // build a char set containing user choices
    // randomly grab characters from char set
    // place random char in password until we have password at specified length

    // ... 

    // return the password
    // return "fkjg4o5guhiguhi45ghu";
}

// Write password to the #password input
function writePassword() {
  // get the random password
  var password = generatePassword();
  // get the element where password will live on page
  var passwordText = document.querySelector("#password");
  
  // put the password on the page
  passwordText.value = password;

}

// Add event listener to generate button
// user clicks generate button
generateBtn.addEventListener("click", writePassword);

// call generatePassword function
generatePassword();

// generate password
// when generate password but clickedd, user presented with a series of prompts for password criteria

// user prompted for password criteria
// user selects which criteria to include in the password

// user prompted for the length of the password
// they chooses length of 8 characters min, 128 characters max

// user prompted for character types to include in the password
// can choose lowercase, uppercase, numeric, and/or special characters

// as each prompt answered, input should be validated and at least one      character type should be selected

// once all prompts answered, password that matches the selected criteria generated
// password is either displayed in an alert or written to the page