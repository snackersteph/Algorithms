// *****************************************************
// ************** BREADTH FIRST TRAVERSAL **************
// *****************************************************

// Breadth-first isn't recursive processing of subtrees 
// like depth-first. Instead we want to process one layer 
// at a time. What we're going to do is process the node, 
// then add the left child to the queue and then add the 
// right child to the queue. After that, we'll just dequeue 
// an item off of the queue and call our function recursively 
// on that node. You keep going until there's no items left 
// in the queue.

// recursive version
const breadthFirstTraverse = (queue, array) => {
  if (!queue.length) return array;
  const node = queue.shift();
  array.push(node.value);
  if (node.left) queue.push(node.left);
  if (node.right) queue.push(node.right);
  return breadthFirstTraverse(queue, array);
}

// iterative version
const breadthFirstTraverse2 = (queue, array) => {
  if (!queue.length) return array;
  
  while (queue.length) {
    const node = queue.shift();
    array.push(node.value);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  
  return array;
}

// Jasmine unit tests

// describe('tests', function() {
//   const answer = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K' ];
  
//   const tree = {
//     value: "A",
//     left: {
//       value: "B",
//       left: {
//         value: "D",
//         left: {
//           value: "G",
//           left: null,
//           right: null
//         },
//         right: null
//       },
//       right: {
//         value: "E",
//         left: null,
//         right: {
//           value: "H",
//           left: {
//             value: "K",
//             left: null,
//             right: null
//           }
//         }
//       }
//     },
//     right: {
//       value: "C",
//       left: {
//         value: "F",
//         left: {
//           value: "I",
//           left: null,
//           right: null
//         },
//         right: {
//           value: "J",
//           left: null,
//           right: null
//         }
//       },
//       right: null
//     }
//   };
  
//   render(tree, answer);
  
//   it('breadthFirstTraverse', () => {
//     expect(breadthFirstTraverse([tree], [])).toEqual(answer);
//     expect(breadthFirstTraverse2([tree], [])).toEqual(answer);
//   });
// });