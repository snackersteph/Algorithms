// *****************************************************
// ******************** BINARY SEARCH ******************
// *****************************************************

// INPUT: sorted array and target value
// OUTPUT: index of target value in the input array

var binarySearch = (array, item) => {
  var start = 0;
  var end = array.length - 1;
  var guessIndex;

  while (start <= end) {
    guessIndex = Math.floor((start + end)/2)

    if (array[guessIndex] == item) {
      return guessIndex;
    }

    if (array[guessIndex] > item) {
      end = guessIndex - 1;
    }

    if (array[guessIndex] < item) {
      start = guessIndex + 1;
    }
  }

  return -1;
}

// TIME COMPLEXITY --> O(n^2)

// >>>>>>>>>>>>>>>>>> TEST CASES >>>>>>>>>>>>>>>>>> //

// console.log(binarySearch([1,2,3,4,5],0))
// console.log(binarySearch([1,2,3,4,5],1))
// console.log(binarySearch([1,2,3,4,5],2))
