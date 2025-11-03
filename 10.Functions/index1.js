// Returning value from function

function getSquare(number){
     let result=number*number
     return result;
}

let result=getSquare(4)
console.log(result)


// unpacking Function returning multiple values
function getUserInfo(name,age){
     return{
          userName:"name test",
          userAge:"age test"
     }
}

console.log(getUserInfo())  // {userName: 'name test', userAge: 'age test'}
let {userName,userAge}=getUserInfo()  
console.log(userName,userAge) //// name test age test



// Function returning arrays
function getDimension(){
     return [200,300,400]
}
console.log(getDimension());  // (3) [200, 300, 400]
let [width,height,depth]=getDimension()
console.log(width,height,depth) // 200 300 400




//No return
function noReturn(){
     console.log("hello from no return")
}
let message=noReturn()
console.log(message) //undefined




// unreacheable Code
function unReach(){
     return 10;
     console.log(20)
}

unReach()



//Function with multiple return statements
function checkAge(age){
     if(age>18){
          return "Adult"
     }else{
          return "Minor"
     }
}

let chek=checkAge(20)
console.log(chek); // Adult
