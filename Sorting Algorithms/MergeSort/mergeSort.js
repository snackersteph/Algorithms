// *****************************************************
// ******************** MERGE SORT *********************
// *****************************************************

/*
  Merge sort is actually very useful and one of the easier 
  divide-and-conquer algorithms to understand. It's easier to 
  conceptualize than some of the other ones. A key to merge sort 
  is that it is recursive. If you're struggling to grasp recursion, 
  this is going to be doubly hard to understand this algorithm.

  The basic gist of merge sort is that you're going to take your 
  big list, and first divide down in two half size lists and recursively 
  call merge sort on those smaller list, which in turn will do the same. 
  The base case is when you have a list of one, at which point you will 
  return that sorted list of one. On the way up the recursive calls, 
  you will merge those sorted lists together (preferably by another merge 
  function you'll write) that walks through both lists simultaneously 
  and inserts the smaller value first, effectively creating a bigger 
  sorted list.
*/

const mergeSort = (nums) => {
  if (nums.length < 2) {
    return nums;
  }

  const length = nums.length;
  const middle = Math.floor(length / 2);
  const left = nums.slice(0, middle);
  const right = nums.slice(middle, length);
  
  return stitch(mergeSort(left), mergeSort(right))
};

const stitch = (left, right) => {
  const results = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      results.push(left.shift());
    }
    else {
      results.push(right.shift());
    }
  }

  while(left.length) {
    results.push(left.shift());
  }

  while(right.length) {
    results.push(right.shift());
  }

  return results;
};
