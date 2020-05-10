// *****************************************************
// *************** DEPTH FIRST TRAVERSAL ***************
// *****************************************************

// There are three variants for how you can process the tree
// - In preorder traversal, you process the node, then recursively 
//   call the method on the left subtree and then the right subtree.

// - In inorder traversal, you first recursively call the method 
//   on the left tree, then process the node, and then call the 
//   method on the right tree.

// - Postorder traversal, as you have guessed, you recursively 
//   call the method on the left subtree, then the right subtree, 
//   then you process the node.

// For a sorted list out of a BST, you'd want to use inorder. 
// If you're making a deep copy of a tree, preorder traversal 
// is super useful since you'd copy a node, and then add its 
// left child and then its right tree. Postorder would be useful 
// if you're deleting a tree since you'd process the left tree, 
// then the right, and only after the children had been deleted 
// would you delete the node you're working on.

const preorderTraverse = (node, array) => {
  if (!node) return array
  array.push(node.value)
  array = preorderTraverse(node.left, array)
  array = preorderTraverse(node.right, array)
  return array
};

const inorderTraverse = (node, array) => {
  if (!node) return array;
  array = inorderTraverse(node.left, array);
  array.push(node.value);
  array = inorderTraverse(node.right, array);
  return array;
};

const postorderTraverse = (node, array) => {
  if (!node) return array;
  array = postorderTraverse(node.left, array);
  array = postorderTraverse(node.right, array);
  array.push(node.value);
  return array;
};

const tree = {
  value: 8,
  left: {
    value: 4,
    left: {
      value: 3,
      left: {
        value: 2,
        left: null,
        right: null
      },
      right: null
    },
    right: {
      value: 5,
      left: null,
      right: {
        value: 7,
        left: {
          value: 6,
          left: null,
          right: null
        }
      }
    }
  },
  right: {
    value: 12,
    left: {
      value: 10,
      left: {
        value: 9,
        left: null,
        right: null
      },
      right: {
        value: 11,
        left: null,
        right: null
      }
    }
  }
};

console.log(preorderTraverse(tree, [])) // [8, 4, 3, 2, 5, 7, 6, 12, 10, 9, 11]
console.log(inorderTraverse(tree, [])) // [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
console.log(postorderTraverse(tree, [])) // [2, 3, 6, 7, 5, 4, 9, 11, 10, 12, 8]
