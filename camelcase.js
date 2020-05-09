// Complete the method/function so that it converts dash/underscore delimited 
// words into camel casing. The first word within the output should be capitalized 
// only if the original word was capitalized (known as Upper Camel Case, also often 
// referred to as Pascal case).

function toCamelCase(str){
  // iterate over str
  // if char === - or _
    // delete it, and take the next char and turn it to uppercase
}

toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"