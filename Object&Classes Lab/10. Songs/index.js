function songs(){
    class Song{
        constructor(type, name, time){
            this.type = type;
            this.name = name;
            this.time = time;
        }
        print(){
            console.log(this.name);
        }
    }
    let songsCount = Number(document.getElementById('songsCount').value);
    let songs = [];
    for (let i = 0; i < songsCount; i++) {
        let [type, name, time] = document.getElementById(`song${i+1}`).value.split('_');
        songs.push(new Song(type, name, time));
    }
    let type = document.getElementById('typeList').value;
    if(type !== 'all'){
        songs = songs.filter(x => x.type === type);
    }
    songs.forEach(x => x.print());
}