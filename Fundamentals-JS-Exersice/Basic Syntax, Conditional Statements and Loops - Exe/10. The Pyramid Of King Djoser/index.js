function pyramidOfKingDjoser(base, increment) {
    let stone = 0
    let marble = 0
    let lapis = 0
    let gold = 0
    let steps = 1
    let height = 0

    while (base > 2) {
        let currentStone = (base - 2) * (base - 2)
        stone += currentStone
        if (steps % 5 === 0) {
            let currentLapis = ((base * 4) - 4)
            lapis += currentLapis
        } else {
            let currentMarble = ((base * 4) - 4)
            marble += currentMarble
        }
        base -= 2
        steps++
    }
    gold = base * base
    height = Math.floor(steps * increment)

    console.log(`Stone required: ${Math.ceil(stone * increment)}`)
    console.log(`Marble required: ${Math.ceil(marble * increment)}`)
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis * increment)}`)
    console.log(`Gold required: ${Math.ceil(gold * increment)}`)
    console.log(`Final pyramid height: ${height}`)
}