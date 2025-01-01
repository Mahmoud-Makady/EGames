AOS.init();


const API_KEY = '83dfe67d27msh364387b4a873cc5p188b33jsn23378217f6f3';
const trendingTypeSelect = document.getElementById('trendingType');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const trendingResults = document.getElementById('trendingResults');
const errorMessage = document.getElementById('errorMessage');



function fetchTrending(category = '') {
  let url = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
  
  if (category) {
    url += `?category=${encodeURIComponent(category)}`;
  }

  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.setRequestHeader('x-rapidapi-key', API_KEY);
  xhr.setRequestHeader('x-rapidapi-host', 'free-to-play-games-database.p.rapidapi.com');

  xhr.onload = function () {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      let allGames = data;
      let limitefGames = allGames.slice(0, 200)
      console.log(limitefGames);
      
      displayTrendingItems(limitefGames);
      errorMessage.classList.add('d-none');
    } else {
      console.error('Error: ' + xhr.statusText);
      errorMessage.classList.remove('d-none'); 
    }
  };

  xhr.onerror = function () {
    console.error('Request failed');
    errorMessage.classList.remove('d-none'); 
  };

  xhr.send();
}
function displayTrendingItems(items) {
  trendingResults.innerHTML = '';
  items.forEach(item => {
    const col = document.createElement('div');
    col.classList.add('col-md-6', 'mb-4');
    col.classList.add('col-lg-4');

    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    img.setAttribute('loading', 'lazy');
    img.src = item.thumbnail || 'https://via.placeholder.com/300x450';
    img.alt = item.title || 'Untitled';

    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    const h5 = document.createElement('h5');
    h5.textContent = item.title || 'Untitled';

    const p = document.createElement('p');
    p.textContent = `Genre: ${item.genre}`;

    const detailsButton = document.createElement('button');
    detailsButton.classList.add('btn', 'details' ,'btn-info');
    detailsButton.textContent = 'Details';
    detailsButton.addEventListener('click', function () {
      fetchGameDetails(item.id); 
    });

    const wishButton = document.createElement('button');
    wishButton.classList.add('btn', 'add', 'position-absolute');   
    wishButton.style.left = '85%';    
    wishButton.style.top = '10px'; 
    wishButton.style.fontSize = '1.4rem';
    
    
    const wishIcon = document.createElement('i');
    wishIcon.classList.add('fa-solid', 'fa-heart');
    wishIcon.id = 'wish';
    wishButton.appendChild(wishIcon); 
    
    wishButton.addEventListener('click', function () {
      addToWishlist(item.id, item.title, item.thumbnail, item.game_url); 
    });

    

    overlay.appendChild(h5);
    overlay.appendChild(p);
    overlay.appendChild(detailsButton);
    overlay.appendChild(wishButton);
    card.appendChild(img);
    card.appendChild(overlay);
    col.appendChild(card);
    trendingResults.appendChild(col);
  });
}

function addToWishlist(id, title, thumbnail, gameUrl) {
  if (localStorage.getItem('loggedIn') !== 'true') {
    swal({
      title: "Rejected!",
      text: 'You must be logged in to add games to your Wishlist.',
      icon: "warning",
      button: "Ok",
    });
    return;
  }

  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

  if (!wishlist.find(game => game.id === id)) {
    wishlist.push({ id, title, thumbnail, gameUrl });
    localStorage.setItem('wishlist', JSON.stringify(wishlist));

    swal({
      title: "Added!",
      text: `${title} has been added to your Wishlist!`,
      icon: "success",
      button: "Aww yiss",
  }).then(() => {
      location.reload(); 
  });
  } else {
    swal({
      title: "Hey You!",
      text: `${title} is already in your Wishlist.`,
      icon: "warning",
      button: "Ok",
  });
}
}


function fetchGameDetails(gameId) {
  const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${encodeURIComponent(gameId)}`;
  
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.setRequestHeader('x-rapidapi-key', API_KEY);
  xhr.setRequestHeader('x-rapidapi-host', 'free-to-play-games-database.p.rapidapi.com');

  xhr.onload = function () {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      displayGameDetails(data);
    } else {
      console.error('Error: ' + xhr.statusText);
    }
  };

  xhr.onerror = function () {
    console.error('Request failed');
  };

  xhr.send();
}

function displayGameDetails(details) {
  modalTitle.textContent = details.title || 'Game Details';
  modalBody.innerHTML = `
    <div class="row">
      <div class="col-6">
        <img src="${details.thumbnail}" class="img-fluid mb-3" alt="${details.title}">
      </div>
      <div class="col-6">
        <p><strong>Genre:</strong> ${details.genre}</p>
        <p><strong>Platform:</strong> ${details.platform}</p>
        <p><strong>Publisher:</strong> ${details.publisher}</p>
        <p><strong>Release Date:</strong> ${details.release_date}</p>
        <p><strong>Description:</strong> ${details.short_description}</p>
        <a href="${details.game_url}" target="_blank"><button class="btn btn-primary">Play Now</button></a>
      </div>
    </div>
  `;
  const modal = new bootstrap.Modal(document.getElementById('movieDetailsModal'));
  modal.show();
}

fetchTrending();

trendingTypeSelect.addEventListener('change', function () {
  const selectedType = trendingTypeSelect.value;
  fetchTrending(selectedType);
});

function searchGames(query) {
  const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?title=${encodeURIComponent(query)}`;

  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.setRequestHeader('x-rapidapi-key', API_KEY);
  xhr.setRequestHeader('x-rapidapi-host', 'free-to-play-games-database.p.rapidapi.com');

  xhr.onload = function () {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);

      if (data && data.length > 0) {
        displayTrendingItems(data);
        errorMessage.classList.add('d-none');
      } else {
        trendingResults.innerHTML = '<p class="text-center">No results found.</p>';
        errorMessage.classList.add('d-none');
      }
    } else {
      console.error('Error: ' + xhr.statusText);
      errorMessage.classList.remove('d-none');
    }
  };

  xhr.onerror = function () {
    console.error('Request failed');
    errorMessage.classList.remove('d-none');
  };

  xhr.send();
}

searchButton.addEventListener('click', () => {
  const query = searchInput.value.trim();
  if (query) {
    searchGames(query);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("login-btn");

  const isLoggedIn = localStorage.getItem("loggedIn");

  if (isLoggedIn === "true") {
      loginBtn.innerHTML = '<i class="fa-solid fa-right-from-bracket"></i>';
      loginBtn.addEventListener("click", () => {
          localStorage.removeItem("loggedIn");
          window.location.href = "login.html"; 
      });
  } else {
    loginBtn.innerHTML = 'Login/Register';
    loginBtn.addEventListener("click", () => {
        window.location.href = "login.html"; 
    });
  }
});