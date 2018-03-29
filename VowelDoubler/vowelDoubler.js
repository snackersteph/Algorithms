// *****************************************************
// **************** CALCULATE RAIN WATER ***************
// *****************************************************

// Given a string, return the string with double values of each vowel
// var string = "Hello" 
// vowelDoubler(string) --> "Heelloo"

var vowelDoubler = (charArray) => {
  var vowels = {
    a: 'a', 
    e: 'e', 
    i: 'i',
    o: 'o',
    u: 'u'
  };

  var resultLength = charArray.length;

  for (var i = 0; i < charArray.length - 1; i++) {
    if (vowels.hasOwnProperty(charArray[i])) {
      resultLength++;
    }
  }

  var charIndex = charArray.length - 1;
  for (var i = resultLength - 1; i >= 0; i--) {
    if (vowels.hasOwnProperty(charArray[charIndex])) {
      charArray[i] = charArray[charIndex];
      charArray[--i] = charArray[charIndex];
    } else {
      charArray[i] = charArray[charIndex];
    }
    charIndex--;
  }

  return charArray;
};

// >>>>>>>>>>>>>>>>>> TEST CASES >>>>>>>>>>>>>>>>>> //

var string = 'What\'s up dude?';
var array = string.split('');

var doubledArray = vowelDoubler(array);
console.log(doubledArray.join(''));