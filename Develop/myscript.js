var btnClick = document.getElementById('generate');

btnClick.addEventListener('click', function(event){
    event.preventDefault();
    var first = prompt('Type a numerical value between 8-128 for desired password length.');
    var second = prompt('Do you want your password to include Upper Case characters?');
    var third = prompt('Do you want your password to include lower case characters?');
    var fourth = prompt('Do you want your password to include numbers?');
    var fifth = prompt('Do you want your password to include special characters?');
})