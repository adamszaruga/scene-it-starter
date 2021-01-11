const express = require('express');
const movieRouter = express.Router();
const search = require("../controllers/controllers");

movieRouter.get("", search.mainHome);

movieRouter.get("/movie-search", search.movieSearch);

module.exports = movieRouter;