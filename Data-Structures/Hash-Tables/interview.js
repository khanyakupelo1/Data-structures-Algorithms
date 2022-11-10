
// Input array of numbers
const scores = [2, 5, 1, 2, 3, 4, 5, 6, 7,];
const scores_2 = [2, 1, 1, 2, 3, 4, 5, 6, 7,];
const scores_3 = [2, 3, 4, 5, 6, 7,];

// output array item or undefined if it doesn't exist

const findFirstRecurringNumber = (scores) => {
    // create a set of scores
    let scoresSet = new Set();

    for (let i = 0; i < scores.length; i++) {
        const score = scores[i];

        if (scoresSet.has(score)) {
            return score;
        }
        scoresSet.add(score);


    }
    return undefined;
};

console.group("Should return 2");

console.log(findFirstRecurringNumber(scores));


console.group("Should return 1");

console.log(findFirstRecurringNumber(scores_2));

console.group("Should return undefined");

console.info(findFirstRecurringNumber(scores_3));