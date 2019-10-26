function renderMovies(movieData) {
    var movieHTML = movieData.map(function(movie) {
        return `
        <div class="card movie-card" style="width: 18rem;">
            <img class="card-img-top" src="${movie.Poster}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${movie.Title}</h5>
                <p class="card-text">${movie.Year}</p>
                <button onclick="removeFromWatchList('${movie.imdbID}')">Remove Movie</button>
            </div>
        </div>
        `;
    }).join('');

    document.getElementsByClassName('results')[0].innerHTML = movieHTML;
}

function removeFromWatchList(imdbID) {
    var watchlistJSON = localStorage.getItem('watchlist');
    var watchlist = JSON.parse(watchlistJSON);
    if (watchlist != null){
        var watchlist = watchlist.filter(function(currentMovie){
            return currentMovie.imdbID != imdbID;
        });
        watchlistJSON = JSON.stringify(watchlist);
        localStorage.setItem('watchlist', watchlistJSON);
        window.location.reload();
    }

    

    
   
    
}

window.addEventListener('DOMContentLoaded', function(){
    var watchlistJSON = localStorage.getItem('watchlist');
    var watchlist = JSON.parse(watchlistJSON);
    renderMovies(watchlist);  
})
