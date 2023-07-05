function factorialDivision(num1, num2) {
    let factorial = (num) => {
        let result = 1;
        for (let i = 1; i <= num; i++) {
            result *= i;
        }
        return result;
    };
    let result = factorial(num1) / factorial(num2);
    console.log(result.toFixed(2));
}