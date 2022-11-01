// const numbers = [1, 3, 7, 9, 2]
const target = 11;
// Give function a proper name
const findTwoSum = (numbers, target) => {

    for (let p1 = 0; p1 < numbers.length; p1++) { //p1 = 0
        for (let p2 = p1 + 1; p2 < numbers.length; p2++) { // p2 = 4 l= 5
            // the reason its slow, because I am doing this operation. Retrieving and adding. for every item
            // efficiency achieved if operation is on outer loop
            // Then this would be inverted to number to find and then do a compare with p2. Thus replacing the need to loop over
            const sum = numbers[p1] + numbers[p2]  // sum = 1 +2= 10
            if (sum === target) // target = 11
                return [p1, p2]
        }
    }
    return null;
}

const sum = findTwoSum(numbers, target);
console.log(sum)
console.log(numbers[sum[0]])
console.log(numbers[sum[1]])

//Runtime: 209 ms, faster than 20.14% of JavaScript online submissions for Two Sum.
  //  Memory Usage: 42.3 MB, less than 75.16% of JavaScript online submissions for Two Sum.

