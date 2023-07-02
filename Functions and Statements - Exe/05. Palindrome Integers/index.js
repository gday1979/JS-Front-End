function pallindromeIntegers(arr) {
    for (let i = 0; i < arr.length; i++) {
        let reversed = arr[i].toString().split('').reverse().join('');
        if (arr[i].toString() === reversed) {
            console.log('true');
        } else {
            console.log('false');
        }
    }
}