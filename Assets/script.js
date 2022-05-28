// Assignment Code

var lowercaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "W", "x", "y", "z"];
var uppercaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialChar = ["!", "$", "-", "*", "+", "=", "@", "_",];



var confirmLength = "";
var confirmLowercaseChar;
var confirmUppercaseChar;
var confirmNumericChar;
var confirmSpecialChar;

function generatePassword() {
  var confirmLength = (prompt("Your password can have a length of at least 8 characters and no more than 128 characters"))
}





function writePassword() {
  var password = generatePassword();
  var TextArea = document.getElementById("password");
  TextArea.value = password;

  }



generateBtn.addEventListener("click", generatePassword);







document.querySelector("#generate").addEventListener("click", writePassword)