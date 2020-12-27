const express = require('express');
const movieRouter = express.Router();
const search = require("../controllers/controllers");




movieRouter.get("", search.mainHome);

movieRouter.get("/movie-search", search.movieSearch);

movieRouter.get("/watchlist", search.savedMovies);

module.exports = movieRouter;