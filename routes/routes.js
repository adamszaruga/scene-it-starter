const express = require('express');
const router = express.Router();
const search = require("../controllers/controllers");
const axios = require("axios");
const apikey = process.env.APIKEY;
router.use(express.urlencoded({
    extended: true
}));

// router.get("/search", (req, res) => {

//     // axios.get(`http://www.omdbapi.com/?apikey=${apikey}&s=${moviename}`)
//     //     .then((res) => {
//     //         console.log(res.data);
//     //     });

//     res.render('home', { qs: req.body });
// });

router.post("/search", (req, res) => {

    // axios.get(`http://www.omdbapi.com/?apikey=${apikey}&s=${moviename}`)
    //     .then((res) => {
    //         console.log(res.data);
    //     });
    const username = req.body.title;
    console.log(username);
    res.render('home');
    res.end();
});

router.get("/", search.returnMovies);

router.get("/watchlist", search.savedMovies);



module.exports = router;