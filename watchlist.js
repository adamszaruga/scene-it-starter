function getWatchlist() {
    var movieHTML = "";

    var watchlistJSON = localStorage.getItem("watchlist");
    var watchlist = JSON.parse(watchlistJSON);

    if (watchlist == null) {
        watchlist = [];
    }

    watchlist.map(function(currentMovie) {
        movieHTML += `
                        <div class="movie card">
                        <img class="card-img-top" src="${currentMovie.Poster}" alt="${currentMovie.Title}">
                        <div class="card-img-bottom">
                            <h4 class="card-title">${currentMovie.Title}</h4>
                            <p class="card-text">${currentMovie.Year}</p>
                            <a href="#" class="btn btn-info stretched-link" onclick="saveToWatchlist('${currentMovie.imdbID}')">Add</a> </div> 
                            </div>`;
    })

    document.getElementById("movie-cards").innerHTML = movieHTML;

}

document.addEventListener('DOMContentLoaded', getWatchlist);