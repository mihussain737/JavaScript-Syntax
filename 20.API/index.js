// JSON

let jsonString='{"name":"Alice","age":"25","city":"New York"}'
console.log(jsonString); // {"name":"Alice","age":"25","city":"New York"} // string format

let userObject=JSON.parse(jsonString)
console.log(userObject);  // {name: 'Alice', age: '25', city: 'New York'} // json format
console.log(userObject.name) // Alice


// converting json to String 
let person={"name":"Alice","age":"25","city":"New York"}
console.log(JSON.stringify(person))  // {"name":"Alice","age":"25","city":"New York"}