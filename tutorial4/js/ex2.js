

let name = prompt("Enter your name:");
let units = prompt("Enter the number of units you have completed:");

units = Number(units);

if (!name.trim() || isNaN(units) || units < 0 || !Number.isInteger(units)) {
  console.log("Please enter a valid name and a valid number of units.");
} else {
  let standing;

  if (units <= 30) standing = "Freshman";
  else if (units <= 60) standing = "Sophomore";
  else if (units <= 90) standing = "Junior";
  else standing = "Senior";

  console.log("Hello, " + name + "! You are a " + standing + ".");

  console.log("Rosa's Output from Tutorial 4 Example 2");
}