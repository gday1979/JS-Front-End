function login(input) {
    let username = input.shift();
    let password = username.split('').reverse().join('');
    let counter = 0;
    let isLogged = false;

    while (counter < 4) {
        let currentPassword = input.shift();

        if (currentPassword === password) {
            console.log(`User ${username} logged in.`);
            isLogged = true;
            break;
        } else {
            console.log('Incorrect password. Try again.');
        }
        counter++;
    }

    if (!isLogged) {
        console.log(`User ${username} blocked!`);
    }
}
login(['Acer', 'login', 'go', 'let me in', 'recA']);