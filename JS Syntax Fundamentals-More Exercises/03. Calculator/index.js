function calculator(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let sum = document.getElementById('sum');
    let subtract = document.getElementById('subtract');
    let multiply = document.getElementById('multiply');
    let divide = document.getElementById('divide');

    sum.value = Number(num1) + Number(num2);
    subtract.value = Number(num1) - Number(num2);
    multiply.value = Number(num1) * Number(num2);
    divide.value = Number(num1) / Number(num2);
}