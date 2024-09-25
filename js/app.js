const passwordBox = document.getElementById("password")
const length = document.getElementById("length").value;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const specialchar = "!@#$%^&*()-_+=[]{}\\/|:;\"'<>,.?~";
const allChars = upperCase + lowerCase + number + specialchar;

function createPassword() {
  let password = ""; // Initialize an empty password variable
  const passwordLength = document.getElementById("length").value; // Get user-defined length

  // Ensure length is a valid number
  if (passwordLength < 8 || passwordLength > 32) {
    alert("Please choose a length between 8 and 32.");
    return;
  }

  // Adding at least one character from each category to ensure complexity
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += specialchar[Math.floor(Math.random() * specialchar.length)];

  // Generate remaining characters to reach the specified length
  while (password.length < passwordLength) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passwordBox.value = password; // Display the generated password
}


function copyPassword() {
  navigator.clipboard.writeText(passwordBox.value).then(() => {
    alert("Password copied to clipboard");
  });
}


