// a function that check to see if given two arrays contains
// similar items
// example: given arr1 = [1,2,3,4], arr2 = [3,5,6,7]
// returns true






//brute force approach
const compareTwoArray = (arr1, arr2) =>{
    //check if inputs are arrays and check if lengths are equal to one
    if(arr1.length === 1 && arr2.length === 1){
        console.log(arr1.length,arr2.length)
        if (arr1[0] === arr2[0]) return true
        return false;
    }

    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            console.log(arr1[i],arr2[j] )
            if(arr1[i] === arr2[j]){
                return true;
            }
        }
    }
    return false;
}


console.log(`using brute force, the Big O of the function is O(n^2) -> `,compareTwoArray([1,2], [3,4]))

// using the object approach.

const compareTwoArrayObjApproach = (arr1, arr2) => {
   if(arr1.length === 1 && arr2.length === 1){
     if(arr1[0] === arr2[0]){
        return true
     }
     return false;
   }
   

   let arrayObj = {}
   for(let i = 0; i < arr1.length; i++){
       let item = arr1[i];
       arrayObj[item] = true;
   }

   for(let j = 0; j < arr2.length; j++){
       let item = arr2[j];
      if(arrayObj[item]) return true;
      return false;
   }
}



console.log(`using object approach, the Big O of the function is O(n) ->`, compareTwoArrayObjApproach([1,2], [3,4]))



