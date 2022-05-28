// Assignment Code
document.querySelector("generate").addEventListener("click", writePassword)

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
  var confirmLength = (prompt("How many characters do you want your password to have?"))
}

