// Assignment Code
var generateBtn = document.querySelector("#generate");

const generatePassword = length => {
  const allowedCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+{[}]:;"<,>.?/\''.split('')
  let password = ''
  for (let i = 0; i < length; i++) {
    password += allowedCharacters[Math.floor(Math.random() * allowedCharacters.length)]
  }
  return password
}

// Write password to the #password input
function writePassword() {
  do {
    length = prompt('Length of password? (min of 8 | max of 128)')
  } while (length < 8 ||length > 128)
  var password = generatePassword(length);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
