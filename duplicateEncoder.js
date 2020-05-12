// The goal of this exercise is to convert a string to a new string 
// where each character in the new string is "(" if that character appears 
// only once in the original string, or ")" if that character appears more than 
// once in the original string. Ignore capitalization when determining if a character 
// is a duplicate.


const duplicateEncoder = (word) => {
    // toLowerCase
    // iterate over string
        // splice string to remove the current char
        // if that char is still in the word
            // push ) to return str
        // else
            // push (
}

duplicateEncode("din"); // ==== (((
duplicateEncode("recede"); // === ()()()
duplicateEncode("Success"); // === )())())
duplicateEncode("(( @"); // ==== ))((