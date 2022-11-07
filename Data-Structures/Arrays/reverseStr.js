let strReverse = (string) => {


    if (!string || string.length < 2) {
        return string;
    }

    let len = string.length;
    let newString = '';

    for (let i = 0; i < string.length; i++) {
        const element = string[len - 1];
        newString = newString + element;
        len--;
    }

    console.log(newString);
};

// strReverse(" Hi My name is Andrei");
// strReverse();

let strReverseAlt = (string) => {


    if (!string || string.length < 2 || typeof string !== 'string') {
        return string;
    }

    const backWards = [];

    const totalItems = string.length - 1;

    for (let i = string.length - 1; i >= 0; i--) {
        backWards.push(string[i]);

    }

    return backWards.join('');

};

console.log(strReverseAlt(" Hi My name is Andrei"));


let builtIN = (str) => {
    return str.split('').reverse().join('');
};
console.log(builtIN(" Hi My name is Andrei"));

