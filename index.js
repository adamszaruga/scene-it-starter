// FUNCTION FOR GENERATING MOVIE CARDS

function renderMovies() {
    let text = "";

    movieData.map(function(currentMovie) {

        // RENDER MOVIE CARD WITH VARIABLES
        text += `
            <div class="movie card">
            <img class="card-img-top" src="${currentMovie.Poster}" alt="${currentMovie.Title}">
            <div class="card-img-bottom">
                <h4 class="card-title">${currentMovie.Title}</h4>
                <p class="card-text">${currentMovie.Year}</p>
                <a href="#" class="btn btn-info stretched-link" onclick="saveToWatchlist('${currentMovie.imdbID}')">Add</a> </div> 
                </div>`;

    });
    // LISTEN FOR ADD MOVIES CLICKS


    // LISTEN FOR EVENT, SHOW MOVIES
    document.getElementById("search-form").addEventListener("submit", function(e) {
        e.preventDefault();
        document.getElementById("movie-cards").innerHTML = text;
    })

    // document.getElementById("movie-cards").addEventListener("click", function(e) {
    //     e.preventDefault();
    //     saveToWatchlist();
    // })

}

function saveToWatchlist(imdbID) {

    var movie = movieData.find(function(currentMovie) {
        return currentMovie.imdbID == imdbID;
    });

    var watchlistJSON = localStorage.getItem("watchlist");
    var watchlist = JSON.parse(watchlistJSON);

    if (watchlist == null) {
        watchlist = [];
    }
    watchlist.push(movie);
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem("watchlist", watchlistJSON);

}

// LOAD FUNCTIONS ON PAGE LOAD
document.addEventListener('DOMContentLoaded', function() {
    renderMovies();
});