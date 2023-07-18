function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let rows = Array.from(document.querySelectorAll('tbody tr'));
      let input = document.querySelector('#searchField').value;
      rows.forEach(row => {
         if (row.textContent.includes(input)) {
            row.classList.add('select');
         } else {
            row.classList.remove('select');
         }
      });
      document.querySelector('#searchField').value = '';

   }
}