// Given an array arr[] and an integer K where K is smaller than size of array, 
// the task is to find the Kth smallest element in the given array. It is given that all array 
// elements are distinct.


//Brute force approach
const kthElementInAnArray = (array, index) => {
   //check if index is greater than array length
   if(array.length < index){
    return 'index out of bounds';
   }

   return sortArray(array, index)


}


const sortArray = (array, index)=>{
    for(let i = 0; i < array.length; i++){
        for(let j = i + 1; j < array.length; j++ ){
            if(array[i] > array[j]){
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    console.log(array)
    return array[index - 1];
}

console.log(kthElementInAnArray([7,10,4,3,20,15], 3))

console.log(kthElementInAnArray([7,10,4,20,15], 4))