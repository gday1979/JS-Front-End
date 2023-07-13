function deleteByEmail() {
    let input = document.querySelector('input[name="email"]');
    let email = input.value;
    let table = document.querySelector('tbody');
    let rows = Array.from(table.children);
    let result = document.getElementById('result');

    let isDeleted = false;
    for (let row of rows) {
        let rowEmail = row.children[1].textContent;
        if (rowEmail === email) {
            row.remove();
            isDeleted
}
    }
    if (isDeleted) {    
        result.textContent = 'Deleted.';
    }
    else {
        result.textContent = 'Not found.';
    }
}