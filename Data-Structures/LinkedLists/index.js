console.log("Welcome to LinkedLists");

// Creating a pointer 

const Human = { name: "Human Being", age: "0" };


// Here we are not copying the object
// What this simply means is that Human and HumanReference point to the same location in memory
const HumanReference = Human;
HumanReference.name = "Khanya";
console.log(Human);
Human.age = "28";
console.log(HumanReference);
