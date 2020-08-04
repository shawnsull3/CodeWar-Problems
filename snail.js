// Given an n x n array, return the array elements arranged from 
// outermost elements to the middle element, traveling clockwise.

snail = function(array) {
    let returnArr = [];

    let finalLength = array.length * array.length;
    let top = 0
    let right = array[0].length-1;
    let bottom = array.length-1;
    let left = 0;

    const snailBuild = () => {
        for (let i=left; i <= right; i++) {
            returnArr.push(array[top][i]);
        }
        if (returnArr.length === finalLength) {
            return;
        }
        top++;

        // right down
        for (let i=top; i <= bottom; i++) {
            returnArr.push(array[i][right]);
        }
        if (returnArr.length === finalLength) {
            return;
        }
        right--;

        // right / left
        for (let i=right; i >= left; i--) {
            returnArr.push(array[bottom][i]);
        }
        if (returnArr.length === finalLength) {
            return;
        }
        bottom--;

        //up / down
        for (let i=bottom; i > top; i--) {
            returnArr.push(array[i][left]);
        }
        if (returnArr.length === finalLength) {
            return;
        }
        left++;
        
        if (returnArr.length !== finalLength) {
            snailBuild();
        }
    }

    snailBuild();

    console.log(returnArr);
    return returnArr;
}

array = [[1,2,3],
         [4,5,6],
         [7,8,9]];

snail(array) // [1,2,3,6,9,8,7,4,5]

array1 = [[1,2,3,4],
         [5,6,7,8],
         [9,10,11,12],
         [13,14,15,16]];
snail(array1) // [1,2,3,4,8,12,16,15,14,13,9,5,6,7,8,11,10