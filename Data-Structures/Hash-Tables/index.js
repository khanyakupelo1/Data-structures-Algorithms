console.log("Data structures: Hash-Table");

let user = {
    age: 29,
    name: "Khanya",
    magic: true,
    scream: function () {
        console.log("aaah");
    }
};


console.log(user.age); // O(1)

user.spell = "vala!"; // O(1)

console.log(user);// O(1)

user.scream();// O(1)