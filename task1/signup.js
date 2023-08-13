const passwordInput = document.querySelector(".password");
const passwordList = document.getElementById("passwordList");

passwordInput.addEventListener("focus", showPasswordList);
passwordInput.addEventListener("blur", hidePasswordList);

function showPasswordList() {
  passwordList.style.opacity = "1";
  passwordList.style.transform = "translateY(0)";
}

function hidePasswordList() {
  passwordList.style.opacity = "0";
  passwordList.style.transform = "translateY(10px)";
}

const password = document.querySelector(".password");
const message = document.querySelector(".error_password");

password.addEventListener("input", function (event) {
  event.preventDefault();
  message.style.color = "red";
  const passwordValue = password.value;
  if (passwordValue.length < 8) {
    message.textContent = "Password must be at least 8 characters long.";
  } else if (!/[A-Z]/.test(passwordValue)) {
    message.textContent =
      "Password must contain at least one uppercase letter.";
  } else if (!/[a-z]/.test(passwordValue)) {
    message.textContent =
      "Password must contain at least one lowercase letter.";
  } else if (!/[0-9]/.test(passwordValue)) {
    message.textContent = "Password must contain at least one digit.";
  } else {
    message.textContent = " ";
  }
});
const repasswordInput = document.querySelector(".repassword");
const passwordMatchMessage = document.querySelector(".message");

repasswordInput.addEventListener("input", function (event) {
  const passwordValue = passwordInput.value;
  const repasswordValue = repasswordInput.value;

  if (passwordValue === repasswordValue) {
    passwordMatchMessage.textContent = "";
  } else {
    passwordMatchMessage.textContent =
      "Password doesn't match. Please re-enter.";
  }
});
