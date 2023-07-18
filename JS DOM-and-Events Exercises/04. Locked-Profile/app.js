function lockedProfile() {
    let buttons = document.getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', showMore);
    }

    function showMore() {
        let profile = this.parentNode;
        let lock = profile.querySelector('input[type="radio"]:checked').value;
        if (lock === 'unlock') {
            let div = profile.querySelector('div');
            if (div.style.display === 'block') {
                div.style.display = 'none';
                this.textContent = 'Show more';
            } else {
                div.style.display = 'block';
                this.textContent = 'Hide it';
            }
        }
    }
}