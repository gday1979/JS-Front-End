function addItem() {
    let input = document.getElementById('newText');
    let li = document.createElement('li');
    li.textContent = input.value;
    let a = document.createElement('a');
    a.textContent = '[Delete]';
    a.href = '#';
    a.addEventListener('click', deleteItem);
    li.appendChild(a);
    document.getElementById('items').appendChild(li);
    input.value = '';

    function deleteItem() {
        li.remove();
    }
}