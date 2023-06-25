function evenSubstarction(arr){
    let evenSum=0;
    let oddSum=0; 
    for(let num of arr){
        if(num% 2===0){
            evenSum +=num;
        }else{
            oddSum+=num;
        }
    }
    return evenSum-oddSum;
}
const numbers = [1, 2, 3, 4, 5, 6];
const difference = evenOddSubtraction(numbers);
console.log(difference); // Output: 3