AOS.init();

const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '83dfe67d27msh364387b4a873cc5p188b33jsn23378217f6f3',
		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
	}
};
async function getGame() {
  try {
    const response = await fetch(url, options);
    const data = await response.json();

    let popular = data; 
    let limitedPopular = popular.slice(0, 6);

    display(limitedPopular);
  } catch (error) {
    console.error('Error fetching games:', error);
  }
}


function display(games){
let box=''
for(let i = 0; i < games.length; i++){
  box += `
  <div class="main col-lg-4 col-md-6 d-flex justify-content-center ">
    <div class="card text-center w-100" style=" background-image:url(${games[i].thumbnail}); background-size:cover; background-position:center; ">
      
      <div class="card-body position-relative">
        <h5 class="card-title position-relative">${games[i].title}</h5>
        <a href="${games[i].game_url}" target="_blank" class="btn btn-primary playBtn position-absolute ">Play Now</a>
        <button onclick="addToWishlist(${games[i].id} , '${games[i].title}' , '${games[i].thumbnail}' ,'${games[i].game_url}')" class="btn add  position-absolute"><i class="fa-solid fa-heart" id="wish" style="left: 78%;
        font-size: 1.6rem;"></i></button>
          </div>
        </div>
      </div>`;
}
document.querySelector('.row-game').innerHTML=box
}

getGame()






// ____________________________

const url2 = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
const optionss = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '83dfe67d27msh364387b4a873cc5p188b33jsn23378217f6f3',
		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
	}
};
async function getLatest() {
  try {
    const response = await fetch(url, options);
    const data = await response.json();

    let latest = data; 
    let limitedLatest = latest.slice(6,12);

    displayLatest(limitedLatest);
  } catch (error) {
    console.error('Error fetching games:', error);
  }
}


function displayLatest(games){
let box=''
for(let i = 0; i < games.length; i++){
  box +=`
  <div class="main col-lg-4 col-md-6 d-flex justify-content-center ">
    <div class="card text-center w-100" style=" background-image:url(${games[i].thumbnail}); background-size:cover; background-position:center; ">
      
      <div class="card-body ">
        <h5 class="card-title position-relative">${games[i].title}</h5>
        <a href="${games[i].game_url}" target="_blank" class="btn btn-primary playBtn position-absolute">Play Now</a>
         <button onclick="addToWishlist(${games[i].id} , '${games[i].title}' , '${games[i].thumbnail}' ,'${games[i].game_url}')" class="btn add  position-absolute"><i class="fa-solid fa-heart" id="wish" style="left: 78%;
        font-size: 1.6rem;"></i></button>
      </div>
    </div>
  </div>`;
}
document.querySelector('.row-latest').innerHTML=box
}

getLatest()

    // __________________________


    const url3 = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
    const optionsss = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '83dfe67d27msh364387b4a873cc5p188b33jsn23378217f6f3',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };
    async function getEditor() {
      try {
        const response = await fetch(url, options);
        const data = await response.json();
    
        let editor = data; 
        let limitededitor = editor.slice(12, 18);
    
        displayEditor(limitededitor);
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    }
    
    
    function displayEditor(games){
    let box=''
    for(let i = 0; i < games.length; i++){
      box += `
  <div class="main col-lg-4 col-md-6 d-flex justify-content-center ">
    <div class="card text-center w-100" style=" background-image:url(${games[i].thumbnail}); background-size:cover; background-position:center; ">
      
      <div class="card-body ">
        <h5 class="card-title position-relative">${games[i].title}</h5>
        <a href="${games[i].game_url}" target="_blank" class="btn btn-primary playBtn position-absolute">Play Now</a>
         <button onclick="addToWishlist(${games[i].id} , '${games[i].title}' , '${games[i].thumbnail}' ,'${games[i].game_url}')" class="btn add  position-absolute"><i class="fa-solid fa-heart" id="wish" style="left: 78%;
        font-size: 1.6rem;"></i></button>
      </div>
    </div>
  </div>`;
    }
    document.querySelector('.row-editor').innerHTML=box
    }
    
    getEditor()

    // __________________

// start swiper 

const swiperUrl = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
const swiperOptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '83dfe67d27msh364387b4a873cc5p188b33jsn23378217f6f3',
		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
	}
};
async function getSwiperGame() {
  try {
    const response = await fetch(swiperUrl, swiperOptions);
    const data = await response.json();

    let discover = data; 
    let limitedDiscover = discover.slice(90, 100);
    console.log(limitedDiscover);
    
    displayDiscover(limitedDiscover);
  } catch (error) {
    console.error('Error fetching games:', error);
  }
}


function displayDiscover(games) {
  let slides = '';
  for (let i = 0; i < games.length; i++) {
      slides += `
          <div class="swiper-slide">
              <div class="trendingImg" style=" background-image:url(${games[i].thumbnail}); background-size:cover; background-position:center; ">
                  <div class="card-body-swiper position-relative">
                    <h5 class="card-title position-relative">${games[i].title}</h5>
                    <a href="${games[i].game_url}" target="_blank" class="btn btn-primary w-50 playBtn position-absolute">Play Now</a>
                    <button onclick="addToWishlist(${games[i].id} , '${games[i].title}' , '${games[i].thumbnail}' ,'${games[i].game_url}')"  class="btn add  position-absolute"><i class="fa-solid fa-heart" id="wish" style="left: 78%;
        font-size: 1.6rem;"></i></button>
                  </div>
              </div>
          </div>`;
  }
  document.querySelector('.swiper-wrapper').innerHTML = slides;
}


getSwiperGame()

var swiperTrending = new Swiper(".mySwipertrending", {
  watchSlidesProgress: true,
  slidesPerView: 7,

  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
      320:{
          slidesPerView: 3,
          spaceBetween: 10
          },
      450: {
          slidesPerView: 3,
          spaceBetween: 20
      },
      700: {
          slidesPerView: 4,
          spaceBetween: 30
      },
      1000: {
          slidesPerView: 5,
          spaceBetween: 30
      }
  }

});

// start video slider
function changeVideo(videoSrc) {
  const activeVideo = document.getElementById("activeVideo");
  activeVideo.src = videoSrc;
  activeVideo.play();

  document.querySelectorAll(".thumbnail").forEach((thumbnail) => {
    thumbnail.classList.remove("active");
  });
  event.currentTarget.classList.add("active");
}

// _________________________
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
      title: "success!",
      text: `${title} has been added to your Wishlist!`,
      icon: "success",
      button: "Aww yiss",
  }).then(() => {
      location.reload(); 
  });
  } else {
    swal(`${title} is already in your Wishlist.`)
  //   swal({
  //     title: "Hey You.!",
  //     text: `${title} is already in your Wishlist.`,
  //     icon: "warning",
  //     button: "Ok",
  // });
  }
}

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