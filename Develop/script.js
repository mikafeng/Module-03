var characterLength = 8;
var choiceArray = [];

var specialCharacterArray = ['!', '#', '$', "%", '&', '^', '*', '(', ')'];
var lowerCaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];



// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




function getPrompt() {
  characterLength = parseInt(prompt('Choose between 8 to 20 characters for your password.'));

  if(isNaN(characterLength) || characterLength <8 || characterLength >20) {
    alert('Please enter numerical values for your character length.')
    return false;
  }

  if(confirm("Would you like lower case letters in the password?")){
    choiceArray = choiceArray.concat(lowerCaseArray);
  }

  if(confirm("Would you like upper case letters in the password?")){
    choiceArray = choiceArray.concat(upperCaseArray);
  }

  if(confirm("Would you like special characters in the password?")){
    choiceArray = choiceArray.concat(specialCharacterArray);
  }

  if(confirm("Would you like numbers in your password?")){
    choiceArray = choiceArray.concat(numberArray);
  }
  return true;

}

function generatePassword ()
{
}
