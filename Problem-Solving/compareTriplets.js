'use strict';

const fs = require('fs');


/*
 * Complete the 'compareTriplets' function below. 
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTriplets(a, b) {

    let pointsForAlice = 0;
    let pointsForBob = 0;

    for (let i = 0; i < a.length; i++) {

        let pointA = a[i];
        // iterate b, break after every comparison
        for (let j = i; j < b.length; j++) {
            let pointB = b[j];


            if (pointA === pointB)
                break;


            // Award Alice
            let isAlice = isPointToAlice(pointA, pointB);
            if (isAlice) {
                pointsForAlice++;
            }
            else if (isPointToBob(pointB, pointA)) {
                pointsForBob++;
            }
            break;
        }
    }
    let array = [pointsForAlice, pointsForBob];
    return array;
}

function isPointToAlice(pointA, pointB) {
    let isPointToAlice_ = pointA > pointB ? true : false;
    return isPointToAlice_;
}
function isPointToBob(pointA, pointB) {
    let isPointToBob = pointA < pointB ? true : false;
    return isPointToBob;
}


// compareTriplets([5, 6, 7], [3, 6, 10]);


let compareTripletsOptimized = (a, b) => {

    let set = new Set();
    let pointsForBob = 0;
    let pointsForAlice = 0;

    for (let index = 0; index < a.length; index++) {
        const pointA = a[index];
        const pointB = b[index];

        if (isPointToAlice(pointA, pointB)) {
            pointsForAlice++;
            continue;
        }

        if (isPointToBob(pointA, pointB))
            pointsForBob++;
    }

    let array = [pointsForAlice, pointsForBob];
    return array;

};
compareTripletsOptimized([5, 6, 7], [3, 6, 10]);
console.log(compareTripletsOptimized([5, 6, 7], [3, 6, 10]));