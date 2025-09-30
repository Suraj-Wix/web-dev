// Fade-in card
window.addEventListener("DOMContentLoaded", () => {
  const loginCard = document.getElementById("login-card");
  setTimeout(() => loginCard.classList.add("show"), 200);
});

// Handle login
function handleLogin(event) {
  event.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const messageArea = document.getElementById("message-area");
  const loginBtn = document.getElementById("login-btn");

  if (email === "" || password === "") {
    messageArea.textContent = "⚠️ Please fill in all fields.";
    messageArea.className = "mt-4 text-center text-sm text-yellow-300";
    return;
  }

  loginBtn.classList.add("btn-clicked");
  setTimeout(() => loginBtn.classList.remove("btn-clicked"), 200);

  if (email === "admin@example.com" && password === "123456") {
    messageArea.textContent = "✅ Login successful! Redirecting...";
    messageArea.className = "mt-4 text-center text-sm text-green-400";
    setTimeout(() => window.location.href = "/dashboard.html", 1500);
  } else {
    messageArea.textContent = "❌ Invalid credentials. Try again.";
    messageArea.className = "mt-4 text-center text-sm text-red-400";
  }
}
