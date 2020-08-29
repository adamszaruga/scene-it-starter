$(()=>{
    renderMovies=(movieData)=>{
        let movieHTML=movieData.map((selectMovie)=>{
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
    $("#search-form").submit((e)=>{
        e.preventDefault()
        const currentMovie=renderMovies(movieData);
        $(".movies-container").html(currentMovie);
    });
});
const saveToWatchlist=((imdbID)=>{
    let movie=movieData.find((selectMovie)=>{
        return selectMovie.imdbID==imdbID;
    });
    let watchlistJSON=localStorage.getItem('watchlist');
    let watchlist=JSON.parse(watchlistJSON);
    if(watchlist==null){
        //console.log('watchlist null')
        watchlist=[];
    };
    watchlist.push(movie);
    watchlistJSON=JSON.stringify(watchlist);
    localStorage.setItem('watchlist',watchlistJSON);
});