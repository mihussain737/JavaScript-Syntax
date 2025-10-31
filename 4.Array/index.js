let numbers=[1,2,3,4,5]
console.log(numbers) // (5) [1, 2, 3, 4, 5]


let fruits=["apple","banana","orange"]
console.log(fruits)  //(3) ['apple', 'banana', 'orange']

// // Mutating methods
// Change (modify) the original array
// push(), pop(), shift(), unshift(), splice(), sort(), reverse()

// 1. Fetching index based
console.log(numbers[0]) 
console.log(fruits[1])
console.log(fruits[3]) // undefined

// 2. push() add element at the end of the array
fruits.push("pomegrante")
console.log(fruits)  // //(4) ['apple', 'banana', 'orange','pomegrante']

// 3. pop() remove the last element
fruits.pop();
console.log(fruits)  //(3) ['apple', 'banana', 'orange']

// 4 shift() remove the first element at the begining
fruits.shift()
console.log(fruits) //  (2) ['banana', 'orange']

//5 unshift() add the element at the begining
fruits.unshift("kiwi")
console.log(fruits) // (3) ['kiwi', 'banana', 'orange']

// // Non-mutating methods
// Return a new value/array without touching the original
// slice(), concat(), map(), filter(), reduce()

//6 slice() extract the part of the array and return ex:- fruits.slice(0, 2)
console.log(fruits.slice(0,2))

//7 length return length of the array
console.log(fruits.length) //3

//8 return the removed elements and mutate the original array
let fruits1 = ["Apple", "Banana", "Mango", "Grapes"];
let removed = fruits1.splice(1, 2);

console.log(fruits1);  // ["Apple", "Grapes"] ← modified
console.log(removed); // (2) ['Banana', 'Mango']

// 8 includes() check if the element exists or not and return boolean

console.log(fruits1.includes("Apple")) // true

//9 indexOf() return index of the elements
console.log(fruits1.indexOf("Grapes"))

// 10 join() conver the array into string
 let animals=["Ant","Lion"]
 console.log(animals.join(','))  // Ant,Lion

 // concat() combine the two array and return new array
let newAnimals=["Giraffe","Ox"]
console.log(animals.concat(newAnimals)) // (4) ['Ant', 'Lion', 'Giraffe', 'Ox']



let matrix=[
     [1,2,3],
     [4,5,6],
     [7,8,9]
]

console.log(matrix)
console.log(matrix[0][0]) // 1