const axios = require("axios");
const apikey = process.env.APIKEY;
const mongoose = require('mongoose');
const redis = require('redis');
const Watchlist = mongoose.model('Watchlist');

const redisPort = 6379;
const client = redis.createClient(redisPort);

client.on("error", (err) => {
    console.log(err);
})


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
    const { id } = req.params;
    console.log(typeof id);

    try {
    client.get(id, async (err, title) => {
        if (err) throw err;
        if (title) {
            const cachedData = JSON.parse(title);
            console.log(title);
            // res.render('./partials/content', { movieData: cachedData.Search });
            res.end();
        }
    })
} catch (err) {
        res.status(500).send({message: err.message});
    
}

    // try {
    //     await Watchlist.find().cache({ expire: 86400})
    //     .then(res => { movie.save() })
    //     .then(item => {res.send(movie)})
        
    // } catch (err) {
    //     res.status(400).send(err.message);
    // }
};