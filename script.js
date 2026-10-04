// Mobile menu
function toggleMenu() {
    const nav = document.getElementById("navLinks");

    nav.classList.toggle("active");
}


// Read blog button
function readBlog(category) {
    alert(
        "Thanks for reading Mythreya's blog!\n\n" +
        "You selected the " + category + " article."
    );
}


// Newsletter
function subscribe(event) {

    event.preventDefault();

    const email = document.getElementById("email");
    const message = document.getElementById("message");

    message.textContent =
        "Thank you for subscribing, " + email.value + "! 🎉";

    email.value = "";
}
