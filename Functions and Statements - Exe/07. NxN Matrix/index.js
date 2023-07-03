function nHnMatrix(n) {
    let result = '';
    for (let i = 0; i < n; i++) {
        result += `${n} `.repeat(n) + '\n';
    }
    return result;
}