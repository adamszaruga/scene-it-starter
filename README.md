## [Demo](https://heggy231.github.io/scene-it-starter/)

## [part 3](https://www.notion.so/samuraijane/SceneIt-Part-3-5bee84e5a0fe4d218f0f4ed12b2dff7c)
- Local storage

## [scene it part 2](https://www.notion.so/samuraijane/15-38393232e23e4ab890d3f978902fd146)


### bug
1. not calling saveToAdd function
https://codepen.io/heggy231/pen/jOypQqp

### improvment
- [x] Redesign the application to your own aesthetic
- [] Some movies that come back from the API don’t have image urls. Maybe add a default “no image found” image for those movies!
- [] Allow users to rate and/or review movies that are on their watchlist
- [] Let users click on movies to show more details about the movie (rotten tomatoes rating, synopsis, etc.)

### handy note:
#### styling:
* [bootstrap badge](https://getbootstrap.com/docs/4.1/components/badge/)
* [bootstrap card](https://getbootstrap.com/docs/4.3/components/card/)

* [scene-it starter code](https://github.com/adamszaruga/scene-it-starter)

#### mock html starter template
```html
<div class="movie">
    <div class="card" style="width: 18rem;">
        <img src="https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg" 
        class="card-img-top" alt="The Dark Knight">
        <div class="card-body">
            <span class="badge badge-secondary">2008</span>
            <h5 class="card-title">The Dark Knight</h5>
            <button class="btn btn-primary add-movie" onclick="saveToWatchlist('tt0468569')"></button>
        </div>
    </div>
</div>
```

### Todo: 
3) SceneIt-Part3-Step 3- Create the “My Watchlist” page

Now that we know what movies the user wants to watch, we can give them an interface to see what movies they’ve saved.

1. Somewhere in index.html, add a link that says “Go to my watchlist”
    1. Have that link navigate to “/watchlist.html”
2. Create a new watchlist.html file
3. Complete this html in a similar style to index.html
    1. Have the “Scene It” title at the top
    2. Don’t include a search bar this time
    3. Have a “movies-container” div to hold the list of saved movies
4. Write a watchlist.js file that does the following:
    1. When the page loads, pull the watchlist from localStorage
        1. Use localStorage.getItem(‘watchlist’);
    2. Renders each movie to “movies-container”, just like in index.js
        1. You can have the movies render exactly like they did in index.js, or you can switch it up!

You’ll find that the above ^^ is almost identical to what you did in Part 1! The only difference is that instead of showing a list of movies from *data.js**,***  you’ll be showing a list of movies from **localStorage.getItem(‘watchlist’);**

