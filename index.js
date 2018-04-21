//*******************************************************
// renderMovies(movies)
//   given a list of movies, will generate an HTML
//   string representing the movies
//*******************************************************

$(function(){
	function renderMovies(movieArray) {
		var finalHTML = "";
	
		movieArray.forEach(function(currentMovie){
			finalHTML += '<div class="card" style="width: 18rem;">';
			finalHTML += '<div class="card-body">';
			finalHTML += '<img class="card-img-top" src="'+ currentMovie.Poster +'"/>';
			finalHTML += '<div class="card-title">'   + currentMovie.Title   + '</div>';
			finalHTML += '<div class="badge badge-secondary">' 	  + currentMovie.Year    + '</div>';
			finalHTML += '</div>';
			finalHTML += '<a href="#" class="btn btn-primary">Add!</a>';
			finalHTML += '</div>';
		});
	
		return finalHTML;
	};
	// var testHTML = renderMovies(movieData);
	// $('.movies-container').html(testHTML);
	$('form').on('submit', function(e){ 
		e.preventDefault();
		var searchedHTML = renderMovies(movieData)
		$('.movies-container').html(searchedHTML);
	});
});


//*******************************************************
//   Displays the full movie list on page load
//   Listens for keyboard input to filter the list of 
//   movies based on the search string. 
//*******************************************************
