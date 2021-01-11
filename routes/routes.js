const express = require('express');
const cors = require('cors');
const movieRouter = express.Router();
const search = require("../controllers/controllers");
const watchlist = require('../controllers/watchlist.controllers');

movieRouter.get("/", cors(), search.mainHome);

movieRouter.get("/search", cors(), search.movieSearch);

movieRouter.get("/watchlist", cors(), watchlist.getWatchlist);

movieRouter.get("/watchlist/:id", cors(), watchlist.getMovieFromWatchlist);

movieRouter.post("/watchlist/:id", cors(), watchlist.addMovieToWatchList);

module.exports = movieRouter;