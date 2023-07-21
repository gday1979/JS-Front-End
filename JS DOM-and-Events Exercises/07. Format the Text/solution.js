function solve() {
  let input = document.getElementById('input').value;
  let output = document.getElementById('output');

  let sentences = input.split('.').filter(x => x !== '');
  let paragraphs = [];

  while (sentences.length > 0) {
    let paragraph = sentences.splice(0, 3).join('. ') + '.';
    paragraphs.push(paragraph);
  }

  for (let i = 0; i < paragraphs.length; i++) {
    let p = document.createElement('p');
    p.textContent = paragraphs[i];
    output.appendChild(p);
  }
}