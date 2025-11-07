let count =0;

function incrementCount(){
     count++;
}

incrementCount();
incrementCount();
// console.log(count)

// count=1000;
// console.log(count);

function createCounter(){
     let count=0;

     function incrementCount(){
          count++;
          console.log(count)
     }
     return incrementCount;
}


let counter=createCounter();
counter();
counter();
counter();

count=2000;
console.log(count)

counter();