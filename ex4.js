// Given an array A of size N of integers. 
// Your task is to find the minimum and maximum elements in the array.


const findMinAndMaxElements = (array) =>{
    // check if array length is 1
    let max = array[0];
    let min = array[0];
    if(array.length === 1){
        return { min , max }
    }
    
    //get MAX value
    for(let i = 0; i < array.length; i++){
       if(array[i] > max){
         max = array[i];
       }
    }
    
    // get MIN value
    for(let i = 0; i < array.length; i++){
        if(array[i] < min){
          min = array[i];
        }
     }

     return { min , max }
}


console.log(findMinAndMaxElements([1,2,4,6,2,5,4,3]))