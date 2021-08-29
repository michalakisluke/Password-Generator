function generatePassword () {
    //Set variables for password contents
    var letterLower = "abcdefghijklmnopqrstuvwxyz";
    var letterUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var number = "1234567890";
    var special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    var answer = '';
    var password = '';

    //Length prompt
    var getLength = parseInt(window.prompt("How many characters would you like your password to be? (Please choose between 8 - 128)"));
 
    //Length verification, if not right length program exits function
    if (getLength < 8 || getLength > 128) {
        window.alert("You didn't choose a number between 8 - 128. Please try again.");
        return "";

    }

    //Generate password
    else if (getLength >= 8 && getLength <= 128) {
        
        //chceck for desired password contents
        var useLower; 
        useLower = window.confirm("Do you want to use lowercase letters?");

        var useUpper; 
        useUpper = window.confirm("Do you want to use uppercase letters?");

        var useNumber; 
        useNumber = window.confirm("Do you want to use numbers?");

        var useSpecial; 
        useSpecial = window.confirm("Do you want to use special characters?");

        //Combine variables into single variable
        if (useLower) {
            answer += letterLower;
        }
        
        if (useUpper) {
            answer += letterUpper;
        }
        
        if (useNumber) {
            answer += number;
        }
        
        if (useSpecial) {
            answer += special;
        }

        else {
            alert("You didn't choose any characters, please try again.");
            return "";
        }

        //Split variable into multiple individual strings
        answer = answer.split("");

        //Randomize selection, rewrite string
        for (i = 0; i < getLength; i++) {
            var passChar = Math.floor(Math.random() * answer.length);
            password += answer[passChar];
        };
    };
    return password;
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