var btnClick = document.getElementById('generate');
var password = getElementById('password');


//Possible characters for generating password
var specialCharacterArray = ['!', '#', '$', "%", '&', '^', '*', '(', ')'];
var lowerCaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


//event listener for when the 'generate password' button is clicked; user is prompted to answer questions in regard to what they would like the password to be
btnClick.addEventListener('click', function(event){
    event.preventDefault();
    var first = prompt('Type a numerical value between 8-128 for desired password length.');
    var second = prompt('Do you want your password to include Upper Case characters?');
    var third = prompt('Do you want your password to include lower case characters?');
    var fourth = prompt('Do you want your password to include numbers?');
    var fifth = prompt('Do you want your password to include special characters?');
})

//function to generate a random password with characters selected by user
function generatePassword(){

}

//function to write password to window
function writePassword(){
    generatePassword(password.value);
};