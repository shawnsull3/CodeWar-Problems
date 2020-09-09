/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*/

var rockPaperScissors = function (n) {
    let results = [];
    const options = ['R', 'P', 'S'];

    // recursive solution will be needed
    const solutionGenerator = (plays) => {
        if (plays.length === n) {
            results.push(plays);
            return
        } else {
            options.forEach( option => {
                // plays = plays + option;
                solutionGenerator(plays + option);
            })
        }
    }
    solutionGenerator('');
    console.log(results);
    return results;
};
  
rockPaperScissors(2);
// rockPaperScissors(3);