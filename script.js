const darkBtn = document.getElementById("darkModeBtn");
darkBtn.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    darkBtn.textContent = "☀️ Light Mode";
  } else {
    darkBtn.textContent = "🌙 Dark Mode";
  }
});
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const status = document.getElementById("formStatus");
    if (name === "" || email === "" || message === "") {
      status.textContent = "❌ Please fill out all fields!";
      status.style.color = "#ff9999";
    } else if (!email.includes("@") || !email.includes(".")) {
      status.textContent = "❌ Please enter a valid email address!";
      status.style.color = "#ff9999";
    } else {
      status.textContent = "✅ Thanks " + name + "! I'll get back to you soon.";
      status.style.color = "#90EE90";
      form.reset();
      setTimeout(function() {
        status.textContent = "";
      }, 3000);
    }
  });
}