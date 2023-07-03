function loadingBar(number) {
    let bar = new Array(10).fill('.')
    let percent = number / 10
    let percentArr = new Array(percent).fill('%')
    bar.splice(0, percent, ...percentArr)

    if (number === 100) {
        console.log('100% Complete!')
        console.log(`[${bar.join('')}]`)
    } else {
        console.log(`${number}% [${bar.join('')}]`)
        console.log('Still loading...')
    }
}