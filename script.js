// Assignment Code
var generateBtn = document.querySelector("#generate");

const generatePassword = () => {
  const allowedCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+{[}]:;"<,>.?/\''.split('')
  let password = ''
  for (let i = 0; i < 10; i++) {
    password += allowedCharacters[Math.floor(Math.random() * allowedCharacters.length)]
  }
  return password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
