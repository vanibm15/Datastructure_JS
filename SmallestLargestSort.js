let num = [];
for (let i = 0; i <=10; i++) {
    let randomNum = Math.floor(Math.random()*(999-100+1)+100);
    num.push(randomNum);
    console.log(num);
}

let sortNum = num.sort();
console.log(sortNum);

let secondLargestNum = sortNum.slice(9,10)
let secondSmallestNum = sortNum.slice(1,2)

console.log("Second Largest NO"+ " "+ secondLargestNum);
console.log("Second smallest NO"+ " "+ secondSmallestNum);