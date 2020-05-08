// You are given an array (which will have a length of at least 3, but could be very large) 
// containing integers. The array is either entirely comprised of odd integers or entirely 
// comprised of even integers except for a single integer N. Write a method that takes the array 
// as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

function findOutlier(integers){
  const evens = []
  const odds = []

  for (let i = 0; i < integers.length; i++) {
    if (Math.abs(integers[i]) % 2 === 0) {
        evens.push(integers[i]);
    } else {
        odds.push(integers[i]);
    }

    if (evens.length >= 2 && odds.length === 1) {
        console.log(odds[0])
        return odds[0];
    } else if (odds.length >= 2 && evens.length === 1) {
        console.log(evens[0])
        return evens[0];
    }
  }
}

findOutlier([1, 2, 4]); // 1
findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]); // 11
findOutlier([160, 3, 1719, 19, 11, 13, -21]); // 160

