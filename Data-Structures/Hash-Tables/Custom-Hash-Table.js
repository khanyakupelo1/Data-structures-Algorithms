class CustomHashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < this.data.length; i++) {
            hash = (hash + key.charCodeAt(i)) % this.data.length;
        }
        return hash;
    }
    set = (key, value) => {

        let address = this._hash(key);

        if (!this.data[address]) {
            this.data[address] = [];
        }

        this.data[address].push([key, value]);
        return this.data;
        // if (key !== undefined || key !== null) { this.data[key] = value; }

    };

    get = (key) => {
        let address = this._hash(key);

        const curBucket = this.data[address];
        console.log(curBucket);

        if (curBucket) {
            for (let i = 0; i < curBucket.length; i++) {
                if (curBucket[i][0] === key)
                    return curBucket[i][1];

            }
        }
        return undefined;;
    };


    keys() {
        const keysArray = [];
        console.log(this.data.length);
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                keysArray.push(this.data[i][0][0]);
            }
        }
        return keysArray;
    }

    // Grab all the values
}


const custom = new CustomHashTable(2);
custom.set('grapes', 10000);
custom.set('apples', 10);
custom.set('bananas', 20);
custom.set('oranges', 10);


// console.log(custom.data);
console.log(custom.get("apples"));
console.log(custom.keys());
// console.log(custom.get("apples"));