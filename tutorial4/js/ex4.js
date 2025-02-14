

let number1 = Number(prompt("Enter the first number:"));
let number2 = Number(prompt("Enter the second number:"));

if (!isNaN(number1) && !isNaN(number2)) {

  console.log(`${number1} + ${number2} = ${number1 + number2}`);
  console.log(`${number1} - ${number2} = ${number1 - number2}`);
  console.log(`${number1} * ${number2} = ${number1 * number2}`);
  console.log(`${number1} / ${number2} = ${number1 / number2}`);
  console.log(`${number1} % ${number2} = ${number1 % number2}`);
} else {
  console.log("Please enter two valid numbers.");
}

console.log("Rosa's Output from Tutorial 4 Example 4");