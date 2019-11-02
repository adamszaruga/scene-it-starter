
    function renderMovies(movieData) {
        var movieHTML = movieData.map(function(movie) {
            return `
            <div class="card movie-card" style="width: 18rem;">
                <img class="card-img-top" src="${movie.Poster}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${movie.Title}</h5>
                    <p class="card-text">${movie.Year}</p>
                    <button onclick="saveToWatchlist('${movie.imdbID}')">Add Movie</button>
                </div>
            </div>
            `;
        }).join('');

        document.getElementsByClassName('results')[0].innerHTML = movieHTML;

    }
    function saveToWatchlist(imdbID) {
        console.log(imdbID)
        var movie = movieData.find(function(currentMovie){
            console.log(movie)
            return currentMovie.imdbID == imdbID;
        });

        var watchlistJSON = localStorage.getItem('watchlist');
        var watchlist = JSON.parse(watchlistJSON);
        if (watchlist == null){
            watchlist = [];
        }
        // check if movie already exists in 'watchlist'
        // if it does, do something
        // if it does not do 'watchlist.push(movie);'

        //  function checkList(saveToWatchlist) =>{
        //     if(imdb)
        // }

        watchlist.push(movie);
        watchlistJSON = JSON.stringify(watchlist);
        localStorage.setItem('watchlist', watchlistJSON);
    }
        
    window.addEventListener('DOMContentLoaded', function(){
        document.getElementById('search-form').addEventListener('submit', function(event){
            event.preventDefault();
            var searchString = document.getElementsByClassName('search-bar')[0].value;
            var encodedSearchString = encodeURIComponent(searchString);

            axios.get(`https://www.omdbapi.com/?apikey=3430a78&s=${encodedSearchString}`)
                .then(function(res) {
                    movieData = res.data.Search    
                    renderMovies(res.data.Search)
            })
        })
    })

    document.getElementById('searchString');
