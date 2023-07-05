//create list of employees and theur personal numbers in array
function employees() {
    let employees = [
        { name: "John", personalNumber: 123456789 },
        { name: "Jane", personalNumber: 987654321 },
        { name: "Mary", personalNumber: 123654789 },
        { name: "Peter", personalNumber: 987123654 },
        { name: "Bob", personalNumber: 123789456 },
        { name: "Kate", personalNumber: 987456123 },
    ];
    //loop through array and print each employee
    for (let i = 0; i < employees.length; i++) {
        console.log(employees[i]);
    }
}