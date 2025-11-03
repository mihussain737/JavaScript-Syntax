// function is a block of code designed to perform a specific task and the mutlple times it can perform

// Function without parameter
function test(){
     console.log("hello world")
}

test()`
test()
test()`



//Function with parameter
function greet(name){
     console.log(`Hello ${name}`)
     console.log("You are now logged In")
}

greet("Alice")
greet("John")
greet("Loucie")





// Multiple params
function greet(name, age){
     console.log(`Hello ${name}`)
     console.log(`You are ${age} years old`)
     console.log("You are now logged In")
}

greet("Alice","20") // both are String
greet("Loucie",20) // one in number




//Function with default value
function greetPerson(name){
     console.log(`Hello ${name}`)
}

greetPerson() // hello undefined


function greetPerson(name="Guest"){
     console.log(`Hello ${name}`)
}

greetPerson() // hello guest
greetPerson("Mike") // hello mike



// function with Rest Parameter
function calSum(...numbers){
     let sum=0;
     for(let number of numbers){
          sum+=number;
     }
     console.log(sum)
}

calSum(10,20) //30
calSum(10,20,30) //60
calSum(10,20,30,40) //100



// Boolean Parameters
function checkEligiblity(isMember) {
     console.log((isMember)?"Eligible":"NotEligible");
}

checkEligiblity(true)
checkEligiblity(false)




//Functions with objects as parameter
function printAdd({street,city,zip}){
     console.log(`Address: ${street}, ${city} ,${zip}`);
}

let address={
     street:"Street1",
     city:"City1",
     zip:"052754"
}
printAdd(address) //Address: Street1, City1 ,052754
printAdd({street:"street2",city:"city2",zip:"847437"}) //Address: street2, city2 ,847437



// function with the Arrays as parameter
function printNumbers(numbers){
     console.log(numbers)
}

printNumbers([1,2,3,4]) //(4) [1, 2, 3, 4]