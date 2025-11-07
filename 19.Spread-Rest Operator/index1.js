// The spread operator (...) expands an array or object into individual elements — perfect for copying, merging, or passing multiple values easily.

function sum(...numbers){
     let total=0;
     for(const num of numbers){
          total+=num;
     }
     return total;
}
console.log(sum(3,2,4));  // 9
console.log(sum(3,5,6,7,8,))  //29


// Arrays
let fruits=["apple","banana","orange","cherry"]
let [first,second,...restOfFruits]=fruits;
console.log("First", first); // First apple
console.log("Second", second) // Second banana
console.log("restOfFruits", restOfFruits)  // restOfFruits (2) ['orange', 'cherry']


// Objects
let person={
     name:"Alice",
     age:25,
     city:"New York"
}
let {name, ...restOfPerson}=person;
console.log(name); //Alice
console.log(restOfPerson); //index1.js:35 {age: 25, city: 'New York'}


// REST With Spread

function showNames(first, second, ...others){  // rest
     console.log(first); // apple
     console.log(second); // banana
     console.log(others); // (2) ['orange', 'cherry']
}
let names=["apple","banana","orange","cherry"]
showNames(...names); // spread operator
