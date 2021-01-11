const express = require('express');
const movieRouter = express.Router();
const search = require("../controllers/controllers");
const watchlist = require('../controllers/watchlist.controllers');

movieRouter.get("", search.mainHome);

movieRouter.get("/movie-search", search.movieSearch);

movieRouter.get("/watchlist", watchlist.getWatchlist);

movieRouter.post("/watchlist/:id", watchlist.addMovieToWatchList);

module.exports = movieRouter;