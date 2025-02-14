const numAdd = 3;
const num1 = prompt("Enter a number:");
const sum = num1 + numAdd;
alert(`You entered: ${num1}. ${num1} + ${numAdd} = ${sum}`);

//Lets fix by converting to a Number//
const numAdd = 3;
const num1 = Number(prompt("Enter a number:"));
const sum = num1 + numAdd;
alert(`You entered: ${num1}. ${num1} + ${numAdd} = ${sum}`);

//Above works for a good input (e.g., enter a number 7)
//What if the user enters a string, e.g., "seven"?//
//Then you get NAN
//Lets convert num1 to a number in the sum calculation

const numAdd = 3;
const num1 = prompt("Enter a number:");
const sum = Number(num1) + numAdd;
alert(`You entered: ${num1}. ${num1} + ${numAdd} = ${sum}`);

//the above will keep the value the user entered//
