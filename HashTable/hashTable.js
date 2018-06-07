// *****************************************************
// ******************** HASH TABLE *********************
// *****************************************************

// Implement a HashTableSet

// The class should have three functions:

// add -   function - takes a string as an input, hashes 
//         it, and puts in its table
// check - function - takes a string and returns true if 
//         it exists in its table; otherwise returns false
// hash -  function - takes a string and a max number and 
//         return a number between 0 and the max number
//         function must be idempotent; the same string 
//         and max number will always yield the same output    

// This is powerful for maps because now our key points to 
// exactly where our object is being store. And it's very 
// powerful for sets because we can just check where if anything 
// exists that memory address and if so then it exists; if not 
// then that key is not in the set. When we delete or add there's 
// no lookup cost either so we have constant time deletes, adds, 
// and lookups. A perfect structure, right? Well, no, not really.

// First of all, this isn't useful for something an order with 
// (a list of some sort) because your addresses won't have any 
// notion of order.

// Secondly, you need a sufficiently large footprint of memory 
// to be able to store all of your objects without collisions 
// (we'll talk about collisions in a sec.) This can balloon quickly.

// Thirdly, you'll need a good hashing algorithm that spits 
// out a viable address for table.    

class HashTableSet {
  constructor() {
    this.table = new Array(255);
  }
  add(input) {
    this.table[this.hash(input, 255)] = input;
  }
  check(input) {
    return !!this.table[this.hash(input, 255)];
  }
  hash(input, max) {
    let num = 0;
    for (let i = 0; i < input.length; i++) {
      num += input.charCodeAt(i) * i;
    }
    return num % max;    
  }
}

// Jasmine unit tests

// describe('hash table set', function() {
//   it('hash', () => {
//     const table = new HashTableSet();
//     expect(table.hash('test 1', 50)).toEqual(table.hash('test 1', 50));
//     expect(table.hash('test 2', 10)).toEqual(table.hash('test 2', 10));
//     expect(table.hash('a much longer strings than the other ones', 255))
          //.toEqual(table.hash('a much longer strings than the other ones', 255));
//     expect(table.hash('1 tset', 50)).not.toEqual(table.hash('test 1', 50));
//     expect(table.hash('a much longer strings than the other ones', 2)).toBeLessThan(3);
//   });
//   it('add and check', () => {
//     const table = new HashTableSet();
//     table.add('hi');
//     table.add('this is fun');
//     table.add('another thing');
    
//     //document.getElementById('target').innerHTML = JSON.stringify(table, null, 4);
    
//     expect(table.check('hi')).toEqual(true);
//     expect(table.check('this is fun')).toEqual(true);
//     expect(table.check('another thing')).toEqual(true);
    
//     expect(table.check('ih')).toEqual(false);
//     expect(table.check('not in the list')).toEqual(false);
//     expect(table.check('also not in the list')).toEqual(false);
//   });
// });