               // ARRAYS METHODS

// map() :- Transforms each element and returns new array

// let numbers=[1,2,3,4,5];
//1. dedicated function to use this
// function double(num){
//      return num*2;
// }

// let result=numbers.map(double);
// console.log(result) //[2, 4, 6, 8, 10]

2.// using anonymous function
// let doubleAnonymous=numbers.map(function(num){
//      return num*2;
// });
// console.log(doubleAnonymous) //[2, 4, 6, 8, 10]

3.// using arrow function
// let doubleArrow=numbers.map(num=> num*2);
// console.log(doubleArrow) //[2, 4, 6, 8, 10]



// filter():- return a new array with elements that pass a condition

// let numbers=[1,2,3,4,5];
// let evenNumbers=numbers.filter((num)=>num%2==0);
// console.log(evenNumbers)


// reduce():- Reduces the array to a single value
// let numbers=[1,2,3,4,5];
// let sum=numbers.reduce((accumulater,currentValue)=>accumulater+currentValue)
// console.log(sum);



// forEach() executes a function for each array element
// let numbers=[1,2,3,4,5];
// numbers.forEach(num=>console.log(num));


//find() :- returns the first element that satisfies a condition
// let numbers=[1,2,3,4,5];
// let firstEven=numbers.find(num=>num%2==0);
// console.log(firstEven);


// some():- check if at least one element passes a test and return boolean
// let numbers=[1,2,3,4,5];
// let hasNegative=numbers.some(num=>num<0);
// console.log(hasNegative);


// every():- check if all elements pass a test
let numbers=[1,2,3,4,5];
let hasEvery=numbers.every(num=>num<0);
console.log(hasEvery);


// concat():- merges arrays into a new array
let newArray=[1,2,3,4,5].concat([6,7,8]);
console.log(newArray); //  [1, 2, 3, 4, 5, 6, 7, 8]


// slice():-returns a portion of an array
let sliceArray=[0,1,2,3,4,5].slice(0,4)
console.log(sliceArray); //[0, 1, 2, 3]


// splice():- modify the array by replacing/removing the array
let sdemo=[0,1,2,3,4,5];
let spliceArray=sdemo.splice(0,2)
console.log(spliceArray); // [0, 1] removed array
console.log(sdemo);  // [2, 3, 4, 5] remaining array


// join(): joins all elements into a string
let joined=["a","b","c"].join(", ");
console.log(joined); //a, b, c

// reverse():- reverse the array and return
let rev=[9,4,6,3].reverse()
console.log(rev); //[3, 6, 4, 9]

//sort():- sort the elements of an array
let nums=[2,3,1,6];
let sortedNum=nums.sort();
 sortedNum=nums.sort((a,b)=>a-b); // if nums considered as string then use
console.log(sortedNum);


