
// if , if-else  if-else if  works for the conditionals statement


let temp=30;
if(temp>25){
     console.log("Weather is hot today")
}

// if else
temp=20
if(temp>25){
     console.log("Its hot day");
}else{
     console.log("Its nice day")
}


// if elseif
 temp=15;
if (temp>25) {
     console.log("its hot day");
} else if(temp<20 && temp>15){
     console.log("its nice day");
     
}else{
    console.log("its cold day")
}




// switch statement offers a cleaner more readable alternative 

let fruit="kiwi";

switch (fruit) {
     case 'apple':
          console.log("apple 100 rs per kg")
          break;
     case 'banana':
          console.log("banana 50 rs per kg")
          break;
     case 'kiwi':
          console.log("kiwi 200 rs per kg")
          break;
     default:
          console.log("Fruit not available")
          break;
}



// for loop

for(let i=0; i<5; i++){
     // console.log(i)
}

// iterating the array using for loop
let numbers=[1,2,3,4,5]
for(let i=0; i<numbers.length; i++){
     console.log(numbers[i]);
     
}

// iterating matrix
for(let i=0; i<10; i++){
     for(let j=0; j<i; j++){
          console.log(j);
     }
     console.log(i)
}





// while loop :- executes as long as condition evaluats to true


let i=0;
while(i<5){
     console.log(i);
     i++;
}
