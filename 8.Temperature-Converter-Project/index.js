document.getElementById("convert").onclick=function(){
     let temp=parseFloat(document.getElementById("temp").value);
     let unit=document.getElementById("unit").value;

     let convertedTemp= unit==='F'
     ? (temp*9/5)+32
     : (temp-32)*5/9
     if(unit=='F'){
          document.getElementById("converted").textContent="Celsius to Fahrenheit :"+convertedTemp.toFixed(2);
     }else{
          document.getElementById("converted").textContent="Fahrenheit to Celsius :"+convertedTemp.toFixed(2);
     }
     document.getElementById("temp").value = "";
}