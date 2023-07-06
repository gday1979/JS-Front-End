function personInfo(firstName, lastName, age) {
    let person = {
        firstName,
        lastName,
        age
    }

    return person;
}
personalInfo("Peter", "Pan", "20");   // { firstName: 'Peter', lastName: 'Pan', age: '20' }