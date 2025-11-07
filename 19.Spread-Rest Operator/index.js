 //The spread operator (...) allows you to expand (spread) elements of an array, object, or iterable into individual elements.
 
let originalArray=[1,2,3];
console.log(...originalArray);  // individual elements

let copiedArray=[...originalArray]
console.log(copiedArray)



console.log(Math.max(1,3,4,5)); //5
console.log(Math.max(...originalArray)); //3


let myString ="Hello";
console.log(...myString); // H e l l o

let stringArray=[...myString]
console.log(stringArray);  // (5) ['H', 'e', 'l', 'l', 'o'] // converted on string array


let mergedArray=[...originalArray,...stringArray]
console.log(mergedArray); // (8) [1, 2, 3, 'H', 'e', 'l', 'l', 'o']


function sum(a,b,c){
     return a+b+c;
}

console.log( sum(...originalArray)); //6



let object1 ={name: "Alice", age:25}
let object2 ={job: "Engineer", city:"New York"}

let mergedObject={...object1,...object2}; // merging two objects
console.log(mergedObject); // {name: 'Alice', age: 25, job: 'Engineer', city: 'New York'}

