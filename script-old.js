// A $( document ).ready() block.
// part 2 SceneIt: https://www.notion.so/samuraijane/SceneIt-Part-2-00c32d7557f348ce8a7066a1ee067c17

document.addEventListener("DOMContentLoaded", () => {

  let content = document.getElementById('content');

  // when user clicks on search this function runs
  document.getElementById('search-form').addEventListener('submit', e => {
    e.preventDefault();
    // grab user input to the search bar
    var searchString = document.getElementById("searchInput").value;
    // search url http://www.omdbapi.com/?apikey=3430a78&s=Fun%20With
    var urlEncodedSearchString = encodeURIComponent(searchString);

    axios
    .get(`https://www.omdbapi.com/?apikey=1fddd0bf&s=${urlEncodedSearchString}`)
    .then(response => {
      content.innerHTML = `<img src='./grumpy.gif'>`;
      content.innerHTML = renderMovies(response.data.Search);
      // console.log("response data:", response.data);
      // var addMovieBtns = document.querySelectorAll(".add-movie");
    });
  });
});

// show movies
let renderMovies = movies => {
  let moviesHTML = movies.map(movie => {
    return `
      <div class="movie">
        <div class="card" style="width: 18rem;">
          <img src="${movie.Poster ? movie.Poster : './no_image.png'}" class="card-img-top" alt="${movie.Title}">
          <div class="card-body">
            <span class="badge badge-secondary">${movie.Year}</span>
            <h5 class="card-title">${movie.Title}</h5>
            <button class="btn btn-primary add-movie" onclick="saveToWatchlist('${movie.imdbID}')" >Add</a>
          </div>
        </div>
      </div>
    `;
  });
  return moviesHTML.join("");
}

/**
 * if no image is availabe do this: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

          <img 
            src="${movie.Poster} ? ${movie.Poster} : './no_image.png'" 
            class="card-img-top" 
            alt="${movie.Poster} ? ${movie.Title} : 'sorry, no image available'"
          >
if no img =>
		<img src="./no_image.png" alt="sorry, no image">
 * 
 */

// 1. saveToWatchlist has a parameter called **imdbID** which will tell us which movie the user clicked on. We’ll use it to sift through movieData.js to find the relevant movie information. variable movie has the movie information that we want in our watchlist, 
// goal: Now, when you click the add button for any given, you should see it’s data saved into local storage under the key “watchlist”!
const saveToWatchlist = imdbID => {
  // console.log("clicked movie imdbID: ", imdbID);
  let movie = movieData.find(currentMovie => {
    console.log("clicked movie imdbID: ", currentMovie);
    console.log("currentMovie.imdbID: ", currentMovie.imdbID);
    console.log("imdbID: ", imdbID)
    return currentMovie.imdbID === imdbID;
  });
    // pull in the watchlist from localStorage, add it to the watchlist, and then save the watchlist back to localStorage

  let watchlistJSON;
  let watchlist;
  console.log("movie: ?", movie);
  if(localStorage.getItem('watchlist') === null){
    watchlist = [];
    watchlist.push(movie);
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem('watchlist', watchlistJSON);
  } else {
    watchlistJSON = localStorage.getItem('watchlist');
    watchlist = JSON.parse(watchlistJSON);
    watchlist.push(movie);
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem('watchlist', watchlistJSON);
  }
}


