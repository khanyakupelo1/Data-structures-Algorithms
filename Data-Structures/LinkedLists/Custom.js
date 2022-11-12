
console.group("LinkedList");

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

}


const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
console.log(myLinkedList.head);