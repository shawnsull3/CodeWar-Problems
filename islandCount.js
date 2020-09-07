// Given a 2D array binaryMatrix of 0s and 1s, implement a function getNumberOfIslands 
// that returns the number of islands of 1s in binaryMatrix.

// An island is defined as a group of adjacent values that are all 1s. A cell in binaryMatrix 
// is considered adjacent to another cell if they are next to each either on the same row or 
// column. Note that two values of 1 are not part of the same island if they’re sharing only 
// a mutual “corner” (i.e. they are diagonally neighbors).

// Explain and code the most efficient solution possible and analyze its time and space complexities.

function getNumberOfIslands(binaryMatrix) {
    let count = 0;
  
    for (let row = 0; row < binaryMatrix.length; row++) {
      for (let col = 0; col < binaryMatrix[row].length; col++) {
        
        if (binaryMatrix[row][col] === 1) {
            let left = 0;
            let above = 0;
            let right = 0;
            let aboveRight = 0;
            if (col !== 0) {
              left = binaryMatrix[row][col-1];
            }
            if (row !== 0) {
              above = binaryMatrix[row-1][col];
            }
            if (row !== 0 && col !== binaryMatrix[row].length-1) {
              right = binaryMatrix[row][col+1];
              aboveRight = binaryMatrix[row-1][col+1];
            }
            if (left === 1 || above === 1) {
              continue;
            } else if (right === 1 && aboveRight === 1) {
                console.log('right/aboveright: ', right, aboveRight)
              continue; 
            } else {
              console.log(row, col)
              count++
              console.log(count)
            }
        }
      }
    }
    console.log(count);
    return count;
}

binaryMatrix = [ [0,    1,    0,    1,    0],
                [0,    0,    1,    1,    1],
                [1,    0,    0,    1,    0],
                [0,    1,    1,    0,    0],
                [1,    0,    1,    0,    1] ];

// let a = []

getNumberOfIslands(binaryMatrix);