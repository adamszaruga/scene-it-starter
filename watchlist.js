$(()=>{
    console.log('page load');
    localStorage.getItem(watchlist);
    renderMovies=(watchlist)=>{
        let movieHTML=watchlist.map((selectMovie)=>{
            return `<div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${selectMovie.Poster}/100px180/" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">${selectMovie.Title}</h5>
            <p class="card-text">${selectMovie.Year}</p>
            <a href="#" class="btn btn-primary" onclick="saveToWatchlist('${selectMovie.imdbID}')">Add to Watchlist</a>
            </div>
            </div>`
        });
        //console.log('my HTML')
            return movieHTML.join('');
    }
});