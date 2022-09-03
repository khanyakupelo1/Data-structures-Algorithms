const arr = [1, 3, 7, 9, 2]
const target = 11;

const x = () => {
    // array to return items
    const answer = []


    for (let i = 0; i < arr.length; i++) {
        let numberToFind = target - arr[i];
        console.log(`p1: ${i} number to find: ${numberToFind}`)

        for (let j = 0; j < arr.length; j++) {
            console.log(`P1: ${i} P2: ${j} number to find: ${numberToFind}`)
            let p2 = j+ 1;
            if(numberToFind===arr[p2]){
                answer.push(arr[p2])
            }
        }

    }
    console.log(answer)
}

x();

