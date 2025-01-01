document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const emailOrPhone = document.getElementById("emailOrPhone");
    const password = document.getElementById("password");
    const errorUsername = document.getElementById("error-Username");
    const errorPassword = document.getElementById("error-password");

    form.addEventListener("submit", (e) => {
        let valid = true;
        const storedData = JSON.parse(localStorage.getItem('userData')); 

        e.preventDefault();

        if (emailOrPhone.value.trim() === "" || emailOrPhone.value.length < 3) {
            errorUsername.textContent = "Username must be at least 3 characters.";
            errorUsername.classList.remove("d-none");
            valid = false;
        } else {
            errorUsername.classList.add("d-none");
        }

        if (password.value.trim() === "" || password.value.length < 6) {
            errorPassword.textContent = "Password must be at least 6 characters.";
            errorPassword.classList.remove("d-none");
            valid = false;
        } else {
            errorPassword.classList.add("d-none");
        }

        if (valid) {
            if (storedData) {
                const user = storedData.find(u => u.emailOrPhone === emailOrPhone.value && u.password === password.value);
                
                if (user) {
                    swal({
                        title: "Welcome!",
                        text: 'Login successful!',
                        icon: "success",
                        button: "Aww yiss",
                    });
                    localStorage.setItem("loggedIn", "true"); 
                    window.location.href = 'index.html'; 
                } else {
                    swal({
                        title: "Rejected!",
                        text: 'Incorrect username or password.',
                        icon: "error",
                        button: "Ok",
                      });
                }
            } else {
                swal({
                    title: "Rejected!",
                    text: 'No account found. Please create a new account.',
                    icon: "error",
                    button: "Ok",
                  });
            }
        }
    });
});
