const generateBtn = document.querySelector("#generate");

let desiredCharacterSet = []

let characterSets = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  numeric: '0123456789',
  special: `!”#$%&'()*+,-./:;<=>?@[\]^_\`{|}~`
}

const generatePassword = length => {
  let password = ''
  let allowedCharacters = ''
  // The following conditionals make sure that at least one of each desired character is included
  // in the created password string.
  if (desiredCharacterSet.includes('uppercase')) {
    length--
    allowedCharacters += characterSets.uppercase
    password += characterSets.uppercase[Math.floor(Math.random() * characterSets.uppercase.length)]
  }
  if (desiredCharacterSet.includes('lowercase')) {
    length--
    allowedCharacters += characterSets.lowercase
    password += characterSets.lowercase[Math.floor(Math.random() * characterSets.lowercase.length)]
  }
  if (desiredCharacterSet.includes('numeric')) {
    length--
    allowedCharacters += characterSets.numeric
    password += characterSets.numeric[Math.floor(Math.random() * characterSets.numeric.length)]
  }
  if (desiredCharacterSet.includes('special')) {
    length--
    allowedCharacters += characterSets.special
    password += characterSets.special[Math.floor(Math.random() * characterSets.special.length)]
  }
  // Determine the remaining characters of the password
  for (let i = 0; i < length; i++) {
    password += allowedCharacters[Math.floor(Math.random() * allowedCharacters.length)]
  }
  // Shuffle the password so that the first four characters aren't always the 'guaranteed' characters.
  return password.split('').sort(() => Math.random() - 0.5).join('')
}

// Write password to the #password input
function writePassword() {
  // Reset the desired character sets. In case the user wants to make a new password, with
  // different character sets, after making a previous password.
  desiredCharacterSet = []
  do {
    length = prompt('Length of password? (min of 8 | max of 128)')
  } while (length < 8 || length > 128)

  // Determine what types of characters to include in the password.
  do {
    Object.keys(characterSets).forEach(charSet => {
      if (confirm(`Include ${charSet}?`)) desiredCharacterSet.push(charSet)
    })
  } while (!desiredCharacterSet.length)

  const password = generatePassword(length)
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
