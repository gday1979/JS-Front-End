function movies(input) {
    let movies = [];

    for (let i = 0; i < input.length; i++) {
        let movie = input[i];
        let movieName = movie.split(' ');

        if (movieName.includes('addMovie')) {
            let name = movieName.slice(1).join(' ');
            movies.push({ name: name });
        } else if (movieName.includes('directedBy')) {
            let index = movieName.indexOf('directedBy');
            let name = movieName.slice(0, index).join(' ');
            let director = movieName.slice(index + 1).join(' ');
            movies.forEach((movie) => {
                if (movie.name === name) {
                    movie.director = director;
                }
            });
        } else if (movieName.includes('onDate')) {
            let index = movieName.indexOf('onDate');
            let name = movieName.slice(0, index).join(' ');
            let date = movieName.slice(index + 1).join(' ');
            movies.forEach((movie) => {
                if (movie.name === name) {
                    movie.date = date;
                }
            }
            );
        }
    }
    movies.forEach((movie) => {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    }
    );
}
