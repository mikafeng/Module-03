
var characterLength = 8;
var choiceArray = [];
var btnClick = document.getElementById('generate');

//Possible characters for generating password
var specialCharacterArray = ['!', '#', '$', "%", '&', '^', '*', '(', ')'];
var lowerCaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];



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



//function to generate a random password with characters selected by user
function generatePassword () {
    var newPassword = "";
    for(var i = 0; i< characterLength; i++) {
      var randomIndex = Math.floor(Math.random() * choiceArray.length);
      newPassword = newPassword + choiceArray[randomIndex];
      console.log(randomIndex);
  }  
   document.getElementById('password').value = newPassword
  }



function writePassword(){
        getPrompt();
   var password = generatePassword();
   var newPassword = document.getElementById('password');

   newPassword.value = password;
}

btnClick.addEventListener('click', writePassword);
//INNERHTML??