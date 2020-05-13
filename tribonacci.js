
// n the amount of numbers to return
function tribonacci(signature,n){
    if (n === 0) {
        return [];
    }
    let returnArr = signature.slice(0, n);
    
    for (let i = 3; i < n; i++) {
        let val = returnArr[i-3] + returnArr[i-2] + returnArr[i-1];
        returnArr.push(val);
    }
    return returnArr;
}

tribonacci([1,1,1],10); // [1,1,1,3,5,9,17,31,57,105])
tribonacci([0,0,1],10); // [0,0,1,1,2,4,7,13,24,44])
tribonacci([0,1,1],10); // [0,1,1,2,4,7,13,24,44,81])
tribonacci([1,0,0],10); // [1,0,0,1,1,2,4,7,13,24])
tribonacci([0,0,0],10); // [0,0,0,0,0,0,0,0,0,0])