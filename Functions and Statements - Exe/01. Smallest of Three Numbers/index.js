function smallestOfThreeNumbers(num1, num2, num3) {
    let smallest = Number.MAX_SAFE_INTEGER;
    smallest = Math.min(num1, num2, num3);
    return smallest;
}