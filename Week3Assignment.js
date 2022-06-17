let fullName = ["Yuritzy", "MarquezPalacios"];
console.log("Yuritzy" + " MarquezPalacios");


let numbers = [3, 6, 7, 9, 20];
let sum = 0;
for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];
}
console.log(sum);
if(sum > 100) {
    console.log(true);
}
else
    console.log(false);



let arrayNumbers = [12, 3, 1, 4];
let average = 0;
    for(let i = 0; i < arrayNumbers.length; i++){
        average += arrayNumbers[i];
    }
console.log(average);
let newAverage = average / arrayNumbers.length;
console.log(newAverage);


let hot = 100;
let isHotOutside = 110;
let moneyInPocket = 20;
let willBuyDrink = [isHotOutside, moneyInPocket];
if(hot < isHotOutside && moneyInPocket > 10.50) {
    console.log(true);
}



let Promineo = ["This is", "hard!"];
console.log("This is" + " hard!");



let num1 = [1, 6, 8, 10];
let num2 = [5, 7, 9, 11];
let meli = 0
let finalArray = ([num1], [num2]);
    for(let i = 0; i < num1.length; i++) {
        meli += num1[i];
    }
console.log(meli);
let counsil = meli / num1.length;
console.log(counsil);
let meli2= 0
for(let i = 0; i < num2.length; i++){
    meli2 += num2[i];
}
console.log(meli2);
let counsil2 = meli2 / num2.length;
console.log(counsil2);
if (counsil > counsil2) {
    console.log(true);
} 
else
    console.log(false);



let namesArray = ["Kelly", "Sam", "Kate"];
let length = namesArray.map(function(element) {
    return element.length;
});
console.log(length);

let summy = 0

for (let i = 0; i < length.length; i++) {
    summy += length[i];
}
console.log(summy);


let namesLetter = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
let zero = namesLetter.map(function(element) {
    return element.length;
});
console.log(zero);

let apple = " ";
for (let i = 0; i < namesLetter.length; i++) {
    apple += namesLetter[i];
    apple += " ";
}
console.log(apple);



let lastElement = zero[zero.length - 1];
console.log(lastElement);




