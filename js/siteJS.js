
document.getElementById("btnSubmit").addEventListener("click", sumOfAllFears);

function sumOfAllFears(){

 let arraySize = parseInt(document.getElementById("arrayLength").value);
 let numbers = createArray(arraySize);
 let output1 = document.getElementById("results");
 let output2 = document.getElementById("output");
 let kValue = parseInt(document.getElementById("kValue").value);
 let found = false;
 // let filteredNums = numbers.filter(function(value, index, arr){
 //  return value == sumOfAllFears;
 // });
 output2.innerHTML = numbers.join(", ");
 //create random numbers
//1,2,3,4,5
 for(let i = 0; i < numbers.length-1; i++){
  for(let j = i+1; j < numbers.length; j++){
   if(numbers[i]+numbers[j] == kValue){
    output1.innerHTML = `success, ${numbers[i]} + ${numbers[j]} = ${kValue}`;
    found = true;
    break;
   }
  }
 }
 
 if(!found){
      output1.innerHTML = `failure, ${kValue} not found`;

 }

 function createArray(arraySize){
 let randomArray = [];

  for (let index = 0; index < arraySize; index++) {
   let thisNum = Math.floor(Math.random() * (arraySize * 2)) + 1;
   while(randomArray.includes(thisNum)){
    thisNum = Math.floor(Math.random() * (arraySize * 2)) + 1;
   }
   
   randomArray.push(thisNum)
  }
 return randomArray;
 
 }
}

