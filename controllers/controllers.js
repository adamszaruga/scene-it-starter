const axios = require("axios");
const apikey = process.env.APIKEY;



// Form method GET uses req.query
// Form method POST uses req.body


exports.mainHome = (req, res) => {
    res.render('./partials/default');
};


exports.movieSearch = async(req, res) => {

    try {

        const moviename = req.query.title.split(' ').join('+');
        
        const options = {
            method: "get",
            url: `http://www.omdbapi.com/?apikey=${apikey}&s=${moviename}`

        };

        const movieAPI = await axios.request(options);
        const moviesData = movieAPI.data;

        res.render('./partials/content', { movieData: moviesData.Search });
       

    } catch (err) {
        if (err.response) {
            console.log(err.response.data);
        } else if (err.request) {
            console.log(err.request);
        } else {
            console.error("Error", err.message);
        }
    }

    res.end();

};

