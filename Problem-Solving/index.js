console.log('Welcome to Problem-Solving!');

let set = new Set();

let arr1 = ['a', 'b', 'c', 'd', 'e', 'f'];
let arr2 = ['x', 'y', 'z', 'e'];

const CheckIfTwoArraysHaveElementsInCommon = (arr1, arr2) => {
    for (let item of arr1) {
        set.add(item);
    };

    for (let item of arr2) {
        if (set.has(item)) {
            return true;
        }
    };

    return false;
};

console.log(CheckIfTwoArraysHaveElementsInCommon(arr1, arr2));