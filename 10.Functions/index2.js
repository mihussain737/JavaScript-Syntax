// Function Expressions=> anonymous function create and assigned the variable and variable can call the function

// greet();// error  Cannot access 'greet' before initialization
let greet=function (){
     console.log("Hello Alice")
}
greet(); // Hello Alice


let multiply=function (a,b){
     return a*b;
}
console.log(multiply(10,20));


// Function are objects in javascript

let sayHi=function(){
     console.log("hi alice")
}
let a=sayHi; //  assigning function in a variable and later we can call
a();


// Arrow Function

let arrowFunction=()=>{
     console.log("arrow function")
}
arrowFunction()

let arrowFunction2=()=> console.log("arrow function 2")
arrowFunction2()


const arrFunParam=(name,age)=>{
     console.log(`hello ${name}`)
     console.log(`your age ${name}`)
}
arrFunParam("John",20)


// arrow function with return
const retArrow=(a)=>a*a; // automatically return
let result=retArrow(2);
console.log(result)// 4