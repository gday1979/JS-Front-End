function oddOccurrences(input) {
    let words = input.split(' ');
    let map = new Map();
    for (let word of words) {
        word = word.toLowerCase();
        if (!map.has(word)) {
            map.set(word, 0);
        }
        map.set(word, map.get(word) + 1);
    }
    let output = [];
    for (let [key, value] of map) {
        if (value % 2 !== 0) {
            output.push(key);
        }
    }
    console.log(output.join(' '));
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');