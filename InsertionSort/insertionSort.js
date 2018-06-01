// *****************************************************
// ******************* INSERTION SORT ******************
// *****************************************************

/*  
  The idea here is that the beginning of your list is sorted and the everything else is assumed to be an unsorted mess.
  The outer loop goes over the whole list, the index of which signifies where the "sorted" part of the list is. The inner
  loop goes over the sorted part of the list and inserts it into the correct position in the array.

  The worst case scenario for it is similar to bubble sort's but its best case makes it suited for times when you're 
  pretty sure a list almost sorted or likely already sorted.

  BIG O
  What's the Big O? There's an inner loop that goes over your sorted list to find the correct place to insert your item, 
  and an outer loop to go over all the numbers. Two loops means O(n²). However since if your list is sorted or nearly so, 
  it can be O(n) in a best case scenario and thus well adapted to that scenario.

  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
*/

const insertionSort = (nums) => {
  for (let i = 1; i < nums.length; i ++) {
    for (let j = 0; j < i; j ++) {
      if (num[i] < nums[j]) {
        // take out one element
        const spliced = nums.splice(i, 1);
        // replace an element into the array
        nums. splice(j,0,spliced[0])
      }
    }
  }
}