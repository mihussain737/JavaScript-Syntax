// Implict conversion

let x1=5+1;
console.log(x1,typeof x1); // 6 , number

let x2='5'+1
console.log(x2,typeof x2) //51 , String

let x3='5'-1
console.log(x3,typeof x3); // 4, number

let x4='5'*1
console.log(x4, typeof x4); // 5, number

let x5=1+'5';
console.log(x5,typeof x5); //15 String

// Explict conversion
// String() toString()

let num=456;
let numToString=String(num);
let numToString2=num.toString()
console.log(numToString, typeof numToString); //456 string
console.log(numToString2, typeof numToString2); //456 string


// Number parseInt() parseFloat()

let str="678";
let str2="12.55";

let strToNum1=parseInt(str) 
let strToNum2=Number(str) 
console.log(strToNum1, typeof strToNum1) //678 'number'
console.log(strToNum2, typeof strToNum2) //678 'number'

let str2ToNum1=parseInt(str2)
console.log(str2ToNum1, typeof str2ToNum1) // 12 'number' // data lost

let str2ToFloat=parseFloat(str2)
console.log(str2ToFloat, typeof str2ToFloat) //12.55 'number'
