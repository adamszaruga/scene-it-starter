const mongoose = require('mongoose');
const { Schema } = mongoose;


const watchlistSchema = new Schema({
    Title: String,
    Genre: String,
    Rated: String,
    Released: String,
    Runtime: String,
    Plot: String,
    Poster: String,
    imdbID: String,
    createdAt: { type: Date, default: Date.now},
});

mongoose.model('Watchlist', watchlistSchema);
