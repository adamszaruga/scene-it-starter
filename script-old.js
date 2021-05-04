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
            <button class="btn btn-primary add-movie" onclick="saveToWatchlist(${movie.imdbID.toString()})" >Add</a>
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


let saveToWatchlist = imdbID => {
  console.log("clicked movie imdbID: ", imdbID);
}