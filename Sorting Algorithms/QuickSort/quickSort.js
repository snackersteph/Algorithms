// *****************************************************
// ******************** QUICK SORT *********************
// *****************************************************

/*  
  Quicksort should grab a pivot from the end and then separate the list 
  (not including the pivot) into two lists, smaller than the pivot and 
  larger than the pivot. Call quickSort on both of those lists independently. 
  Once those two lists come back sorted, concatenate the "left" (or smaller numbers)
  list, the pivot, and the "right" (or larger numbers) list and return that. 
  The base case is when quickSort is called on a list with length 
  less-than-or-equal-to 1. In the base case, just return the array given.

  BIG O
  Another Big O of O(n log n) but takes up less memory than mergesort so it is 
  often favored. However it does really poorly if you pass it a sorted list. 
  Think about it. It would always have a pivot of the biggest number which defeats 
  the effectiveness of the divide-and-conquer approach as one side will always 
  contain all the elements. Hence not good for lists you expect may already be sorted.
*/

const quickSort = (nums) => {
  if (nums.length <= 1) return nums;

  // you can use .pop() here, but that would make this function destructive
  // you should try not to be destructive if you can avoid it
  const pivot = nums[nums.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < nums.length - 1; i ++) {
    if (nums[i] < pivot) {
      left.push(nums[i])
    }
    else {
      right.push(nums[i])
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
  // another option:
  // return quickSort(left).concat(pivot, quickSort(right));
}