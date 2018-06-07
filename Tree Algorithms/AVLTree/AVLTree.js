// *****************************************************
// ********************* AVL TREE **********************
// *****************************************************

// AVLs are specialized BSTs. That is to say a valid AVL tree is 
// always a valid BST (but not necessarily vice versa.) When you 
// add a new value to a AVL tree, you do it the same way. The only 
// difference is on the way up your recursive calls you check to 
// see if the node is balanced after you added the new node. A tree 
// is out of balance if its subtrees' difference of heights is 
// greater than one.

// We can now guarantee that we won't hit those bad or worst case 
// scenarios of having greatly out-of-balance trees and guarantee 
// we won't hit the O(n) cases. Our worst case becomes O(log n).

// PROCESS FOR A SINGLE RIGHT ROTATION
// -> perform right rotation
// -> swap the values of nodes A and B
// -> make node B the left child of node A
// -> make node C the right child of node A
// -> move node B's right child to its left child
//    (in this case they're both null)
// -> make node A's _original_ left child
//    (which was null in this case) the left child of node B
// -> update the heights of all the nodes involved

class Tree {
  constructor() {
    this.root = null;
  }
  add(value) {
    if (!this.root) {
      this.root = new Node(value);
    }
    else {
      this.root.add(value);
    }
  }
  toJSON() {
    return JSON.stringify(this.root.serialize(), null, 4);
  }
  toObject() {
    return this.root.serialize();
  }
}

class Node {
  constructor(value=null, left=null, right=null) {
    this.left = left;
    this.right = right;
    this.value = value;
    this.height = 1;
  }
  add(value) {
    
    if (value < this.value) {
      // go left
      
      if (this.left) {
        this.left.add(value);
      }
      else {
        this.left = new Node(value);
      }
      if (!this.right || this.right.height < this.left.height) {
        this.height = this.left.height + 1;
      }      
    }
    else {
      // go right
      
      if (this.right) {
        this.right.add(value);
      }
      else {
        this.right = new Node(value);
      }
      if (!this.left || this.right.height > this.left.height) {
        this.height = this.right.height + 1;
      } 
    }
    this.balance();
  }
  balance() {
    const rightHeight = (this.right) ? this.right.height : 0;
    const leftHeight = (this.left) ? this.left.height : 0;
    
    
    if ( leftHeight > rightHeight + 1 ) {
      const leftRightHeight = (this.left.right) ? this.left.right.height : 0;
      const leftLeftHeight = (this.left.left) ? this.left.left.height : 0;
      
      if (leftRightHeight > leftLeftHeight) {
        this.left.rotateRR();
      }
      
      this.rotateLL();
    }
    else if ( rightHeight > leftHeight + 1 ) {
      const rightRightHeight = (this.right.right) ? this.right.right.height : 0;
      const rightLeftHeight = (this.right.left) ? this.right.left.height : 0;
      
      if (rightLeftHeight > rightRightHeight) {
        this.right.rotateLL();
      }
      
      this.rotateRR();
    }
  }
  rotateRR() {
    const valueBefore = this.value;
    const leftBefore = this.left;
    this.value = this.right.value;
    this.left = this.right;
    this.right = this.right.right;
    this.left.right = this.left.left;
    this.left.left = leftBefore;
    this.left.value = valueBefore;
    this.left.updateInNewLocation();
    this.updateInNewLocation();
  }
  rotateLL() {
    const valueBefore = this.value;
    const rightBefore = this.right;
    this.value = this.left.value;
    this.right = this.left;
    this.left = this.left.left;
    this.right.left = this.right.right;
    this.right.right = rightBefore;
    this.right.value = valueBefore;
    this.right.updateInNewLocation();
    this.updateInNewLocation();
  }
  updateInNewLocation() {
    if (!this.right && !this.left) {
      this.height = 1;
    }
    else if (!this.right || (this.left && this.right.height < this.left.height)) {
        this.height = this.left.height + 1;
    }
    else { //if (!this.left || this.right.height > this.left.height)
        this.height = this.right.height + 1;
    }
  }
  serialize() {
    const ans = { value: this.value };
    ans.left = this.left === null ? null : this.left.serialize();
    ans.right = this.right === null ? null : this.right.serialize();
    ans.height = this.height;
    return ans;
  }
}

// Jasmine unit tests

// describe('AVL Tree', function() {
//   it('creates a correct tree', () => {
//     const nums = [3,7,4,6,5,1,10,2,9,8];
//     const tree = new Tree();
//     nums.map( num => tree.add(num));
//     const objs = tree.toObject();
//     render(objs, nums);

//     expect(objs.value).toEqual(4);
    
//     expect(objs.left.value).toEqual(2);
    
//     expect(objs.left.left.value).toEqual(1);
//     expect(objs.left.left.left).toBeNull();
//     expect(objs.left.left.right).toBeNull();
    
//     expect(objs.left.right.value).toEqual(3);
//     expect(objs.left.right.left).toBeNull();
//     expect(objs.left.right.right).toBeNull();
    
//     expect(objs.right.value).toEqual(7);
    
//     expect(objs.right.left.value).toEqual(6);
//     expect(objs.right.left.right).toBeNull();
    
//     expect(objs.right.left.left.value).toEqual(5);
//     expect(objs.right.left.left.left).toBeNull();
//     expect(objs.right.left.left.right).toBeNull();
    
//     expect(objs.right.right.value).toEqual(9);
    
//     expect(objs.right.right.left.value).toEqual(8);
//     expect(objs.right.right.left.left).toBeNull();
//     expect(objs.right.right.left.right).toBeNull();
    
//     expect(objs.right.right.right.value).toEqual(10);
//     expect(objs.right.right.right.left).toBeNull();
//     expect(objs.right.right.right.right).toBeNull();
//   });
// });