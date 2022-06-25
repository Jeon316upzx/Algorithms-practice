// Given a random set of numbers, Print them in sorted order. 
// Order: Ascending 
// Big O is O(n^2) and space complexity is O(1)
const sortArray = (array) =>{
   if(array.length === 1){
     return array[0];
   }

   for(let i = 0; i < array.length; i++){
     for(let j = i + 1; j < array.length; j++ ){
         if(array[i] > array[j]){
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
         }
     }
   }
   console.log(array);
}

sortArray([2,3,1,23,3,5,0,1])

//Descending Order.

const sortArrayDescendingOrder = (array) =>{

    //check if array has only one element
    if(array.length === 1){
        return array;
    }

    for(let i = 0; i < array.length; i++){
        for(let j = i+1; j < array.length; j++){
            if(array[i] < array[j]){
                let temp = array[i]
                array[i] = array[j]
                array[j] = temp
            }
        }
    }

    console.log(array)

}

console.log(sortArrayDescendingOrder([2,41,4,3,5,59,3]))