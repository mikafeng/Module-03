var btnClick = document.getElementById('generate');
var password = document.getElementById('password');


//Possible characters for generating password
var specialCharacterArray = ['!', '#', '$', "%", '&', '^', '*', '(', ')'];
var lowerCaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


//event listener for when the 'generate password' button is clicked; user is prompted to answer questions in regard to what they would like the password to be
// btnClick.addEventListener('click', function(event){
//     event.preventDefault();
//     var first = prompt('Type a numerical value between 8-128 for desired password length.');
//     var second = prompt('Do you want your password to include Upper Case characters?');
//     var third = prompt('Do you want your password to include lower case characters?');
//     var fourth = prompt('Do you want your password to include numbers?');
//     var fifth = prompt('Do you want your password to include special characters?');
// })




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

var generateBtn = document.getElementById('generate');
generateBtn.addEventListener('click', writePassword);



//function to write password to window
function writePassword() {
        getPrompt();
   var password = generatePassword();
   var newPassword = document.getElementById('password');

 newPassword.value = password;

}

//function to generate a random password with characters selected by user
function generatePassword () {
    var newPassword = "";
    for(var i = 0; i< characterLength; i++) {
      var randomIndex = Math.floor(Math.random() * choiceArray.length);
      newPassword = newPassword + choiceArray[randomIndex];
    }
    console.log(password);
    return password;
   
  }

