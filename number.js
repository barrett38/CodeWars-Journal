function number(lines) {
  return lines.map((line, index) => `${index + 1}: ${line}`);
}

// Test cases
console.log(number([])); // should return []
console.log(number(["a", "b", "c"])); // should return ["1: a", "2: b", "3: c"]
console.log(number(["hello", "world"])); // should return ["1: hello", "2: world"]

/*

From Codewars:

Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
*/
