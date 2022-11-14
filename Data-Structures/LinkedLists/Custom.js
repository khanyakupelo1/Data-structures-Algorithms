

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        // tail is assigned to head because when we create an instance there is only one element
        this.tail = this.head;
        this.length = 1;
    }

    /**
     * Adds to the end of the linkedList
     * @param {*} value Is the value we want to add
     * @returns LinkedList
     */
    append = (value) => {
        // Used DRY programming and OOP
        const newNode = new Node(value);
        // const newNode = {
        //     value: value,
        //     next: null
        // };

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;

        return this;
    };

    prepend = (value) => {

        // Used Don't Repeat Yourself programming and OOP
        const newNode = new Node(value);

        // const newNode = {
        //     value: value,
        //     next: null
        // };

        newNode.next = this.head;
        this.head = newNode;
        this.length++;

        return this;
    };

    /** */
    insert = (index, value) => {

        if (this.isValidIndex(index))
            return false;

        let curNode = this.head;
        let curIndex = 1;
        let newNode = new Node(value);
        let previous = curNode; // reference 

        if (this.isNewHead(index)) {
            return this.prepend(value);
        }

        while (curNode !== null) {
            if (index === curIndex) {

                newNode.next = curNode; // helps from being lost in memory
                previous.next = newNode;
                this.length++;
                return curNode;
            }

            previous = curNode;
            curNode = curNode.next; // will move to next node
            curIndex++;
        }
        return `insertion failed, please try again!`;
    };
    remove(index) {
        // Check Parameters      
        const leader = this.traverseToIndex(index - 1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--;

    }

    // 1-> 10-> 16-> 88
    reverse = (head) => {
        console.log(head);
        if (head.next === null) {
            console.log("Only one node exists \n");
            return;
        };

        let currNode = head;
        let newLL = new LinkedList(this.head.value); // O(n)

        while (currNode.next !== null) {
            newLL.prepend(currNode.value);
            currNode = currNode.next;
        }

        return newLL.prepend(currNode.value);
    };

    optimizedReversed = () => {

        let first = this.head;// 1
        this.tail = this.head; // 1
        let second = first.next; // 10

        while (second) {
            let third = second.next; // prevents second.next from being deleted from memory (18)
            second.next = first;
            first = second; // 1 => 10
            second = third;  // 10 => 16
        }

        this.head.next = null;
        this.head = first;
    };

    traverseToIndex(index) {
        //Check parameters
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }


    printList = (message) => {
        console.log(` ${message}`);

        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }

        console.log(array);
        console.log(` Length: ${this.length} \n`);
        return;
    };


    isNewHead(index) {
        return index === 1;
    }

    isValidIndex(index) {
        return index > this.length && console.log(`index ${index} is out of bounds`);
    }


};

const myLinkedList = new LinkedList(10);
myLinkedList.printList('🟢 Initialized');


myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.printList('🟡 Appended 5 & 16');


myLinkedList.prepend(1);
myLinkedList.printList('🟣 Prepend 1');


myLinkedList.insert(3, 99);
myLinkedList.printList('🔵 Insert 99');

if (!myLinkedList.insert(1, 30))
    myLinkedList.printList('🔵 Insert out of bounds index');
else

    myLinkedList.printList('🔵 Insert 30');


const myLinkedList_2 = new LinkedList(30);

myLinkedList_2.append(1);
myLinkedList_2.append(10);
myLinkedList_2.printList('🔵 Add 1, 10');

// myLinkedList_2.remove(2);
// myLinkedList_2.printList('🔵 Remove 10');

myLinkedList_2.remove(1);
myLinkedList_2.printList('🔵 Remove 1');
console.clear();
const myLinkedList_3 = new LinkedList(1);
myLinkedList_3.append(10);
myLinkedList_3.append(16);
myLinkedList_3.append(88);
myLinkedList_3.reverse(myLinkedList_3.head);
myLinkedList_3.optimizedReversed();

