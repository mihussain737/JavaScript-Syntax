// 1. using let declaring varaible
let count;
console.log(count) // undefined
count=0;
console.log(count);

// 2. using let declaring variable and intiailizing
let value=1;
console.log(value);

// 3. using var declaring variable
var a=10;
console.log(a);

// 4. using const to make it constant later you can't change the variable
const b=20;
console.log(b);
b=30;  // index.js:6 Uncaught TypeError: Assignment to constant variable.
//console.log(b)



/* RULES FOR NAMING VARIABLES */
//1. Must begin with a letter, $ , or _.
let number=10;
let $number=20;
let _number=30;

//2. Can contain letter, digit, $ ,_.
let number1=40;

//3. variable is case sensitive // BOTH ARE DIFFERENT HERE

let number2=50;
let NUMBER2=60;


//4. Variable name can't be use for reserved keyword

//  let let=10; //error  reserved keyword not allowed for the variable name

//5. space not allowed between variable name

// let first Name="Mike"; // error


// 6. Variable name should be proper name not good practice to use a , b ,c
let firstName="Mike";
let age=20;

//7. single line we can declare multiple variable
let a1=10, a2=20,a3;

//8. Multiple declaration not allowed
// let a1=20; // redeclare error