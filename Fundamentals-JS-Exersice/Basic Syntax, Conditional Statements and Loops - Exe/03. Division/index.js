function division(num){
    let number = Number(document.getElementById('num').value);
    let result = document.getElementById('result');
    let output = '';
    if(number%10===0){
        output = 'The number is divisible by 10';
    }
    else if(number%7===0){
        output = 'The number is divisible by 7';
    }
    else if(number%6===0){
        output = 'The number is divisible by 6';
    }
    else if(number%3===0){
        output = 'The number is divisible by 3';
    }
    else if(number%2===0){
        output = 'The number is divisible by 2';
    }
    else{
        output = 'Not divisible';
    }
    result.textContent = output;
}
division(30);