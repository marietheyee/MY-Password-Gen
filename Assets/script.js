// Assignment Code
//create an array
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChar = "1234567890";
var specialChar = "!@#$%^&*(()_+=.,";

//Create final empty array
var characterCombo = [];

var confirmLength = "";
var confirmLowercaseChar;
var confirmUppercaseChar;
var confirmNumericChar;
var confirmSpecialChar;

var passwordLength;
//get input from user for length of password//
function generatePassword() {
   passwordLength = window.prompt("Your password can have a length of at least 8 characters and no more than 128 characters.");
if (passwordLength => 8 && passwordLength <= 128) {
    window.confirm ("Your password is" + passwordLength + "characters");
} else {
    window.alert("Please enter character value.");

    confirmLowercaseChar = window.prompt("Do you want to include lowercase characters?");
if (confirmLowercaseChar === lowercaseChar ) {
  window.confirm("You have added" + confirmLowercaseChar + "characters");
} else {
    window.alert("Please enter lowercase characters.");
}

    confirmUppercaseChar = window.prompt("Do you want to include uppercase characters?");
if (confirmUppercaseChar || uppercaseChar) {
  window.confirm ("Your password has" + confirmUppercaseChar + "characters.");
} else {
    window.alert("Please enter uppercase characters.");
}   

    confirmNumericChar = window.prompt("Do you want to include numbers?");
if (confirmNumericChar === numericChar) {
  window.confirm("Your password has" + confirmNumbericChar + "numbers.");
} else {
  window.alert("Please enter numbers.");
  }

    confirmSpecialChar = window.prompt("Do you want to add special characters?");
if (confirmSpecialChar || lowercaseChar || uppercaseChar || numericChar) {
  window.confirm("Your password has" + confirmSpecialChar + "special characters.");
} else {
  window.alert("Please enter special characters.");
}

for (let i=0; i<length; i++) {
  password += characters.lowercaseChar(
    Math.floor(Math.random() * characters.length)
  );

  //Do I do this separately for all categories?
  return password;
}

}}


//ask user if they want lowercase letter
//ask user if they want uppercase letter
//ask user if they want numbers
//ask user if they want special characters


//for loop goes down - create random selection variable


function writePassword() {
  var password = generatePassword();
  var TextArea = document.getElementById("password");
  TextArea.value = password;

  }
function passwordCombo(){
  characterCdombo = [];

}




generateBtn.addEventListener("click", generatePassword);
document.querySelector("#generate").addEventListener("click", writePassword)