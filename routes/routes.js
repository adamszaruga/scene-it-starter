const express = require('express');
const movieRouter = express.Router();
// const search = require("../controllers/controllers");
const axios = require("axios");
const apikey = process.env.APIKEY;


const options = {
    method: "get",
    url: `http://www.omdbapi.com/?apikey=e8083edf&s=gremlins`

};

movieRouter.get("", async(req, res) => {

    try {
        // const moviename = req.body.title.split(' ').join('+');
        const movieAPI = await axios.request(options);

        const moviesData = movieAPI.data;

        res.render('home', { movieData: moviesData.Search });

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
});


// movieRouter.get("/", search.returnMovies);

// movieRouter.get("/watchlist", search.savedMovies);

module.exports = movieRouter;