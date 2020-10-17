// FUNCTION FOR GENERATING MOVIE CARDS

function renderMovies() {
    let movieHTML = "";

    movieData.map(function(currentMovie) {

        // RENDER MOVIE CARD WITH VARIABLES
        movieHTML += `
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
        // PREVENTS PAGE FROM RELOADING AFTER CLICKING SUBMIT
        e.preventDefault();

        // CREATES SEARCH STRING VARIABLES, ENCODES QUERY TO MAKE IT WEB FRIENDLY (ENCODES SPACES, ETC.)
        var searchString = document.getElementById("search-bar").value;
        var urlEncodedSearchString = encodeURIComponent(searchString);

        // USE AXIOS FOR SUBMITTING QUERY
        axios.get(`http://www.omdbapi.com/?apikey=${apikey}&s=` + urlEncodedSearchString)
            .then(response => console.log(response.data));


        document.getElementById("movie-cards").innerHTML = movieHTML;
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