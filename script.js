const fetchData = url => {
  axios.get(url)
  .then(response => renderCard(response.data));
};

const renderCard = data => {
  const cards = document.getElementById('cards');

  const someArr = data.map(item => {
    const card = document.createElement('div');
    card.innerHTML = `
      <div class="movie">
          <div class="card" style="width: 18rem;">
              <img src=${item.imageURL}
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


};

const button = document.getElementById("button");
button.addEventListener('click', function() {
  fetchData("./mock/data.json");
});

