// asynchronous operations , HTTP requests

/*
 function getData(){
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


async function fetchDataAsync(){
     try{
          let data=await getData();
     console.log(data)  // {name: 'john', age: 30}
     }catch(error){
          console.error("Error ",error)
     }
     
}
fetchDataAsync();

*/

// Mulitple Asynchronous
 function getData(){
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


async function fetchDataAsync(){
     try{
          let data1=await getData();
          console.log(data1)

          let data2=await getData();
          console.log(data2)
       // {name: 'john', age: 30}
     }catch(error){
          console.error("Error ",error)
     }
     
}
fetchDataAsync();