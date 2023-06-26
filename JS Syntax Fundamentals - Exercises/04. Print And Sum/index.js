function printAndSum(num1,num2){
    const numbers=[];
    let sum=0;
    for (let index = num1; index <= num2; index++) {
        numbers.push(index);
        sum+=index;
    }
    console.log(numbers.join(" "));
    console.log(`Sum: ${sum}`)
}
printAndSum(50,60)