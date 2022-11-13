

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

        if (index > this.length)
            return `index ${index} is out of bounds`;

        let curNode = this.head;
        let curIndex = 1;
        let newNode = new Node(value);
        while (curNode !== null) {


            // find index of curNode
            if (index === curIndex) {
                console.log(`Found index: ` + curIndex + `  Node: ` + curNode.value);

                newNode.next = curNode; // helps from being lost in memory
                this.head.next = newNode;
                return curNode;
            }

            // what happens if not equal
            curNode = curNode.next; // will move to next node
            curIndex++;

        }
        return `insertion failed, please try again!`;
    };

    printList = (message) => {
        console.log(` ${message}`);

        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }

        console.log(array);
        console.log(` Length: ${myLinkedList.length} \n`);
        return;
    };

}

const myLinkedList = new LinkedList(10);
myLinkedList.printList('🟢 Initialized');


myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.printList('🟡 Appended 5 & 16');


myLinkedList.prepend(1);
myLinkedList.printList('🟣 Prepend 1');


myLinkedList.printList('🔵 Insert 99');
const newNode = myLinkedList.insert(3, 99);


