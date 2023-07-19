// Import the generatePassword function from the 'generate-password' package
const generatePassword = require('generate-password');

// Function to generate a random password
function generateRandomPassword() {
  const password = generatePassword.generate({
    length: 12, // Set the desired password length
    numbers: true, // Include numbers in the password
    symbols: true, // Include symbols in the password
    uppercase: true, // Include uppercase letters in the password
    excludeSimilarCharacters: true, // Exclude similar characters like '1' and 'I'
  });

  return password;
}

// Generate and log a random password
const randomPassword = generateRandomPassword();
console.log('Random Password:', randomPassword);
