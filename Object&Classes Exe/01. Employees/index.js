function employee(arr) {
    let employees = [];

    arr.forEach(element => {
        let person = {
            name: element,
            personalNumber: element.length
        }
        employees.push(person);
    });

    employees.forEach(element => {
        console.log(`Name: ${element.name} -- Personal Number: ${element.personalNumber}`);
    });
}