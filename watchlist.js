function getWatchlist(imdbID) {

    var movie = movieData.find(function(currentMovie) {
        return currentMovie.imdbID == imdbID;
    });

    var watchlistJSON = localStorage.getItem("watchlist");
    var watchlist = JSON.parse(watchlistJSON);
    let text = "";

    watchlist.map(function(watchlist) {

        // RENDER MOVIE CARD WITH VARIABLES
        text += `
            <div class="movie card">
            <img class="card-img-top" src="${watchlist.Poster}" alt="${watchlist.Title}">
            <div class="card-img-bottom">
                <h4 class="card-title">${watchlist.Title}</h4>
                <p class="card-text">${watchlist.Year}</p>
                <a href="#" class="btn btn-info stretched-link" onclick="saveToWatchlist('${watchlist.imdbID}')">Add</a> </div> 
                </div>`;

    });

    document.getElementById("movie-cards").innerHTML = text;

}



document.addEventListener('DOMContentLoaded', function() {
    getWatchlist();
});