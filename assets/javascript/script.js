// Assignment code here
function generatePassword () {
    var letterLower = "abcdefghijklmnopqrstuvwxyz";
    var letterUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var number = "1234567890";
    var special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    var answer = '';

    var getLength = parseInt(window.prompt("How many characters would you like your password to be? (Please choose between 8 - 128)"));
    
    var useLower; 
    useLower = window.confirm("Do you want to use lowercase letters?");

    var useUpper; 
    useUpper = window.confirm("Do you want to use uppercase letters?");

    var useNumber; 
    useNumber = window.confirm("Do you want to use numbers?");

    var useSpecial; 
    useSpecial = window.confirm("Do you want to use special characters?");

    if (useLower) {
        answer += letterLower;
    };
    
    if (useUpper) {
        answer += letterUpper;
    };
    
    if (useNumber) {
        answer += number;
    };
    
    if (useSpecial) {
        answer += special;
    };

    answer = answer.split("");

    for (i = 0; i < getLength; i++) {
        var passChar = Math.floor(Math.random() * answer.length);
        password += answer[passChar];

        return password.value;
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