// FUNCTION FOR GENERATING MOVIE CARDS

function renderMovies() {
    let text = "";

    movieData.map(function(movie) {
        // RENDER MOVIE CARD WITH VARIABLES
        text += `
            <div class="movie card">
            <img class="card-img-top" src="${movie.Poster}" alt="${movie.Title}">
            <div class="card-img-bottom">
                <h4 class="card-title">${movie.Title}</h4>
                <p class="card-text">${movie.Year}</p>
                <a href="#" class="btn btn-info stretched-link">Add</a>
            </div>
        </div>`;

    });

    // LISTEN FOR EVENT, SHOW MOVIES
    document.getElementById("search-form").addEventListener("submit", function(e) {
        e.preventDefault();
        document.getElementById("movie-cards").innerHTML = text;
    })

}

// LOAD FUNCTIONS ON PAGE LOAD
document.addEventListener('DOMContentLoaded', function() {

    renderMovies();
});