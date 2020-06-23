// Return the score based on thee following rules
// Three 1's => 1000 points
// Three 6's =>  600 points
// Three 5's =>  500 points
// Three 4's =>  400 points
// Three 3's =>  300 points
// Three 2's =>  200 points
// One   1   =>  100 points
// One   5   =>   50 point

function score( dice ) {
    let count = {};
    let score = 0;
    for (let i=0; i < dice.length; i++) {
        if (count[dice[i]] === undefined) {
            count[dice[i]] = 1;
        } else {
            count[dice[i]] += 1;
        }
    }
    for (let num in count) {
        if (count[num] >= 3) {
            num === '1' ? score += 1000 : score += num*100;
            count[num] -= 3;
        }
        num === '1' ? score += count[num]*100 : num === '5' ? score += count[num]*50 : null;
    }

    console.log(score);
    return score;
}

score( [4, 4, 4, 3, 1] ); // 400
score( [4, 1, 1, 1, 5] ); // 550