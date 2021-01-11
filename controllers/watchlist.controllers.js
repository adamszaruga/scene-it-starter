const axios = require("axios");
const apikey = process.env.APIKEY;
const mongoose = require('mongoose');
const Watchlist = mongoose.model('Watchlist');



// GET main list of movies saved in watchlist
exports.getWatchlist = async (req, res) => {
    
    try {
        const movies = await Watchlist.find().cache({ expire: 10});
        res.render('./partials/content', { movieData: movies});
    } catch (err) {
        res.status(400).send(err.message);
    }
};

// GET infomration for a specific movie saved to watchlist

exports.getMovieFromWatchlist = async(req, res) => {
    return;
};

// POST a new movie to the watchlist

exports.addMovieToWatchList = async (req, res) => {
    const { Title, Genre, Rated, Released, Runtime, Plot, Poster, imdbID } = req.body;

    if ( !Title || !Poster || !imdbID ) {
        return res.status(400).send('Missing Title, Poster, or imdbID');
    }

            const movie = new Watchlist({
        Title, 
        Genre, 
        Rated, 
        Released, 
        Runtime, 
        Plot, 
        Poster, 
        imdbID
    });

    try {
        await movie.save();
        res.send(movie);
    } catch (err) {
        res.status(400).send(err.message);
    }
};