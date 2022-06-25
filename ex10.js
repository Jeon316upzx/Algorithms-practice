// Subarray with given sum 
// Big O is Quadratic O(n^2)
// Space Complexity is O(1)
const SubArrayWithAGivenSum = (array, sum) =>{

    //check if array length is one
    if(array.length === 1){
       return 'cannot calculate sum'
    }

    for(let i = 0; i < array.length; i++){
        for(let j = i + 1; j < array.length; j++){
            if(array[i] + array[j] == sum){
                return { i , j }
            }
        }
    }

}


console.log(SubArrayWithAGivenSum([1,2,4,5,6], 7))




//find all combinations that equal sum
// Big O is Quadratic O(n^2)
// Space Complexity is O(1)
const AllSubArrayWithAGivenSum = (array, sum) =>{

    //check if array length is one
    if(array.length === 1){
       return 'cannot calculate sum'
    }
    let subarrays = []
    for(let i = 0; i < array.length; i++){
        for(let j = i + 1; j < array.length; j++){
            if(array[i] + array[j] == sum){
                let foundCombo = { i, j}
                subarrays.push(foundCombo)
            }
        }
    }

    return subarrays

}






console.log(AllSubArrayWithAGivenSum([1,2,4,5,6], 7))