function validSolution(board){
    // row check
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row].lastIndexOf(board[row][col]) !== col) {
                return false;
            }
        }
    }
     // col check
    for (let col = 0; col < 9; col++) {
        let array = []
        for (let row = 0; row < 9; row++) {
            array.push(board[row][col])
        }
        for (let i = 0; i < 9; i++) {
            if (array.lastIndexOf(array[i]) !== i) {
                return false;
            }
        }
    }
    // square check
    const squareCheck = (row, col) => {
        let squareArr = [];
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                squareArr.push(board[row + i][col + j])
            }
        }
        console.log(squareArr)
        for (let i = 0; i < 9; i++) {
            if (squareArr.lastIndexOf(squareArr[i]) !== i) {
                return false;
            }
        }
    }
    const squarePoints = [[0,0], [0,3], [0,6], [3,0], [3,3], [6,3], [0,6], [3,6], [6,6]];
    for (let i = 0; i < 9; i++) {
        let check = squareCheck(squarePoints[i][0], squarePoints[i][1]);
        if (check === false) {
            return false;
        }
    }
}

console.log(validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
])); // => true

validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2], 
    [6, 7, 2, 1, 9, 0, 3, 4, 8],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9]
]); // => false