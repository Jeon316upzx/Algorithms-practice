// Given a vector of N positive integers and an integer X. 
// The task is to find the frequency of X in vector.


const findFrequencyOfNumber = (vector, number) =>{
    let count = 0;
    for(let i = 0; i < vector.length; i++){
        if(vector[i] == number){
            count++;
        }
    }
    return count;
}

console.log(findFrequencyOfNumber([1,2,3,1,2,1], 2))