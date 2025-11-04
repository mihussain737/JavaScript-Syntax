               // ARRAYS METHODS

// map() :- Transforms each element and returns new array

let numbers=[1,2,3,4,5];
//1. dedicated function to use this
function double(num){
     return num*2;
}

let result=numbers.map(double);
// console.log(result) //[2, 4, 6, 8, 10]

2.// using anonymous function
let doubleAnonymous=numbers.map(function(num){
     return num*2;
});
// console.log(doubleAnonymous) //[2, 4, 6, 8, 10]

3.// using arrow function
let doubleArrow=numbers.map(num=> num*2);
// console.log(doubleArrow) //[2, 4, 6, 8, 10]



`// filter():- return a new array with elements that pass a condition

// let numbers=[1,2,3,4,5];
let evenNumbers=numbers.filter((num)=>num%2==0);
console.log(evenNumbers)`


// reduce():- Reduces the array to a single value

