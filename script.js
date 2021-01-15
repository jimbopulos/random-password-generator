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
    // when generate password button is clicked, go to prompt
    // ask the user how long they want password (8-128 characters)
    var passwordLength = prompt("How many characters long would you like the password to be? Please any amount from 8 to 128");
    // user entry
    // if user enters value <8 or >128, alert to indicate required field
    if (passwordLength < 8 || passwordLength > 128) {
        var invalid = alert("Please enter an amount from 8 to 128")
        generatePassword();
    }
    // redirect user to initial prompt
    // number chosen recorded and set for following fields
    // next prompt shows

    // do they want numbers?
    // if yes, add numbers array, random selection
    // Math.floor(Math.random() * numbers.length));
    // else, no numbers included
    // next prompt shows

    // do they want lowercase letters?
    // if yes then add lowerCase array, random selection
    // Math.floor(Math.random() * lowerCase.length));
    // else, no lowercase letters included

    // do they want uppercase letters?
    // if yes then add upperCase array, random selection
    // Math.floor(Math.random() * upperCase.length));
    // else, no uppercase letters included

    // do they want special characters?
    // if yes, add specials array, random selection
    // Math.floor(Math.random() * specials.length));
    // else no special characters included

    // build a char set containing user choices
    // randomly grab characters from char set
    // place random char in password until we have password at specified length

    // return the password
    // return " ";
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

// call generatePassword function
generatePassword();

// Add event listener to generate button
// user clicks generate button
generateBtn.addEventListener("click", writePassword);

// generate password
// when generate password but clicked, user presented with a series of prompts for password criteria

// user prompted for password criteria
// user selects which criteria to include in the password

// user prompted for the length of the password
// they chooses length of 8 characters min, 128 characters max

// user prompted for character types to include in the password
// can choose lowercase, uppercase, numeric, and/or special characters

// as each prompt answered, input should be validated and at least one      character type should be selected

// once all prompts answered, password that matches the selected criteria generated
// password is either displayed in an alert or written to the page