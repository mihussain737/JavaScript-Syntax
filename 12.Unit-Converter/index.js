
const unitConverter={
     mToFt: function (meters) {
          return meters*3.28084;
     },

     kgToLb: function(kilograms){
          return kilograms*2.20462;
     },
     
     cToF: function(celsius){
          return(celsius*9/5)+32;
     }
};

document.getElementById("convert").onclick=()=>{
     let inputValue=parseFloat(document.getElementById("inputValue").value);
     let conversionType=document.getElementById("conversionType").value;

     
     if(!isNaN(inputValue)){
     let convertedValue;
     convertedValue = conversionType==='mToFt'?unitConverter.mToFt(inputValue):
                      conversionType==='kgToLb'?unitConverter.kgToLb(inputValue):
                      unitConverter.cToF(inputValue)
                      document.getElementById('convertedValue').textContent=convertedValue;
     }else{
          alert("Please enter a valid number")
     }

     
     
};