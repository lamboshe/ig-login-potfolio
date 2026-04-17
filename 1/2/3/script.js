document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value.trim();
  let errorMsg = document.getElementById("error-msg");

  if (username === "" || password === "") {
    errorMsg.textContent = "Please fill in all fields.";
    return;
  }

  if (password.length < 6) {
    errorMsg.textContent = "Password must be at least 6 characters.";
    return;
  }

  errorMsg.style.color = "green";
  errorMsg.textContent = "Login successful (demo only!)";

  // Reset form
  document.getElementById("loginForm").reset();
});
