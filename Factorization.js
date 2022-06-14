n=36;
let fact = [];
for (let i = 2; i<n/2; i++){
    if (n % i == 0 ){
        fact.push(i)
    }
    i++

}
console.log(fact);