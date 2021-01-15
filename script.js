// Assignment Code
var generateBtn = document.querySelector("#generate");

// create arrays
var lowerCaseOptions = "abcdefghijklmnopqrstuvwxyz";

var upperCaseOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var symbolsOptions = " \"#$%&'()*+,-./:;<=>?@[\\]^_ `{|}~";

var numbersOptions = "0123456789";

var allOptions = " ";

// set prompts
var passwordLength = prompt("How many characters would you like? Choose an amount from 8 to 128");

var lowerCase = confirm("Would you like to include lowercase letters?");

var upperCase = confirm("Would you like to include uppercase letters?");

var symbols = confirm("Would you like to include symbols?");

var numbers = confirm("Would you like to include numbers?");

// if statements to concatenate strings for password
if (lowerCase) {
    allOptions += lowerCaseOptions
};
// console.log(allOptions);

if (upperCase) {
    allOptions += upperCaseOptions
};
// console.log(allOptions);

if (symbols) {
    allOptions +=  symbolsOptions
};
// console.log(allOptions);

if (numbers) {
    allOptions += numbersOptions
};
// console.log(allOptions);

function generatePassword() {
    // declare var result
    var randomPassword = "";
    // will establish designated password length
for (var i = 0; i < passwordLength; i++) {
    // random password generated based on chosen Options
        randomPassword += allOptions.charAt(
        Math.floor(Math.random() * allOptions.length)
        );
    // string assembling using selected Options of characters
    } return randomPassword;
};

// Write password to the #password input
function writePassword() {
  // get the random password
  var password = generatePassword();
  // get the element where password will live on page
  var passwordText = document.querySelector("#password");
  
  // put the password on the page
  passwordText.value = password;
};

writePassword();

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

// // when generate password button is clicked, go to prompt
    // // ask the user how long they want password (8-128 characters)
    // var passwordLength = prompt("How many characters long would you like the password to be? Please any amount from 8 to 128");
    // // else user enters value <8 or >128, alert to indicate required field
    // if (passwordLength < 8 || passwordLength > 128) {
    //     var invalid = alert("Please enter an amount from 8 to 128");
    //     // redirect user to initial prompt
    //     generatePassword();
    //     // if user enters proper character amount
    // } else if (passwordLength >= 8 || passwordLength <= 128) {
    //     // move to next prompt
    //     // add lowercase letters?
    //     var lowerCase = confirm("Would you like to include lowercase letters?");

        // if yes
        // user chooses to include lowercase letters
   // }

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