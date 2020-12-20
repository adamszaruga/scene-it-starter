// FUNCTION FOR GENERATING MOVIE CARDS
const apikey = APIKEY;

var movieData = [];

function renderMovies() {
    var movieHTML = "";

    // LISTEN FOR EVENT, SHOW MOVIES
    document.getElementById("search-form").addEventListener("submit", function(e) {
        e.preventDefault(); // PREVENTS PAGE FROM RELOADING AFTER CLICKING SUBMIT

        // CREATES SEARCH STRING VARIABLES, ENCODES QUERY TO MAKE IT WEB FRIENDLY (ENCODES SPACES, ETC.)
        var searchString = document.getElementById("search-finder").value;
        var urlEncodedSearchString = encodeURIComponent(searchString);

        // USE AXIOS FOR SUBMITTING QUERY
        axios.get(`http://www.omdbapi.com/?apikey=${apikey}&s=` + urlEncodedSearchString)
            .then(response => {

                movieData = response.data.Search;
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

                document.getElementById("movie-cards").innerHTML = movieHTML;
            });

    })

}

// SAVES MOVIE SELECTIONS TO WATCHLIST USING ADD BUTTON
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
document.addEventListener('DOMContentLoaded', renderMovies);