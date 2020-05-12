// The goal of this exercise is to convert a string to a new string 
// where each character in the new string is "(" if that character appears 
// only once in the original string, or ")" if that character appears more than 
// once in the original string. Ignore capitalization when determining if a character 
// is a duplicate.


const duplicateEncode = (word) => {
    let returnStr = '';
    word = word.toLowerCase().split('').map(char => {
        let count = 0;
        let idx = 0;
        while (idx !== -1) {
            idx = word.indexOf(char, idx+1)
            console.log('idx=',idx);
            if (idx !== -1){
                count++;
            }
            console.log(count);
            if (count >= 2) {
                break;
            }
        }
        count > 1 ? returnStr += ')' : returnStr += '(';
        console.log(returnStr);
    })

    console.log(returnStr);
    return returnStr;
}

// duplicateEncode("Din"); // ==== (((
// duplicateEncode("recede"); // === ()()()
// duplicateEncode("Success"); // === )())())
duplicateEncode("(( @"); // ==== ))((