// Assignment Code
var generateBtn = document.querySelector("#generate");

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