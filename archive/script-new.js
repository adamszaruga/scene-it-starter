const fetchData = url => {
  axios.get(url)
  .then(response => renderCard(response.data));
};

const renderCard = data => {
  const cards = document.getElementById('cards');

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
  // https://medium.com/javascript-scene/nested-ternaries-are-great-361bddd0f340
  const someArr = data.map(item => {
    const card = document.createElement('div');
    card.innerHTML = `
      <div class="movie">
          <div class="card" style="width: 18rem;">
              <img src="${
                (!item.imageURL) ? './no_image.png'
                : item.imageURL && window.addEventListener("error", e => {return e;}, true) && (e.type === "error" && e.target === img) ? './no_image.png'
                : item.imageURL
              }"
              class="card-img-top" alt=${item.title}>
              <div class="card-body">
                  <span class="badge badge-secondary">${item.date}</span>
                  <h5 class="card-title">${item.title}</h5>
                  <button class="btn btn-primary add-movie" onclick="saveToWatchlist('tt0468569')"></button>
              </div>
          </div>
      </div>
    `;
    cards.appendChild(card);
  });
  
  window.addEventListener("error", (e) => {
    console.log('e:', e);
    // if(e.type === "error" && e.target === img){

    // }
  }, true)
};

const button = document.getElementById("button");
button.addEventListener('click', function() {
  fetchData("./mock/data.json");
});

