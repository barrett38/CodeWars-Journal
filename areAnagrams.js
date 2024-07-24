function areAnagrams(str1, str2) {
  const sorted = (str) => str.toLowerCase().split("").sort().join("");

  // Compare the sorted versions of both strings
  return sorted(str1) === sorted(str2);
}

// Running function
console.log(areAnagrams("foefet", "toffee"));
console.log(areAnagrams("Buckethead", "DeathCubeK"));
console.log(areAnagrams("hello", "world"));
