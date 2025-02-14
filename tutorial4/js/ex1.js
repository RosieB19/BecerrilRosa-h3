

let input = prompt("Enter a number between 1 and 100:");
let number = Number(input);
if (!isNaN(number) && number % 1 == 0 && number >= 1 && number <= 100)
  console.log("Thank you! You entered " + number + ", A valid number.");

else
  console.log("Sorry, " + input + " is not a valid entry.");

console.log("Rosa's Output from Tutorial 4 Example 1");