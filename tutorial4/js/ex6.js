
let number = Number(prompt("Enter a number for the multiplication table:"));

if (!isNaN(number)) {
  for (let i = 0; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
} else {
  console.log("Please enter a valid number.");
}

console.log("Rosa's Output from Tutorial 4 Example 6");