const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    body.classList.add("dark-theme");
    themeToggle.textContent = "☀️";
} else {
    themeToggle.textContent = "🌙";
}

// Theme switcher
themeToggle.addEventListener("click", function () {

    body.classList.toggle("dark-theme");

    if (body.classList.contains("dark-theme")) {

        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "☀️";

    } else {

        localStorage.setItem("theme", "light");
        themeToggle.textContent = "🌙";

    }

});

// Contact form
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name.length < 3) {
        formMessage.textContent = "Please enter a valid name.";
        formMessage.style.color = "red";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        formMessage.textContent = "Please enter a valid email.";
        formMessage.style.color = "red";
        return;
    }

    if (message.length < 10) {
        formMessage.textContent = "Message should contain at least 10 characters.";
        formMessage.style.color = "red";
        return;
    }

    formMessage.textContent =
        "Thank you! Your message has been submitted successfully.";

    formMessage.style.color = "green";

    contactForm.reset();

});