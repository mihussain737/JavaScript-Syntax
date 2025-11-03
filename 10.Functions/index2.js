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
