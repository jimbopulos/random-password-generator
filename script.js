// Assignment Code
var generateBtn = document.querySelector("#generate");

// create array for lowercase letters
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l","m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//create array for uppercase letters
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L","M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// create array for special characters
var specChar = [" ", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

// create array for numeric characters
var numChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

console.log(lowerCase);
console.log(upperCase);
console.log(specChar);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

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