console.log("Data structures: Arrays");

const strings = ["a", "b", "c", "d", "e"];

strings[2];

// Add a string: O(1)
strings.push("f");
console.log(strings);


// Remove a string: O(1), because removes last element
strings.pop();
console.log(strings);

// add at the beginning: O(n), because we have to shift items
strings.unshift("ß");
console.log(strings);

// add item in the middle: O(n), because we have to shift items
let names = [];
strings.splice(2, 0, "w");
console.log(strings);
