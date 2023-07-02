//function will receive a single number ,that returns the sum of all even and all odd digits from that number
function oddAndEvenSum(number) {
    let oddSum = 0;
    let evenSum = 0;
    let numberAsString = number.toString();
    for (let i = 0; i < numberAsString.length; i++) {
        let currentNumber = Number(numberAsString[i]);
        if (currentNumber % 2 === 0) {
            evenSum += currentNumber;
        } else {
            oddSum += currentNumber;
        }
    }
    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}