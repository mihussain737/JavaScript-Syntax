let person={
     name:"Imam",
     age:25,
     job:"Developer"
}

console.log(person);// {name: 'Imam', age: 25, job: 'Developer'}

// Fetching the object person property

//1. first way // best way
console.log(person.name)
console.log(person.age);

//2. second way
console.log(person["age"]);

//3 Modify property
person.age=60
console.log(person.age) // now age will be 60

//4 Add property
person.isStudent=true
console.log(person) //{name: 'Imam', age: 60, job: 'Developer', isStudent: true}

//5 Delete property
delete person.isStudent;
console.log(person); // {name: 'Imam', age: 60, job: 'Developer'}


//6 Check if the propery exists
console.log('name' in person); //true
console.log(person.hasOwnProperty('name')) //true

//7 Nested Objects(object inside the object)

let student={
     name:"Bob",
     courses:{
          math:true,
          science:true,
          history:false
     }
}
console.log(student); 
/*
{
     name: 'Bob', 
     courses: {
          math:true,
          science:true,
          history:false
     }
}
*/
 //i) fetching the nested objects
console.log(student.name);
console.log(student.courses); // {math: true, science: true, history: false}
console.log(student.courses.math); // true

//8 Object Destructuring
let {name,courses}=student;  // property name should be match and all property
console.log(name);
console.log(courses);