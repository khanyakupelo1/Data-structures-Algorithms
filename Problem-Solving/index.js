console.log('Welcome to Problem-Solving! O(n)');

let set = new Set();

let users = ['a', 'a', 'b', 'c', 'd', 'e', 'f'];
let bots = ['x', 'y', 'z', 'e'];

const CheckIfTwoArraysHaveElementsInCommon = (users, bots) => {
    for (let item of users) {
        set.add(item);
    };

    for (let item of bots) {
        if (set.has(item)) {
            return true;
        }
    };

    return false;
};


// Hash Table solution

let map = {};


function containsCommonItems() {
    for (let i = 0; i < users.length; i++) {
        if (!map[users[i]]) {  // this is what prevents adding duplicate items
            const item = users[i];
            map[item] = true;
        }
    }

    for (let i = 0; i < bots.length; i++) {
        if (map[users[i]]) {  // this is what prevents adding duplicate items
            return true;
        }
    }
    return false;

}


function containsCommonItemsES6() {
    // users.some((user) => user === 'b');
    console.log(
        `ES6 ${users.some((user) => user === 'k')}`
    );
}

containsCommonItemsES6();
console.log(containsCommonItems());
console.log(CheckIfTwoArraysHaveElementsInCommon(users, bots));