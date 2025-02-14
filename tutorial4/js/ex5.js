
let password;
let attempts = 0;
const correctPassword = "secret";
const maxAttempts = 3;

while (attempts < maxAttempts) {
  password = prompt("Enter the password:");
  attempts++;

  if (password === correctPassword) {
    console.log(`You entered the correct password after ${attempts} attempt(s).`);
    break;
  } else if (attempts === maxAttempts) {
    console.log(`Your account is locked! You failed to enter the correct password ${maxAttempts} times.`);
  }
}

console.log("Rosa's Output from Tutorial 4 Example 5");