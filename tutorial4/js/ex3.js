

let day = prompt("Enter a day of the week using three letter abbreviation and in lower case:").toLowerCase();

let nextDay;

switch (day) {
  case "sun": nextDay = "mon"; break;
  case "mon": nextDay = "tue"; break;
  case "tue": nextDay = "wed"; break;
  case "wed": nextDay = "thu"; break;
  case "thu": nextDay = "fri"; break;
  case "fri": nextDay = "sat"; break;
  case "sat": nextDay = "sun"; break;
  default:
    console.log("Please enter a valid three letter abbreviation (e.g., mon, tue, wed).");
    nextDay = null;
}

if (nextDay) {
  console.log(`You entered: ${day}`);
  console.log(`The following day is: ${nextDay}`);
}

console.log("Rosa's Output from Tutorial 4 Example 3");