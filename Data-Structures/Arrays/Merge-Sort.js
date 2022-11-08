let ages = [1, 4, 3, 2];
let youth = [11, 14,];

let mergeSort = (ages, youth) => {


    for (const age of youth) {
        ages.push(age);
    }
    ages.sort();

    console.log(ages);

    // insert to new array
};

mergeSort(ages, youth);
