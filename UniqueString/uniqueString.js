// *****************************************************
// ******************** UNIQUE STRING ******************
// *****************************************************

// Implement an algorithm to determine if a string has all unique characters

// You can ask if the character set is ASCII or Unicode
// If it is ASCII, then you know that if the string is longer than 128, then there are duplicates 

// METHOD 1 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Using a hash

let isUnique = (string) => {
  let charTable = {};
  
  for (let char of string) {
    if (charTable.hasOwnProperty(char)) {
      return false;
    } else {
      charTable[char] = char;
    }
  }
  return true;
}

// METHOD 2 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Using a set

function isUnique(str) {
  return new Set(str).size == str.length;
}


// If we can alter the string, then you can sort it with a O(log(n)) algorithm and then compare the neighboring characters

// >>>>>>>>>>>>>>>>>> TEST CASES >>>>>>>>>>>>>>>>>> //

// console.log(isUnique('abc'));    // true
// console.log(isUnique('abcabc')); // false

