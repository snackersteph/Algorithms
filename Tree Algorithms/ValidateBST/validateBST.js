// *****************************************************
// ******************* VALIDATE A BST ******************
// *****************************************************

// Searching through a binary search tree is very efficient,
// but how do you check if the tree is a valid BST?

var validBST = (node, min, max) => {
  min = min || Number.MIN_SAFE_INTEGER;
  max = max || Number.MAX_SAFE_INTEGER;

  // base cases
  if (node == null) {
    return true;
  }

  if (node.value < min || node.value > max) {
    return false;
  }

  // recurse through the children nodes while 
  // adjusting the min and max values
  return (validBST(node.left, min, node.value-1) 
    && validBST(node.right, node.value+1, max))
}


// >>>>>>>>>>>>>>>>>> TEST CASES >>>>>>>>>>>>>>>>>> //

// var treeOne = {
//   value: 11, 
//   left: {value: 6, left: null, right: null}, 
//   right: {value: 18, left: null, right: null}
// }

// var treeTwo = {
//   value: 11, 
//   left: {value: 20, left: null, right: null}, 
//   right: {value: 18, left: null, right: null}
// }

// console.log(validBST(treeOne)) // true
// console.log(validBST(treeTwo)) // false
