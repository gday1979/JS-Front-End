function passwordValidator(password) {
    let isValid = true;
    let digitsCount = 0;
    let isOnlyLettersAndDigits = true;

    if (password.length < 6 || password.length > 10) {
        console.log('Password must be between 6 and 10 characters');
        isValid = false;
    }

    for (let i = 0; i < password.length; i++) {
        let char = password[i];

        if (!isNaN(char)) {
            digitsCount++;
        } else if (!isLetter(char)) {
            isOnlyLettersAndDigits = false;
        }
    }

    if (!isOnlyLettersAndDigits) {
        console.log('Password must consist only of letters and digits');
        isValid = false;
    }

    if (digitsCount < 2) {
        console.log('Password must have at least 2 digits');
        isValid = false;
    }

    if (isValid) {
        console.log('Password is valid');
    }

    function isLetter(char) {
        char = char.toLowerCase();
        return char >= 'a' && char <= 'z';
    }
}