// *****************************************************
// ******************* NUMBER TO WORDS *****************
// *****************************************************

// Convert a string with digits into a literal representation 
// of the number like: 1001 to one thousand one  

var numberToWords = (number) => {
  var words = "";

  if (number == 0) { return "zero" }

  if (number < 0) { return "minus " + numberToWords(Math.abs(number)) }


  if (Math.floor(number / 1000000) > 0) {
    words += numberToWords(Math.floor(number / 1000000)) + " million ";
    number %= 1000000;
  }

  if (Math.floor(number / 1000) > 0) {
    words += numberToWords(Math.floor(number / 1000)) + " thousand ";
    number %= 1000;
  }

  if (Math.floor(number / 100) > 0) {
    words += numberToWords(Math.floor(number / 100)) + " hundred ";
    number %= 100;
  }

  if (number > 0) {
    if (words != "") {
      words += "and ";
    }

    var unitsMap = [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", 
                     "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen" ];
    var tensMap = ["zero", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety" ];

    if (number < 20) {
      words += unitsMap[number];
    } else {
      words += tensMap[Math.floor(number / 10)];
        if ((number % 10) > 0) {
          words += "-" + unitsMap[number % 10];
        }
    }
  }
  
  return words;
}

// >>>>>>>>>>>>>>>>>> TEST CASES >>>>>>>>>>>>>>>>>> //

// console.log(numberToWords(100))
// console.log(numberToWords(2000))
// console.log(numberToWords(456))
// console.log(numberToWords(9999))