class CustomArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;;

    }

    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
    }

    shiftItems(index) {

        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];

        }
        delete this.data[this.length - 1];
        this.length--;

    }

    /**
     * Incomplete
     * @param {*} index 
     * @param {*} deleteCount 
     * @param {*} item 
     */
    insert(index, deleteCount, item) {
        // iterate over all items

        for (let i = 0; i < this.length; i++) {
            const element = this.data[i];
            // remove @ index
            if (deleteCount > 0) {
                delete this.data[index];
                deleteCount--;

            }
            if (index === i) {
                this.data[i] = item;
            }


        }

    }

}

const CustomA = new CustomArray();
CustomA.push("A");
CustomA.push("B");
CustomA.push("E");
CustomA.push("D");
CustomA.insert(2, 0, "C");
// CustomA.delete(0);
console.log(CustomA);
// CustomA.pop();
// console.log(CustomA);

