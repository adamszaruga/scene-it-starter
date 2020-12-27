const express = require('express');
const movieRouter = express.Router();
// const search = require("../controllers/controllers");
const axios = require("axios");
const apikey = process.env.APIKEY;




movieRouter.get("/", (req, res) => {

    res.render('partials/default', { layout: './home' });

});

// Form method GET uses req.query
// Form method POST uses req.body

movieRouter.get("/movie-search", async(req, res) => {

    try {

        // const moviename = req.query.title.split(' ').join('+');
        const moviename = req.query.title.split(' ').join('+');
        const options = {
            method: "get",
            url: `http://www.omdbapi.com/?apikey=e8083edf&s=${moviename}`

        };

        const movieAPI = await axios.request(options);
        const moviesData = movieAPI.data;

        res.render('partials/search', { movieData: moviesData.Search, layout: './home' });
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
})



module.exports = movieRouter;