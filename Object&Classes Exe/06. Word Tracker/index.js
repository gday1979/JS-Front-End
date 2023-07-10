function wordTracker(input) {
    let words = input.shift().split(' ')
    let wordsMap = new Map()

    for (const word of words) {
        wordsMap.set(word, 0)
    }

    for (const word of input) {
        if (wordsMap.has(word)) {
            wordsMap.set(word, wordsMap.get(word) + 1)
        }
    }

    let sorted = Array.from(wordsMap.entries()).sort((a, b) => b[1] - a[1])

    for (const [word, count] of sorted) {
        console.log(`${word} - ${count}`)

    }
}
wordTracker(['this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the',
    'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'])
    