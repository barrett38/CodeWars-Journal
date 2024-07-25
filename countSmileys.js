function countSmileys(arr) {
  const smileyRegex = /^[:;][-~]?[)D]$/;
  return arr.filter((face) => smileyRegex.test(face)).length;
}

// Test cases
console.log(countSmileys([":)", ";(", ";}", ":-D"])); // should return 2
console.log(countSmileys([";D", ":-(", ":-)", ";~)"])); // should return 3
console.log(countSmileys([";]", ":[", ";*", ":$", ";-D"])); // should return 1
console.log(countSmileys([])); // should return 0

// Note on Regex above:
// This function counts the number of valid smiley faces in an array.
// A valid smiley face must match the following regular expression:
// ^[:;][-~]?[)D]$
// - ^ asserts the position at the start of the string.
// - [:;] matches either a colon (:) or a semicolon (;), representing the eyes.
// - [-~]? matches zero or one occurrence of either a hyphen (-) or a tilde (~), representing the optional nose.
// - [)D] matches either a closing parenthesis ()) or a capital D, representing the mouth.
// - $ asserts the position at the end of the string.
// The function filters the array using this regular expression and returns the count of valid smiley faces.
