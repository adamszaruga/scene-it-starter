const axios = require("axios");
const apikey = process.env.APIKEY;





exports.findMovies = (req, res) => {
    const moviename = req.body.username


    try {
        axios.get(`http://www.omdbapi.com/?apikey=${apikey}&s=` + moviename)
            .then(data => res.status(200).send(data))
            .catch(err => res.send(err));
    } catch (err) {
        console.error("No movie found\n", err);
    }
    res.render('home');
    res.end();

};


exports.returnMovies = (req, res) => {

    res.render('home');

};


exports.savedMovies = (req, res) => {

    res.render('watchlist');

};








// axios.get(`http://www.omdbapi.com/?apikey=${apikey}&s=` + urlEncodedSearchString)
// .then(response => {

//     movieData = response.data.Search;
//     movieData.map(function(currentMovie) {

//         // RENDER MOVIE CARD WITH VARIABLES
//         movieHTML += `
//         <div class="movie card">
//         <img class="card-img-top" src="${currentMovie.Poster}" alt="${currentMovie.Title}">
//         <div class="card-img-bottom">
//             <h4 class="card-title">${currentMovie.Title}</h4>
//             <p class="card-text">${currentMovie.Year}</p>
//             <a href="#" class="btn btn-info stretched-link" onclick="saveToWatchlist('${currentMovie.imdbID}')">Add</a> </div> 
//             </div>`;

//     });

//     document.getElementById("movie-cards").innerHTML = movieHTML;
// });

// })
// .catch(err => {
// res.status(500).send({
// message: err.message || "Some error occurred while retrieving tutorials."
// });
// });