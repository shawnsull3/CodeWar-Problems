// Given: an array containing hashes of names
// Return: a string formatted as a list of names separated by commas except for 
// the last two names, which should be separated by an ampersand.

function list(names){
  let returnStr = '';

  // iterate over str
  // adding each name and a comma to the returnStr 
  // if it's the second to last value
    // add an & instead

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