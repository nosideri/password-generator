// Assignment code here
function generatePassword() {
  var password = "";
  // Prompt for length of password, 8-128
  var promptLength = window.prompt("How long would you like the password to be? [8-128]");
  if (promptLength >= 8 && promptLength <= 128)
  {
    // Prompt for lowercase
    var promptLowercase = window.confirm("Would you like lowercase letters?");

    // Prompt for uppercase
    var promptUppercase = window.confirm("Would you like uppercase letters?");

    // Prompt for numeric
    var promptNumeric = window.confirm("Would you like numbers?");

    //Prompt for special characters
    var promptSpecial = window.confirm("Would you like special characters?");

    if (!promptLowercase && !promptUppercase && !promptNumeric && !promptSpecial) {
      window.alert ("Please choose at least one criteria for your password!");
      generatePassword();
    }
  }
  else {
    window.alert("Please choose a valid number between 8 and 128.");
    generatePassword();
  }

  // password string code
  mainString = "";

    upperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    lowerString = "abcdefghijklmnopqrstuvwxyz";

    numberString ="0123456789";

    specialString = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";

    if(promptLowercase) {
        mainString = mainString + lowerString;
    }

      if(promptUppercase) {
          mainString = mainString + upperString;
      }

        if(promptNumeric) {
          mainString = mainString + numberString;
        }

          if(promptSpecial) {
            mainString = mainString + specialString;
          }

    for (i = 0; i < promptLength; i++) { 
    var char = Math.floor(Math.random() * mainString.length + 1); 
      password+= mainString.charAt(char);
    }
    return password;
}

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
