// Assignment code here
function generatePassword () {
    var letterLower = letterLower.split("abcdefghijklmnopqrstuvwxyz");
    var letterUpper = letterUpper.split("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    var number = number.split("1234567890");
    var special = special.split("!#$%&'()*+,-./:;<=>?@[]^_`{|}~");
    var answer = '';

    var getLength = parseInt(window.prompt("How many characters would you like your password to be? (Please choose between 8 - 128)"));
    
    var useLower = function () {
        window.confirm("Do you want to use lowercase letters?")
    };
    
    var useUpper = function () {
        window.confirm("Do you want to use uppercase letters?")
    };
    
    var useNumber = function () {
        window.confirm("Do you want to use numbers?")
    };
    
    var useSpecial = function () {
        window.confirm("Do you want special characters?")
    };

    if (useLower) {
        answer += useLower;
    };
    
    if (useUpper) {
        answer += useUpper;
    };
    
    if (useNumber) {
        answer += useNumber;
    };
    
    if (useSpecial) {
        answer += useSpecial;
    };

    for (i = 0; i < getLength; i++) {
        var passChar = Math.floor(Math.random() * answer.length);
        password += answers[passChar];
    };
};


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