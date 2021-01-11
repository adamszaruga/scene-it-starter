const mongoose = require('mongoose');
const Watchlist = mongoose.model('Watchlist');
const router = require('express').Router();


// articles = movies, article = movie


    router.get('/watchlist', async (req, res) => {
        const movies = await Watchlist.find().cache({ expire: 10});

        res.json(movies);
    });

    router.post('/watchlist', async (req, res) => {
        const { Title, Genre, Rated, Released, Runtime, Plot, Poster, imdbID } = req.body;

        // if ( !Title ) {
        //     // return res.status(400).send('Missing Title, Poster, or imdbID');
        //     console.log(req.body);
        // }

        console.log(req.body)

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
            console.log(movie);
            await movie.save();
            res.send(movie);
        } catch (err) {
            res.status(400).send(err.message);
        }
    });

    module.exports = router;