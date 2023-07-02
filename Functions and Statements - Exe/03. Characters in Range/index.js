function charactersInRange(firstChar, secondChar) {
    let firstCharCode = firstChar.charCodeAt(0);
    let secondCharCode = secondChar.charCodeAt(0);
    let start = Math.min(firstCharCode, secondCharCode);
    let end = Math.max(firstCharCode, secondCharCode);
    let result = '';
    for (let i = start + 1; i < end; i++) {
        result += String.fromCharCode(i) + ' ';
    }
    return result;
}