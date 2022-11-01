console.log("Good Code is reable and scalable");
const performance = require('perf_hooks').performance;

let everyone = ["darla", "dory", "bruce", "marlin", "gill", "bloat", "hank", "nemo", "nigel", "squirt"];
let nemo = ["nemo"];
let large = new Array(1000000).fill("Nemo");

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


findNemo(everyone);