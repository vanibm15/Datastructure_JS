let num = [];

for (i = 1; i<=10; i++){
    let randomNum = Math.floor(Math.random()*(999-100+1)+100);
    num.push(randomNum);
    console.log(num);
}

let max1 = 0;
let max2 = 0;

for(i=0;i<=10;i++){
    if (num[i]>= max1){
        max2 = max1;
        max1 = num[i]; 
    }else if (num[i] >= max2 && num[i] != max1){
        max2 = num[i];

    }
    console.log(max2);
}
min1 = max2;
for (i=0;i<=10;i++){
    if (num[i]<=min1){
        min2=min1;
        min1=num[i];
    }else if (num[i] <= min2 && num[i] !=min1){
        min2 = num[i]
    }

}

console.log("2nd largest Number" + " "+ max2);
console.log("2nd smallest Number" + " "+ min2);