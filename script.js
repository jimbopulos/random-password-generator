// Assignment Code
var generateBtn = document.querySelector("#generate");

// create arrays
var lowerCaseOptions = "abcdefghijklmnopqrstuvwxyz";

var upperCaseOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var symbolsOptions = " \"#$%&'()*+,-./:;<=>?@[\\]^_ `{|}~";

var numbersOptions = "0123456789";

var allOptions = " ";

// Button to begin prompts/confirms for password
function writePassword() {
    // set var for password length
    var passwordLength = prompt("How many characters would you like? Choose an amount from 8 to 128");
    // if statement to disallow password less than 8 char or more than 128
    if (passwordLength < 8 || passwordLength > 128) {
    alert("Please select between 8 and 128 characters");
    // allow confirm series for char fields if input satisfies char length
    } else {    function generatePassword() {
        // arrays for possible characters
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
        // declare var for result of all confirms
        var randomPassword = "";
            // loop to go through previously selected options
            for (var i = 0; i < passwordLength; i++) {
                // random password generated based on chosen Options
                randomPassword += allOptions.charAt(
                Math.floor(Math.random() * allOptions.length)
                );
                // string assembling user selected Options of characters
                } return randomPassword;
            }; // console.log(allOptions); 
        // get the random password, set variable for called function
        var password = generatePassword();
        // get the element where password will live on page
        var passwordText = document.querySelector("#password");
        // put the password on the page (value of passwordText var is function called)
        passwordText.value = password;
    }
};

// Add event listener to generate button
// user clicks generate button
generateBtn.addEventListener("click", writePassword);