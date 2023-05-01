// Generate a random captcha string
function generateCaptcha() {
  let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let captchaLength = 6;
  let captcha = "";
  for (let i = 0; i < captchaLength; i++) {
    captcha += chars[Math.floor(Math.random() * chars.length)];
  }
  return captcha;
}

// Display captcha on the page
let captchaText = document.getElementById("captcha-text");
let captcha = generateCaptcha();
captchaText.innerHTML = captcha;

// Validate captcha input
let captchaInput = document.getElementById("captcha-input");
let captchaErrorMessage = document.getElementById("captcha-error-message");

function validateCaptcha() {
  if (captchaInput.value !== captcha) {
    captchaErrorMessage.style.display = "block";
    captchaInput.classList.add("error");
    return false;
  } else {
    captchaErrorMessage.style.display = "none";
    captchaInput.classList.remove("error");
    return true;
  }
}

captchaInput.addEventListener("input", validateCaptcha);

// Submit form
let submitButton = document.getElementById("submit-button");
let form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (validateCaptcha()) {
    // Send form data to server
    // ...
    alert("Form submitted successfully!");
  }
});
