function addItem() {
    let text = document.getElementById('newItemText').value;
    let value = document.getElementById('newItemValue').value;

    let newOption = document.createElement('option');
    newOption.textContent = text;
    newOption.value = value;

    let select = document.getElementById('menu');
    select.appendChild(newOption);

    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}