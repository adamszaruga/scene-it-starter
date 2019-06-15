document.addEventListener(`DOMContentLoaded`, function() {     
    function renderMovies (movieArray) {
        movieHTML= movieArray.map(currentMovie => {
            return `<div class="movie col-lg-3 rounded">
            <img src="${currentMovie.Poster}" alt="${currentMovie.Title} poster" class="movieImage">
            <div class="movieInfo">
            <h5>${currentMovie.Title}</h5>
            <p class=" ">${currentMovie.Year}</p>
            <button class="addButton btn">+</button>
            </div>
            </div>`
        })
        return movieHTML.join('')
    }
 document.getElementById('movieContainer').innerHTML = renderMovies(movieData)
 });