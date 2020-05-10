// Given: an array containing hashes of names
// Return: a string formatted as a list of names separated by commas except for 
// the last two names, which should be separated by an ampersand.

function list(names){
  let returnStr = '';

  if (names.length === 1) {
    return names[0].name;
  } 

  for (let i = 0; i < names.length; i++) {
      if (i === names.length - 2) {
          returnStr += `${names[i].name} & `;
      } else if (i === names.length -1) {
        returnStr += names[i].name;
      } else {
        returnStr += `${names[i].name}, `;
      }
  }

  return returnStr;
}


list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''