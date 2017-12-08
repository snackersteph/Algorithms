var selectionSort = function(array) {
  
  // Iterate through the array
  for (var i = 0; i < array.length; i ++) {
    
    // Hold the index of the lowest number
    var lowestNumberIndex = i;
    
    // Iterate to find the next value after the target value
    for (var j = i + 1; j < array.length; j++) {
      
      // Compare the two values
      // If the next value is lower than the lowestNumberIndex value 
      // Update the lowestNumberIndex to the new value
      if (array[j] < array[lowestNumberIndex]) {
        lowestNumberIndex = j;
      }
    }
    
    // If the lowest value is not i, swap the two numbers to be in the right place
    if (lowestNumberIndex != i) {
      var temp = array[i];
      array[i] = array[lowestNumberIndex];
      array[lowestNumberIndex] = temp;
    }
  }
  return array
}

// TIME COMPLEXITY --> O(n^2)

// selectionSort([1,4,6,8,2,5])
// selectionSort([0,0,0,4,5,7,1])
// selectionSort([0,9,8,7,6,5,4,3,2,1])
