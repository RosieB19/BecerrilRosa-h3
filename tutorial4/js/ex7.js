

let hours = Number(prompt("Enter hours (0-23):"));
let minutes = Number(prompt("Enter minutes (0-59):"));
let seconds = Number(prompt("Enter seconds (0-59):"));

if (
  !isNaN(hours) && Number.isInteger(hours) && hours >= 0 && hours <= 23 &&
  !isNaN(minutes) && Number.isInteger(minutes) && minutes >= 0 && minutes <= 59 &&
  !isNaN(seconds) && Number.isInteger(seconds) && seconds >= 0 && seconds <= 59
) {

  console.log(`Time input: ${hours}h${minutes}m${seconds}s`);

  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours = (hours + 1) % 24;
    }
  }
  console.log(`One second later: ${hours}h${minutes}m${seconds}s`);
} else {
  console.log("Please enter valid hours (0-23), minutes (0-59), and seconds (0-59).");
}

console.log("Rosa's Output from Tutorial 4 Example 7");