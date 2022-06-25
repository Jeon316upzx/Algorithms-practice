// An element is called a peak element if its value is not smaller than the 
// value of its adjacent elements(if they exists).
// Given an array arr[] of size N, Return the index of any one of its peak elements.
// Note: The generated output will always be 1 if the index that you return is
//  correct. Otherwise output will be 0.



//brute force approach 
//reason is that the largest element is the peak element  -
//which will always be greater than elements to the left or right.
//big O is O(n)
//space complexity is O(1) because only one variable is declared(largestValue)
const findthePeakvalue = (array) =>{
    //check
    if(array.length === 1){
        return array[0];
    }
    let largestValue = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] > largestValue){
            largestValue = array[i];
        }
    }
    return largestValue;
}


// console.log(findthePeakvalue([1,2,3,4,5,100]))


//another solution
const findPeakElement = (array) =>{
   //edge case if array only has one element
   
   if(array.length === 1){
     return array[0];
   }


   for(let i = 0; i < array.length-1; i++){

      if(array[0] > array[1]){
        return array[0]
      }

      for(let i = 0; i < array.length; i++){
        if(array[i] >= array[i - 1] && array[i] >= array[i + 1]){
          return array[i];
        }
       }

       if(array[array.length - 1] > array[array.length - 2]){
        return array[array.length - 1];
      }
   }
}
console.log(findPeakElement([1,2,3,399,5,11]))




//divide and conquer approach