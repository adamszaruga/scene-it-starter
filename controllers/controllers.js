const axios = require("axios");
const apikey = process.env.APIKEY;


// Form method GET uses req.query
// Form method POST uses req.body


exports.mainHome = (req, res) => {
    res.render('./partials/default');
};


exports.movieSearch = async(req, res) => {

    try {

        // const moviename = req.query.title.split(' ').join('+');
        const moviename = req.query.title.split(' ').join('+');
        const options = {
            method: "get",
            url: `http://www.omdbapi.com/?apikey=${apikey}&s=${moviename}`

        };

        const movieAPI = await axios.request(options);
        const moviesData = movieAPI.data;

        res.render('./partials/content', { movieData: moviesData.Search });
        // return res.send(moviename);

    } catch (err) {
        if (err.response) {
            console.log(err.response.data);
        } else if (err.request) {
            console.log(err.request);
        } else {
            console.error("Error", err.message);
        }
    }

    res.end();

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