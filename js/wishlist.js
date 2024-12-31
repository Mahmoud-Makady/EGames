AOS.init();


document.addEventListener('DOMContentLoaded', () => {
    const wishlistContainer = document.querySelector('.row-wishlist');
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  
    if (wishlist.length === 0) {
      wishlistContainer.innerHTML = '<p class="text-danger">Your Wishlist is empty!</p>';
      return;
    }
  
    let box = '';
    wishlist.forEach(game => {
      box += `
        <div class="main col-lg-4 col-md-6 d-flex justify-content-center g-4">
          <div class="card text-center w-100" style="background-image:url(${game.thumbnail}); background-size:cover; background-position:center;">
            <div class="card-body">
              <h5 class="card-title position-relative">${game.title}</h5>
              <a href="${game.gameUrl}" target="_blank" class="btn btn-primary playBtn position-absolute ">Play Now</a>
              <button onclick="removeFromWishlist(${game.id})" class="btn addd  position-absolute"><i class="fa-solid fa-xmark"></i></button>
            </div>
          </div>
        </div>`;
    });
  
    wishlistContainer.innerHTML = box;
  });



//   _______________________



  function removeFromWishlist(id, title) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlist = wishlist.filter(game => game.id !== id);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));

    swal({
        title: "Removed!",
        text: `${title} has been deleted successfully!`,
        icon: "success",
        button: "OK",
    }).then(() => {
        location.reload(); 
    });
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