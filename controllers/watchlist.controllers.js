const axios = require("axios");
const apikey = process.env.APIKEY;

const mongoose = require('mongoose');
const Watchlist = mongoose.model('Watchlist');
// const router = require('express').Router();

// articles = movies, article = movie

   exports.getWatchlist = async (req, res) => {
        const movies = await Watchlist.find().cache({ expire: 10});
        const movieList = await db.collection.get('watchlist').find({}).toArray();

        res.render('./partials/movieDetails', { movieData: movieList});
    };

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

    // router.post('/watchlist/:id', async (req, res) => {
    //     const { id } = req.body;
    //     // const movies = await Watchlist.find().cache({ expire: 10});
    //     console.log(id);

    //     const movie = new Watchlist({
    //         Title, 
    //         Genre, 
    //         Rated, 
    //         Released, 
    //         Runtime, 
    //         Plot, 
    //         Poster, 
    //         imdbID
    //     });

    //     try {
    //         // await movie.save();
    //        await res.render('./partials/movieDetails', { movieData: movie});
    //     } catch (err) {
    //         res.status(400).send(err.message);
    //     }

    // });

    // module.exports = router;