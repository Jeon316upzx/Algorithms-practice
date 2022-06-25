// Given an array A of size N, print the reverse of it.


const reverseArray = (array) =>{
     const n = array.length - 1;
     
     let newArray = []
     for(let i = n; i >= 0; i--){
        newArray.push(array[i])
     }

     return newArray;
}

console.log(reverseArray([1,8,3,49,3,4,2,3,2]))