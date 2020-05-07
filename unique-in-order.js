// Implement the function unique_in_order which takes as argument a sequence and returns a list 
// of items without any elements with the same value next to each other and preserving the original 
// order of elements.

const uniqueInOrder = function(iterable) {
  if (iterable.length === 0) {
      return [];
  }
  
  const returnArr = [iterable[0]];

  for (let i = 1; i < iterable.length; i++) {
      if (iterable[i-1] !== iterable[i]) {
        returnArr.push(iterable[i]);
      }
  }

  return returnArr;
}

// Test Suite
console.log(uniqueInOrder('AAAABBBCCDAABBB')); // ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder('ABBCcAD'));         // ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1,2,2,3,3]));       // [1,2,3]