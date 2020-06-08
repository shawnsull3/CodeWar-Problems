// Your goal in this kata is to implement a difference function, 
// which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
  for (let i=0; i < b.length; i++) {
    const checker = function(value) {
        if (a.indexOf(value) !== -1) {
            a.splice(a.indexOf(value), 1);
            checker(value);
        }
        return;
    }
    checker(b[i]);
  }
  console.log(a);
  return a;
}

arrayDiff([1,2],[1]) // [2]
arrayDiff([1,2,2,2,3],[2]) // [1,3]