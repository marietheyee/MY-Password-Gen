var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChar = "1234567890";
var specialChar = "!@#$%^&*()_+?><-";

function generatePassword() {
  var passwordCharSet = "";

var length = prompt("Enter a number from 8 to 128 for password length");

var lowerCase= confirm("Would you like to use lowercase letters?");
if (lowerCase) {
  passwordCharSet += lowerCaseChar;
};
console.log(passwordCharSet)
var upperCase = confirm("Would you like to use uppercase letters?");
if (upperCase) {
  passwordCharSet += upperCaseChar;
};
console.log(passwordCharSet)
var numerical = confirm("Would you like to use numbers?");
if (numerical) {
  passwordCharSet += numericChar
};

var special = confirm("Would you like to use special characters?");
if (special) {
  passwordCharSet += specialChar
};

var password = "";
for (let i = 0; i <length; i++) {
  password += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]
}
return password;
}

function writePassword() {
  console.log("hello")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);