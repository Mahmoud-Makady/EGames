document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const emailOrPhone = document.getElementById("emailOrPhone");
    const password = document.getElementById("password");
    const errorUsername = document.getElementById("error-Username");
    const errorPassword = document.getElementById("error-password");

    form.addEventListener("submit", (e) => {
        let valid = true;
        const storedData = JSON.parse(localStorage.getItem('userData')); // الحصول على البيانات المخزنة في localStorage

        // منع إعادة تحميل الصفحة أثناء التحقق من المدخلات
        e.preventDefault();

        // تحقق من اسم المستخدم
        if (emailOrPhone.value.trim() === "" || emailOrPhone.value.length < 3) {
            errorUsername.textContent = "Username must be at least 3 characters.";
            errorUsername.classList.remove("d-none");
            valid = false;
        } else {
            errorUsername.classList.add("d-none");
        }

        // تحقق من كلمة المرور
        if (password.value.trim() === "" || password.value.length < 6) {
            errorPassword.textContent = "Password must be at least 6 characters.";
            errorPassword.classList.remove("d-none");
            valid = false;
        } else {
            errorPassword.classList.add("d-none");
        }

        // تحقق من وجود الحساب في localStorage
        if (valid) {
            if (storedData) {
                // البحث عن المستخدم في المصفوفة
                const user = storedData.find(u => u.emailOrPhone === emailOrPhone.value && u.password === password.value);
                
                if (user) {
                    // إذا كانت البيانات صحيحة
                    swal("Login successful!");
                    localStorage.setItem("loggedIn", "true"); // تخزين حالة تسجيل الدخول
                    window.location.href = 'index.html'; // التوجيه إلى الصفحة الرئيسية بعد التأكد من تسجيل الدخول
                } else {
                    // إذا كانت البيانات غير صحيحة
                    swal("Incorrect username or password.");
                }
            } else {
                // إذا كانت البيانات غير موجودة
                swal("No account found. Please create a new account.");
            }
        }
    });
});
