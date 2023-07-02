function addAndSubtract(num1, num2, num3) {
    let sum = (a, b) => a + b;
    let subtract = (a, b) => a - b;
    return subtract(sum(num1, num2), num3);
}
addAndSubtract(23, 6, 10); // 19