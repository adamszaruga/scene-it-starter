const express = require('express');
const movieRouter = express.Router();
// const search = require("../controllers/controllers");
const axios = require("axios");
const apikey = process.env.APIKEY;


const options = {
    method: "get",
    url: `http://www.omdbapi.com/?apikey=e8083edf&t=ninth+gate`

};

movieRouter.get("", async(req, res) => {

    try {
        // const moviename = req.body.title.split(' ').join('+');
        const movieAPI = await axios.request(options);

        let movie = Object.entries(movieAPI.data).forEach((key) => {
            return key
        });

        res.render('home', { movie: movieAPI.data });

    } catch (err) {
        if (err.response) {
            console.log(err.response.data);
            // console.log(err.response.status)
            // console.log(err.response.headers)
        } else if (err.request) {
            console.log(err.request);
        } else {
            console.error("Error", err.message);
        }
    }

    res.end()
});


// movieRouter.get("/", search.returnMovies);

// movieRouter.get("/watchlist", search.savedMovies);

module.exports = movieRouter