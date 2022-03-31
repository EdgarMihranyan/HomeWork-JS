"use strict"
const readlineSync = require("readline-sync");
const count = Number(readlineSync.question("count = "));
let arr = [];
for (let i = 0; i < count; i++) {
    arr.push([])
    for (let j = 0; j < count; j++) {
        let num = Math.floor(Math.random() * 90 + 10)
        arr[i].push(num)
    }
}
console.log(arr);


// let a;
// console.log(typeof (a));
// let ar = [45, 56, 87, 12, 36, 47];
// ar.push(55)
// ar.pop()
// ar.shift()
// ar.unshift(22)
// ar.push(55)

// console.log(ar);
// let ara = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(ara);
// let reverse = (array) => {
//     let arayik = [];
//     for (let i = 0; i < array.length; i++) {
//         arayik.push(array[array.length - 1 - i])
//     }
//     return arayik;
// }
// // reverse(ara)
// console.log(reverse(ara));
// let average = (array) => {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     return sum / array.length;
// }
// console.log(average(ara));
// console.log(average(reverse(ara)));
// let factorial = (num) => {
//     if (num > 1) {
//         console.log(num);
//         return factorial(num - 1) * num;
//     }
//     return num;
// }
// console.log(factorial(5))

// let fibonacci = (n, a = 0, b = 0, c = 1) => {
//     if (b < n) {
//         console.log(b);  
//         fibonacci(n, a = b, b = c, c += a)
//     }                            
//     return;
// }
// fibonacci(100)
// ara.forEach(function(object,index){
//     console.log(object,index);
// });
// console.log(ara);

// let ara2 = ara.map(function(obj,index){
//     return obj * 10;
// })
// console.log(ara2);

// ara.forEach(function(value,index){
//     ara[index] = value+10;
// })
// console.log(ara);

// let myCompany = {
//     companyName: "CD Project Red",
//     workersName:{
//         1:"Edgar",
//         2:"Erik",
//         3:"Vagul",
//         4:"Aro",
//         5:"Mher",
//         6:"Gugo",
//         7:"Manch",
//         8:"Roman",
//         9:"Hovo",
//         10:"Mos"
//     }
// }
let sort = (arr) =>{
    for (let i = 0; i < arr.length; i++) {
        let index = i;
        for (let j = i; j < arr.length-1; +j++) {
            if (arr[index] > arr[j+1]) { 
                index = j+1;
            }
        }
    let rev = arr[i]
    arr[i] = arr[index]
    arr[index] = rev;
    }
}
for(let i = 0;i<arr.length;i++){
    sort(arr[i])
}

console.log(arr); 

let a = 20;
console.log(a)