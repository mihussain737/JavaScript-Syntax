// returning example

// console.log("Immediate run");


// setTimeout(() => {
//      console.log("2s delay run")
// }, 2000);


// Need of call back
// function fetchData(){
//      setTimeout(()=>{
//           console.log("Data from server...")
//           return "returned data"
//      })
// }

// function processData(){
//      let data=fetchData();
//      console.log(data);  // undefined
//                          // Data from server
// }

// processData();  


// Non anonymous function
/*
function fetchDataWithCallback(callback){
     setTimeout(()=>{
               let data='sample data';
               callback(data)
     },3000)
}

function processDataWithCallback(data){
     console.log('With Callback '+data);
}

fetchDataWithCallback(processDataWithCallback); 



// Anonymous callback functions

function fetchDataWithCallbackNonAny(callback){
     setTimeout(()=>{
               let data='sample data';
               callback(data)
     },4000)
}


fetchDataWithCallbackNonAny(function(data){
     console.log("With NonAnonymous: "+ data)
}); 
*/


// callback for success / errors
/*
function fetchDataWithSuccessError(successCallback, errorCallback){
     setTimeout(()=>{
          let errorOccurred=false;

          if(errorOccurred){
               errorCallback("Error Occurred")
          }else{
               let data='sample data';
               successCallback(data)
          }
     },4000)
}


function onSuccess(data){
     console.log("Success, ", data);
     
}

function onError(data){
     console.log("Error, ", data);
     
}


fetchDataWithSuccessError((data)=>{
     console.log("Success,",data);
},(data)=>{
     console.log("Error, ", data)
});
*/


// Chain Function

function step1(callback){
     setTimeout(()=>{
          console.log("Step 1 DONE");
          callback()
     },1000)
}

function step2(callback){
     setTimeout(()=>{
          console.log("Step 2 DONE");
          callback()
     },1000)
}

function step3(callback){
     setTimeout(()=>{
          console.log("Step 3 DONE");
          callback()
     },1000)
}

step1(()=>{
     step2(()=>{
          step3(()=>{
               console.log("All Completed")
          });
     });
});


// use callbacks with array methods

let numbers=[1,2,3,4,5,6]
let doubledNumbers=numbers.map((num)=>{
     return num*2;
});

console.log(doubledNumbers)