document.addEventListener('DOMContentLoaded',function() {
    function renderMovies (movieArray) {
        movieHTML = movieArray.map(function(currentMovie){
            return `
            <div class="movie">
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${currentMovie.Poster}" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">${currentMovie.Title}</h5>
                  <p class="card-text">${currentMovie.Year}</p>
                  <a href="#" class="btn btn-primary">Add!</a>
                </div>
              </div>
            </div>
            `})
        return movieHTML.join('');
    }
    document.querySelector('.movies-container').innerHTML = renderMovies(movieData);

    // document.getElementById(‘search-form’).addEventListener(‘submit’, function(e){

    //   e.preventDefault();
    // });
    
});

