// Write a function that takes an integer as input, and returns the number of bits 
// that are equal to one in the binary representation of that number. You can guarantee t
// hat input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function 
// should return 5 in this case

const countBits = function(n) {
    const binary = n.toString(2);
    console.log(binary)
    let count = 0;

    for (let i = 0; i < binary.length; i++) {
        if(binary[i] === '1') {
            count++;
        }
    }

    console.log(count);
    return count;
};

countBits(1234) // 5
countBits(4) // 1
countBits(7) // 3
countBits(9) // 2
countBits(10) // 2
