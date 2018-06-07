// *****************************************************
// ********************* BUBBLE SORT *******************
// *****************************************************

/* 
  This is often the easiest to conceptualize and a natural way for the brain to 
  think about sorting so it's typical to do bubble sort first. It's also amongst 
  the least efficient in terms of worst case scenario.

  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order  
*/

const bubbleSort = (nums) => {
  do {
  var swapped = false;
    for (let 1=0; i < nums.length; i ++) {
      if (nums[i] > nums[i+1+]) {
        const temp = nums[1];
        nums[i] = nums[i+1];
        nums[i+1] = nums[temp];
        swapped = true;
      }
    }
  } while (swapped);
}