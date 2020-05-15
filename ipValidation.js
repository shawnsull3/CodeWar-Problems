// Write an algorithm that will identify valid IPv4 addresses in dot-decimal 
// format. IPs should be considered valid if they consist of four octets, with 
// values between 0 and 255, inclusive.
// Input to the function is guaranteed to be a single string.

// Valid inputs:
// 1.2.3.4
// 123.45.67.89
// Invalid inputs:
// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089

function isValidIP(str) {
    const octets = str.split('.')

    if(octets.length !== 4) {
        return false;
    }
    for(let i = 0; i < octets.length; i++) {
        if (octets[i] < 0 || octets[i] > 255 || isNaN(Number(octets[i]))) {
            console.log('false');
            return false;
        }
    }
    console.log('true');
    return true;
}
isValidIP('123.45.67.89'); // true
isValidIP('123.045.067.0899'); // false
isValidIP('66.277.24.197'); // false
isValidIP('171.168.85.cd'); // false

