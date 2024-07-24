const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to calculate the reduced number
function digitalRoot(n) {
  // Continue summing the digits until n is a single digit
  // The number 10 is the first number with two digits
  while (n >= 10) {
    n = n
      .toString() // .split() only works on strings
      .split("") // Split every character into an array
      .reduce((sum, digit) => sum + +digit, 0);
  }
  return n;
}
// Running function
console.log(digitalRoot(16));
console.log(digitalRoot(942));
console.log(digitalRoot(132189));
console.log(digitalRoot(493193));

// Prompt in the console
rl.question("Enter a non-negative integer: ", (answer) => {
  const num = parseInt(answer, 10);
  if (!isNaN(num) && num >= 0) {
    console.log(`The digital root of ${num} is ${digitalRoot(num)}`);
  } else {
    console.log("Please enter a valid non-negative integer.");
  }
  rl.close();
});
