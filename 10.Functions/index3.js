// function inside the objects
let personAlice={
     name:"Alice",
     age:33,
     greet: function(){
          console.log(`Hi i am ${personAlice.name}`)
     }
}
personAlice.greet() // Hi i am Alice

// arrow function
let personJohn={
     name:"John",
     age:33,
     greet: ()=>console.log(`Hi i am ${personJohn.name}`)
}
personJohn.greet() //Hi i am John


// this keyword:- keyword refers the current object => arrow function this keyword wont work

let personMike={
     name:"Mike",
     age:33,
     greet: function(){
          console.log(`hello ${this.name}`)
     }
}
personMike.greet() // hello Mike



// counter example
let counter={
     value:0,
     increment: function(){
          this.value+=1
          return this.value;
     },
     incrementBy: function(num){
          this.value+=num
          return this.value
     }
}
console.log(counter.increment()) //1
console.log(counter.increment()) //2

console.log(counter.incrementBy(10)) // 12


// defining methods dynamically
let dynamicMethod={
     value:0
};
console.log(dynamicMethod.value);

dynamicMethod.sayHi=function(){
     console.log("Hello dynamic")
}
dynamicMethod.sayHi();  // Hello dynamic


// Nested
let car={
     brand:"Toyota",
     specs:{
          speed:120,
          displaySpecs: function(){
               console.log(`speed is `,this.speed)
          }
     }
}
car.specs.displaySpecs(); // speed is  120


// short hand version
let shorthand={
     name:"short hand",
     greet(){
          console.log(`This is ${this.name}`)
     }
}
shorthand.greet(); //This is short hand
