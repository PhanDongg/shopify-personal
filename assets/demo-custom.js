// document.addEventListener("DOMContentLoaded", function() {
//   console.log(11111111111111)
//     document.querySelector("form").addEventListener("submit", function(e) {
//         var response = grecaptcha.getResponse();
//         if(response.length == 0) {
//             e.preventDefault();
//             alert("Vui lòng xác minh reCAPTCHA trước khi tạo tài khoản!");
//         }
//     });
// });

// document.addEventListener("DOMContentLoaded", function() {
//     const submitBtn = document.querySelector("button[type='submit']");
//     submitBtn.disabled = true; // Vô hiệu hóa nút tạo tài khoản ban đầu

//     window.grecaptchaCallback = function() {
//         if (grecaptcha.getResponse() !== "") {
//             submitBtn.disabled = false; // Kích hoạt lại nút khi reCAPTCHA được chọn
//         }
//     };
// });


// document.addEventListener("DOMContentLoaded", function() {
//     const form = document.querySelector("form"); // Chọn form đăng ký
//     const recaptcha = document.querySelector(".g-recaptcha");
//     const submitBtn = document.querySelector("button[type='submit']");

//     form.addEventListener("submit", function(event) {
//         if (grecaptcha.getResponse() === "") {
//             event.preventDefault(); // Chặn form gửi đi
//             alert("Vui lòng xác nhận reCAPTCHA trước khi tạo tài khoản.");
//         }
//     });
// });

// document.addEventListener("DOMContentLoaded", function() {
//     const submitBtn = document.querySelector("button[type='submit']");
//     submitBtn.disabled = true; // Mặc định disable nút submit

//     // Hàm callback khi người dùng chọn reCAPTCHA
//     window.recaptchaCallback = function() {
//         submitBtn.disabled = false; // Bật nút khi reCAPTCHA được chọn
//     };

//     // Kiểm tra lại reCAPTCHA khi form thay đổi
//     window.recaptchaExpiredCallback = function() {
//         submitBtn.disabled = true; // Disable lại nút nếu reCAPTCHA hết hạn
//     };
// });


// document.addEventListener("DOMContentLoaded", function() {
//     const submitBtn = document.querySelector("button[type='submit']");
//     submitBtn.disabled = true; // Mặc định disable nút submit

//     // Thêm phần hiển thị lỗi nếu chưa có
//     let recaptchaWarning = document.createElement("p");
//     recaptchaWarning.innerText = "Vui lòng xác nhận reCAPTCHA trước khi tạo tài khoản.";
//     recaptchaWarning.style.color = "red";
//     recaptchaWarning.style.display = "none"; // Ẩn đi ban đầu
//     submitBtn.parentNode.insertBefore(recaptchaWarning, submitBtn);

//     // Hàm callback khi người dùng chọn reCAPTCHA
//     window.recaptchaCallback = function() {
//         submitBtn.disabled = false; // Bật nút khi reCAPTCHA được chọn
//         recaptchaWarning.style.display = "none"; // Ẩn cảnh báo lỗi
//     };

//     // Kiểm tra nếu reCAPTCHA hết hạn hoặc người dùng bỏ chọn
//     window.recaptchaExpiredCallback = function() {
//         submitBtn.disabled = true; // Disable lại nút nếu reCAPTCHA hết hạn
//     };

//     // Ngăn không cho form submit nếu reCAPTCHA chưa được chọn
//     document.querySelector("form").addEventListener("submit", function(event) {
//         if (grecaptcha.getResponse() === "") {
//             event.preventDefault(); // Chặn form gửi đi
//             recaptchaWarning.style.display = "block"; // Hiển thị lỗi ngay lập tức
//         }
//     });
// });


