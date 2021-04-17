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
        content.innerHTML = renderMovies(response.data.Search);
        // console.log("response data:", response.data);
        var addMoviebtns = document.querySelectorAll("add-movie");
        // html collection
        console.log("addMovie:", addMovie);
    });
  });
});

function renderMovies(movies) {
  let moviesHTML = movies.map(function(movie){
    return `
      <div class="movie">
        <div class="card" style="width: 18rem;">
          <img src="${movie.Poster}" class="card-img-top" alt="kitten">
          <div class="card-body">
            <span class="badge badge-secondary">${movie.Year}</span>
            <h5 class="card-title">${movie.Title}</h5>
            <a href="#" class="btn btn-primary add-movie">Add</a>
          </div>
        </div>
      </div>
    `;
  });
  return moviesHTML.join("");
}