const numbers = [1, 3, 7, 9, 2]
const target = 11;
// Give function a proper name
const findTwoSum = (numbers, target) => {

    // This block code processes if solution exists
    for (let p1 = 0; p1 < numbers.length; p1++) {

        // calculate number to find
        const numberToFind = target - numbers[p1];

        // To prevent comparing the p1's numberToFind to its self, p2 must = p1+1
        // The initial value of p2 is dependent on where p1 is
        for (let p2 = p1 + 1; p2 < numbers.length; p2++) {
            console.log(`P1: ${p1} P2: ${p2} number to find: ${numberToFind}`)
            if (numberToFind === numbers[p2]) {
                return [p1, p2]
            }
        }
    }

    // There is no existing solution on the given array
    return null;
}

const sum= findTwoSum(numbers, target);
console.log(sum)
console.log(numbers[sum[0]])
console.log(numbers[sum[1]])

