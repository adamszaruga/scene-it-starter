const express = require('express');
const router = express.Router();
const search = require("../controllers/controllers");
const axios = require("axios");
const apikey = process.env.APIKEY;
// router.use(express.urlencoded({
//     extended: true
// }));


router.post("/search", (req, res) => {
    const moviename = req.body.title.split(' ').join('+');
    axios.get(`http://www.omdbapi.com/?apikey=${apikey}&s=${moviename}`)
        .then((res) => {
            console.log(res.data);
        });


    console.log(moviename);
    res.render('home');
    res.end();
});

router.get("/", search.returnMovies);

router.get("/watchlist", search.savedMovies);



module.exports = router;