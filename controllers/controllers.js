const axios = require("axios");
const apikey = process.env.APIKEY;
const mongoose = require('mongoose');
// const redis = require("../utils/redis");
const redis = require('redis');
const Watchlist = mongoose.model('Watchlist');

const redisPort = 6379;
const client = redis.createClient(redisPort);

client.on("error", (err) => {
    console.log(err);
})

// Form method GET uses req.query
// Form method POST uses req.body

// Render main home page
exports.mainHome = (req, res) => {
    res.render('./partials/default');
};

// Main movie serch controller
exports.movieSearch = async(req, res) => {
    
    try {
        // saves GET results to watchlist object
        const searchDetails = req.query.title;
  
        client.get(searchDetails, async (err, title) => {
            if (err) throw err;

            if (title) {
                
                const cachedData = JSON.parse(title);
                res.render('./partials/content', { movieData: cachedData.Search });
                res.end();
            } else {
                const moviename = searchDetails.split(' ').join('+');
                const options = {
                    method: "get",
                    url: `http://www.omdbapi.com/?apikey=${apikey}&s=${moviename}`
        
                };
                const movieAPI = await axios.request(options);
                client.setex(searchDetails, 600, JSON.stringify(movieAPI.data));
                res.render('./partials/content', { movieData: movieAPI.data.Search });
                res.end();
            }
        }
        ) 
    }   catch(err) {
        res.status(500).send({message: err.message});
    }
}

