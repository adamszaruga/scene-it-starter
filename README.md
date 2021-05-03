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

