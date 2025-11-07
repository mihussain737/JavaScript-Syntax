// Promises provide a cleaner and more strucutred way to handle asynchronous operations

// then() when promise is fullfilled
// catch() when promise is rejectd

/*

function getDataWithPromise(){
     return new Promise((resolve,reject)=>{
          setTimeout(()=>{
               const data={name:"john", age:30}
               resolve(data)
          },3000)
     });
}

getDataWithPromise()
     .then((data)=>{
          console.log(data) //{name: 'john', age: 30}
     })
     .catch((error)=>{
          console.error(error)
     });

*/

// with promises: Success and failure
// function getDataWithPromise1(){
//      return new Promise((resolve,reject)=>{
//           setTimeout(()=>{
//                let Success=Math.random()<0.5;
//                if(Success){
//                     const data={name:"john", age:30}
//                     resolve(data)
//                }else{
//                     reject("Error: some reason")
//                }
               
//           },1000)
//      });
// }

// getDataWithPromise1()
//      .then((data)=>{
//           console.log(data) //{name: 'john', age: 30}
//      })
//      .catch((error)=>{
//           console.error(error)
//      });


// finally:- always run irrespective failure or success
/*
     function getDataWithPromise1(){
     return new Promise((resolve,reject)=>{
          setTimeout(()=>{
               let Success=Math.random()<0.5;
               if(Success){
                    const data={name:"john", age:30}
                    resolve(data)
               }else{
                    reject("Error: some reason")
               }
               
          },1000)
     });
}

getDataWithPromise1()
     .then((data)=>{
          console.log(data) //{name: 'john', age: 30}
     })
     .catch((error)=>{
          console.error(error)
     })
     .finally(()=>{
          console.log("finally")
     });
     */



// Multiple Promise
 function getDataWithPromise1(){
     return new Promise((resolve,reject)=>{
          setTimeout(()=>{
               let Success=Math.random()<0.8;
               if(Success){
                    const data={name:"john", age:30}
                    resolve(data)
               }else{
                    reject("Error: some reason")
               }
               
          },1000)
     });
}

getDataWithPromise1()
     .then((data)=>{
          console.log(data) //{name: 'john', age: 30}
     })
     .catch((error)=>{
          console.error("Atleast 1 promise failed",error)
     })
     .finally(()=>{
          console.log("finally")
     });

let promise1=getDataWithPromise1();
let promise2=getDataWithPromise1();
let promise3=getDataWithPromise1();

Promise.all([promise1,promise2,promise3])
.then((data)=>{
     console.log("All Done : ",data)
})
.catch((error)=>{
     console.error(error)
})

// race vs all
// race : get first promise to resolve and all all promsie fullfilled to resolve0