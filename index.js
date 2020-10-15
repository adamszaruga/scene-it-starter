// DOCUMENT READY BLOCK



function renderMovies() {
    let text = "";

    movieData.map(function(movie) {

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

    // 
    document.getElementById("search-form").addEventListener("submit", function(e) {
        e.preventDefault();
        document.getElementById("movie-cards").innerHTML = text;
    })

}


document.addEventListener('DOMContentLoaded', function() {

    renderMovies();
});