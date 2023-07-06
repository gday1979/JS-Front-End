function phoneBook(input) {
    let phoneBook = {};

    for (let line of input) {
        let [name, phone] = line.split(' ');
        phoneBook[name] = phone;
    }

    for (let name in phoneBook) {
        console.log(`${name} -> ${phoneBook[name]}`);
    }
}