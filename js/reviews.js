AOS.init();


var gameReviewSection = document.getElementById('gameReviewSection');
        var gameReviewText = document.getElementById('gameReviewText');
    
        //mouse enter event
        gameReviewSection.addEventListener('mouseenter', function() {
        gameReviewSection.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; 
        gameReviewText.style.color = 'white'; 
        });

        //mouse leave event
        gameReviewSection.addEventListener('mouseleave', function() {
        gameReviewSection.style.backgroundColor = 'transparent'; 
        gameReviewText.style.color = 'white';
        });
        const swiper = new Swiper(".mySwiper2", {
            spaceBetween: 10,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            thumbs: {
              swiper: {
                el: ".mySwiper",
                slidesPerView: 5,
              },
            },
          });
          
          // Pause all videos when the slide changes
          swiper.on("slideChange", function () {
            document.querySelectorAll(".swiper-slide video").forEach((video) => {
              video.pause();
            });
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