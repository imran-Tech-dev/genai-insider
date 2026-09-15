const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

const form = document.getElementById("newsletterForm");
const message = document.getElementById("formMessage");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    if (email) {
      message.textContent = "Thanks! Newsletter signup is ready to connect to your email service.";
      form.reset();
    }
  });
}
