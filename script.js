// Assignment Code
var generateBtn = document.querySelector("#generate");

const buildAllowedCharacters = () => {
  let allowedCharacters = ''

  do {
    if (confirm('Include lowercase?')) allowedCharacters += 'abcdefghijklmnopqrstuvwxyz'
    if (confirm('Include uppercase?')) allowedCharacters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (confirm('Include numeric characters?')) allowedCharacters += '0123456789'
    if (confirm('Inlcude special characters?')) allowedCharacters += `!”#$%&'()*+,-./:;<=>?@[\]^_\`{|}~`
  } while (!allowedCharacters.length)

  return allowedCharacters
}

const generatePassword = (length, characters) => {
  let password = ''
  for (let i = 0; i < length; i++) {
    password += characters[Math.floor(Math.random() * characters.length)]
  }
  return password
}

// Write password to the #password input
function writePassword() {
  do {
    length = prompt('Length of password? (min of 8 | max of 128)')
  } while (length < 8 || length > 128)
  const characters = buildAllowedCharacters()
  var password = generatePassword(length, characters.split(''));
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
