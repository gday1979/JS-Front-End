function numberModification(number) {
    let average = 0;
    let numberAsString = number.toString();
    let sum = 0;
    let counter = 0;
    let isAverage = false;

    while (!isAverage) {
        for (let i = 0; i < numberAsString.length; i++) {
            sum += Number(numberAsString[i]);
            counter++;
        }
        average = sum / counter;
        if (average > 5) {
            isAverage = true;
        }
        else {
            numberAsString += '9';
        }
    }
    console.log(numberAsString);
}