function songs(input) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList
            this.name = name
            this.time = time
        }
    }

    let songs = []
    let numberOfSongs = input.shift()
    let typeList = input.pop()

    for (let i = 0; i < numberOfSongs; i++) {
        let [type, name, time] = input[i].split('_')
        songs.push(new Song(type, name, time))
    }

    if (typeList === 'all') {
        songs.forEach((i) => console.log(i.name))
    } else {
        let filtered = songs.filter((i) => i.typeList === typeList)
        filtered.forEach((i) => console.log(i.name))
    }
}