AOS.init();


document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.fancy-button');
    
    button.addEventListener('click', () => {
        alert('welcome to the dark side');
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Form submitted!');
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