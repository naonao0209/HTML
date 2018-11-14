// let oddNumbers = [];
// let counter = 0;
// let value = 1;
// for (counter = 0; counter < 100; counter += 1){
// 	oddNumbers[counter] = value;
// 	value += 2;
// }document.getElementById("here").innerHTML = oddNumbers;


let numberArray = [10,50,97,22,9,13,15,43,75,10,56];
let average;
let sum = 0;
let i;

for(i = 0; i , numberArray.length; i += 1){
	sum += numberArray[i];
}

average = sum / numberArray.length;

document.getElementById("here").innerHTML = Math.round(average);