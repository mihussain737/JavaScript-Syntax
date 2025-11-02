// Template literal :- `${expression}`

let name="Alice"
let greeting=`Hello ${name}`
console.log(greeting)


let age=17
let word=`Hello ${name}, you are ${age} years old`
console.log(word)


let multiline=`This
is
multiline 
valid string
`
console.log(multiline)


let user={
     firstName:"John",
     lastName:"Doe"
}

console.log(`User Info:
Name: ${user.firstName} ${user.lastName}`);


// Escaping BackTick
console.log("this is a backtick`")
// console.log(`this is a backtick``); // syntax error

console.log(`This is a backTick \``);
