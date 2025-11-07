// try catch block to handle the exception occure on the block of code

// 1.
//a();  //index.js:4 Uncaught ReferenceError: a is not defined
//console.log("executed fully") // this will not run because of above error not handle
/*

//2. try catch block to handle the error
try{
     a();
     console.log("This line not execute");
}catch(error){
     console.error(error);  // index.js:12 ReferenceError: a is not defined
     console.error(error.message); //index.js:13 a is not defined
}
console.log("executed fully") // now this will run because we handle the error


//3. Finally block:- finally block always run either exception occured or not

try {
     a();
     console.log("This will not run")
} catch (error) {
     console.log("This handle the message after error",error)
}finally{
     console.log("This is always run")
}

//4. try and finally:- we can use either try-catch or try-finally// only try will throw error

try{
     let a=10/0;
     console.log(10/0) // Infinity
}finally{
     console.log("This will always run");
}
*/


//    DEBUGGING

function calculate(a,b){
     let sum=a+b;
     console.log(sum)
}

calculate(10,5)

// f12 button on the browser to debugg

// Scopes =>  stores all variables on the scopes and see value

// watch => to keep the track of any varibles

async function fetchApi(){
     try {
          let response=await fetch('https://jsonplaceholder.typicode.com/todos/1');
          console.log(response.json())

     } catch (error) {
          console.error(error)
     }

}

fetchApi();