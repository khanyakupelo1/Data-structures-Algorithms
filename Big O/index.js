console.log("Good Code is readable and scalable");
const performance = require('perf_hooks').performance;

let everyone = ["darla", "dory", "bruce", "marlin", "gill", "bloat", "hank", "nemo", "nigel", "squirt"];
let nemo = ["nemo"];
let large = new Array(1000000).fill("Nemo");
/**
 * Big O depends on the number of inputs 
 * @param {*} arr 
 */
const findNemo = (arr) => {
    let t0 = performance.now();
    for (let i = 0; i < large.length; i++) {
        if (arr[i] === 'nemo') {
            console.log("We found Nemo!");
        }
    }
    let t1 = performance.now();
    console.log("It took ", + (t1 - t0), " milliseconds to find Nemo");

};

console.log("------------ O(n) --------------------------------");
findNemo(everyone); // O(n) ---> it takes linear time to find nemo



console.log("------------ O(1) --------------------------------");

/**
 * Measuring Big O
 * @param {*} boxes  is just an array of numbers
 * This will always be O(1) even if we have 100 console messages
 */

const boxes = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const logFirstTwoBoxes = (boxes) => {
    console.log(boxes[0]); // O(1)
    console.log(boxes[1]); // O(1)
};

logFirstTwoBoxes(boxes); // O(2)


console.log("------------ O(n^2) --------------------------------");

/**
 * Log all pairs of array
 */
let pairs = ["a", "b", "c", "d", "e", "f"];
let logAllPairs = function (pairs) {
    for (let i = 0; i < pairs.length; i++) {
        for (let j = 0; j < pairs.length; j++) {
            console.log(pairs[i], pairs[j]);

        }
    }
};

logAllPairs(pairs);