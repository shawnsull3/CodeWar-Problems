// Complete the method/function so that it converts dash/underscore delimited 
// words into camel casing. The first word within the output should be capitalized 
// only if the original word was capitalized (known as Upper Camel Case, also often 
// referred to as Pascal case).

function toCamelCase(str){
  let camelCase = '';

  for (let i = 0; i < str.length; i++) {
      if (str[i] === '-' || str[i] === '_') {
          camelCase += str[i+1].toUpperCase();
          i++;
      } else {
          camelCase += str[i];
      }
  }

  return camelCase;
}

toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"