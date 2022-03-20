let desiredCharacterSet = []

const characterSets = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  numeric: '0123456789',
  special: `!”#$%&'()*+,-./:;<=>?@[\]^_\`{|}~`
}

const generatePassword = passwordLength => {
  let password = ''
  let allowedCharacters = ''
  // Make sure that at least one of each desired character is included in the created password string.
  Object.keys(characterSets).forEach(charSet => {
    if (desiredCharacterSet.includes(charSet)) {
      passwordLength--
      allowedCharacters += characterSets[charSet]
      password += characterSets[charSet][Math.floor(Math.random() * characterSets[charSet].length)]
    }
  })
  // Determine the remaining characters of the password
  for (let i = 0; i < passwordLength; i++) {
    password += allowedCharacters[Math.floor(Math.random() * allowedCharacters.length)]
  }
  // Shuffle the password so that the first four characters aren't always the 'guaranteed' characters.
  return password.split('').sort(() => Math.random() - 0.5).join('')
}

// Write password to the #password input
const writePassword = () => {
  // Reset the desired character sets. In case the user wants to make a new password, with
  // different character sets, after making a previous password.
  desiredCharacterSet = []
  do {
    passwordLength = prompt('Length of password? (min of 8 | max of 128)')
  } while (passwordLength < 8 || passwordLength > 128)

  // Determine what types of characters to include in the password.
  do {
    Object.keys(characterSets).forEach(charSet => {
      if (confirm(`Include ${charSet}?`)) desiredCharacterSet.push(charSet)
    })
  } while (!desiredCharacterSet.length)

  document.querySelector("#password").value = generatePassword(passwordLength)
}

// Add event listener to generate button
document.querySelector("#generate").addEventListener("click", writePassword);
