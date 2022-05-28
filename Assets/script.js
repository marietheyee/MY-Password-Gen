// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericalChar = "123456789";
var specialChar = "!#$%&'()*+=";

function generatePassword() {

  var password = "";
  var passwordChar = "";

  var passwordLengthUser = prompt("Choose how many characters you want in your password. Password must be between 8-128 characters.");
  passwordLengthUser = parseInt(passwordLengthUser);

  if (passwordLengthUser < 8) {
    alert("Password must have more than 7 characters.");
    return "";
  }

  if (passwordLengthUser > 128) {
    alert("Password can't have more than 128 characters.");
    return ""

  }

  var lowercaseChoice = confirm("Do you want to include lowercase characters?");

  if (lowercaseChoice) {
    passwordChar += lowercaseChar;

  }

  var uppercaseChoice = confirm("Do you want to include uppercase characters?");

  if (uppercaseChoice) {
    passwordChar += uppercaseChar;
  }

  var numericalCharChoice = confirm("You should add a few numbers.");

  if (numericalCharChoice) {
    passwordChar += numericalChar;
  }

  var specialcharChoice = confirm("Do you want to add special characters?");

  if (specialcharChoice) {
    passwordChar += specialChar;
  }

  for (var i = 0; i < passwordLengthUser; i++) {
    password = passwordChar[Math.floor(Math.random() * passwordChar.length)]
  }


// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var TextArea = document.getElementById("password");
  TextArea.value = password;

  }
}
generateBtn.addEventListener("click", generatePassword);
