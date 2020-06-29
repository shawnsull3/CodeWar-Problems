function nextBigger(n){
    let str = n.toString()
    let arr = [];

    for (i=0; i < str.length; i++) {
        arr.push(Number(str[i]));
    }
    arr.sort();
    console.log(arr);
}

nextBigger(12)   // returns 21
nextBigger(513)  // returns 531
nextBigger(2017) // returns 2071