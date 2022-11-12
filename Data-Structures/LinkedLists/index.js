
console.group("LinkedLists");

// Creating a pointer 
const Fruit = { name: "Apple", price: "0" };

// Here we are not copying the object
// What this simply means is that Human and HumanReference point to the same location in memory
const FruitReference = Fruit;
FruitReference.name = "Banana";
console.log(Fruit);
Fruit.age = "R30.00";
console.log(FruitReference);


// Building linked list: 10-->5-->15

let myLinkedList = {
    // Think of this as a bucket of data
    head: {
        value: 10,
        next: {
            value: 5,
            next: {
                value: 16,
                next: null
            }
        }
    }
};

console.log(myLinkedList);
