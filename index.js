document.addEventListener(`DOMContentLoaded`, function() {     
    function renderMovies (movieArray) {
        movieHTML= movieArray.map(currentMovie => {
            return `<div class="movie rounded">
            <img src="${currentMovie.Poster}" alt="${currentMovie.Title} poster" class="movieImage">
            <div class="movieInfo">
            <h5 class="movieTitle">${currentMovie.Title}</h5>
            <p class=" ">${currentMovie.Year}</p>
            <p class=" ">${currentMovie.Type.toUpperCase()}</p>
            <div class="addButton">
            <button class="btn">+</button>
            </div>
            </div>
            </div>`
        })
        return movieHTML.join('')
    }
 document.getElementById('movieContainer').innerHTML = renderMovies(movieData)
 });