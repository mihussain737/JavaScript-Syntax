// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))


// let a = fetch('https://jsonplaceholder.typicode.com/todos/1');
// console.log(a);  // returns promise
// a.then((response)=>{
//      return response.json();
// }).then((data)=>{
//      console.log(data)
// })
// // await and async


// async function fetchData(){
//      const response=await fetch('https://jsonplaceholder.typicode.com/todos/1');
//      console.log(response);
//      console.log(response.ok); //true
//      const data=await response.json();
//      console.log(data);
// }
// fetchData();


// Exception Handling while api fetching
/*
async function fetchData(){
     try {
          const response=await fetch('https://jsonplaceholder.typicode.com/todos/1');
          if(!response.ok){
               throw new Error("Network response was not ok")
          }
     const data=await response.json();
     console.log("fetched data ",data);
     } catch (error) {
          console.error(error)
     }
}
fetchData();
*/

// POST Request
// async function postData(){
//      const newPost={
//           title:"New Post",
//           body:"Post Body",
//           userId:1
//      }
//      try {
//           const response=await fetch('https://jsonplaceholder.typicode.com/posts',
//                {
//                     method:'POST',
//                     headers:{
//                          'Content-type':'application/json'
//                     },
//                     body: JSON.stringify(newPost)
//                }
//           );
//           if(!response.ok){
//                throw new Error("Network response was not ok")
//           }
//      const data=await response.json();
//      console.log("Posted data ",data);
//      } catch (error) {
//           console.error(error)
//      }
// }
// postData();


