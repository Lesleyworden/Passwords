// Assignment Code
// gererateBtn creates a link between the html id and the JavaScript so when it is clicked it begins the write password function//

var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copyBtn");
var passwordFinal = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
  // passwordArray is the variable which the password will be written as the randomizers return their values.//
  passwordArray = [];
  passwordLength = 0;
//Stores variable selection made by user for generatePassword //
  userLengthChoice = '';
  userUpperChoice = false;
  userLowerChoice = false;
  userNumericChoice = false;
  userSpecialChoice = false;

  var password = generatePassword();
  password = passwordArray.join("");

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button

function copyPassword() {
  passwordFinal.select();
  document.execCommand("Copy");
  }
// Add event listener to generate button. This listener will listen for a click of the button and then call the function writePassword() when clicked
generateBtn.addEventListener("click", writePassword);

// generate password () is a function that calls for the input from the user//
function generatePassword() {
  userInput();

  function userInput() {
    // userLengthChoice gathers and stores the user's input for how long the password should be//
    userLengthChoice = prompt ("Please select a password length between 8 and 128 characters long.");
      if (userLengthChoice === null) {
        return;
      }
      // parseInt converts the input of the user from string to an integer//
      passwordLength = parseInt(userLengthChoice, 10);
      // This is the statement validates the users choice of integer //
        if(passwordLength < 8 || passwordLength > 128){
          alert("This selection is not valid. Please try again.");
          userInput();
          return;
        }
        // var isLetter validates the userLengthChoice to confirm that input is numeric //
        var isLetter = Number(userLowerChoice);
          if (isNaN(isLetter)) {
              alert ("This selection is not valid. Please try again.");
              userInput();
              return;
          }
        // These variable declarations gather and store user input data defining the password generators parameters//
        userUpperChoice = confirm ("Would you like to use upper case letters? Ok for yes, cancel for no.");
        userLowerChoice = confirm ('Would you like to use lower case letters? Ok for yes, cancel for no');
        userNumericChoice = confirm ("Would you like to use numeric characters? Ok for yes, cancel for no");
        userSpecialChoice = confirm ("Would you like to use special characters? Ok for yes, cancel for no");
  }
      randomizedResult();
      function randomizedResult() {
        // specialChars is a string of possible outcomes for characters that are generated when the user chooses to add special characters//
        const specialChars ="!@#$%^&*()?-_=+/][}{`~";
        let characterRandomizer = 0;
        // Loop that generates random characters according to the inputs given by the user//
        while (passwordArray.length < passwordLength){

          // characterRandomizer generates a number between 0 and 4//
          characterRandomizer = Math.floor(Math.random() *4);
          console.log (characterRandomizer);
          // This if statement will validate whether user inputs are active and then geneate a random character using the character code//
          if (characterRandomizer === 0 && userUpperChoice === true) {
            passwordArray.push([String.fromCharCode(Math.floor(Math.random() * 26) + 65)]);
        } else if (characterRandomizer === 1 && userLowerChoice === true) {
            passwordArray.push(String.fromCharCode(Math.floor(Math.random() * 26) + 97));
        } else if (characterRandomizer === 2 && userNumericChoice === true) {
            passwordArray.push(String.fromCharCode(Math.floor(Math.random() * 10) + 48));
        } else if (characterRandomizer === 3 && userSpecialChoice === true) {
            passwordArray.push(specialChars[Math.floor(Math.random() * specialChars.length)]);
        }
    }
    return passwordArray;
}
}

