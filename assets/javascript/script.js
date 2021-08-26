// Assignment code here
var letter = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "1234567890";
var special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

// when button clicks, prompts for password critea
// prompt for password length (8 - 128 characters)
// prompt for what to include (lower / upper / number / special)

// Generate Password & Display password

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);