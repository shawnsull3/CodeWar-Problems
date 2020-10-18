// Given an array of integers of any length, return an array that has 1 added to the 
// value represented by the array.

// the array can't be empty
// only non-negative, single digit integers are allowed
// Return nil (or your language's equivalent) for invalid inputs.

// Examples
// For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].

// [4, 3, 2, 5] would return [4, 3, 2, 6]

const upArray = (arr) => {
    if (arr.length === 0) {
        return null;
    }
    let string = arr.join('')

    if (string.indexOf('-') !== -1) {
        return null;
    }

    // turn to number
    // add one to value
    // split back into an array
}

upArray([2,3,9]) // [2,4,0]
upArray([4,3,2,5]) // [4,3,2,6]
upArray([0, -9]) // null