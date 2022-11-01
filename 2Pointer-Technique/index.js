const numbers = [1, 3, 7, 9, 2]
const target = 11;
// Give function a proper name
const findTwoSum = (numbers, target) => {

    const numsMap = {};
    // This block code processes if solution exists
    for (let i = 0; i < numbers.length; i++) { // i = 0;
        const num= numbers[i] // 1

        const currentMapValue = numsMap[num] // undefined


        if (currentMapValue >= 0) {
            return [currentMapValue, i]
        }
        else{
            const  numberToFind = target- num; // ntf = 10
            // setting key value
            numsMap[numberToFind]= i;  // {10:0}
            console.log(`i ${i} currentMapValue: ${currentMapValue}  num:  ${num} `)
        }
    }
    // There is no existing solution on the given array
    return null;
}

const sum = findTwoSum(numbers, target);
// console.log(sum)
