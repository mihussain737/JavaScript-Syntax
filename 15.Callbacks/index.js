// console.log("Immediate run");


// setTimeout(() => {
//      console.log("2s delay run")
// }, 2000);



function fetchData(){
     setTimeout(()=>{
          console.log("Data from server...")
     })
}

function processData(){
     let data=fetchData();
     console.log(data);  // undefined
}

processData();  