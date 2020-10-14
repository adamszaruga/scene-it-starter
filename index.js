// DOCUMENT READY BLOCK

document.addEventListener("DOMContentLoaded", () => {
    renderMovies = (movieArray) => {
            let movieHTML = movieArray.map((currentMovie) => {
                const title = currentMovie.Title;
                console.log(title);
                const year = currentMovie.Year;
                console.log(year);
                const imdbID = currentMovie.imdbID;
                console.log(imdbID);
                const type = currentMovie.Type;
                console.log(type);
                const poster = currentMovie.Poster;
                console.log(poster);


            })
            return movieHTML.join('');
        }
        // document.body.innerHTML = renderMovies(movieData);
    document.getElementById('search-form').addEventListener(‘submit’, (e) => {
        return renderMovies(movieData);
    })

});