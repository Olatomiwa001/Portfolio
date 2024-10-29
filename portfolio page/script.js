function toggleDetails(button) {
    const details = button.nextElementSibling;
    if (details.style.display === "block") {
        details.style.display = "none";
        button.textContent = "View Details";
    } else {
        details.style.display = "block";
        button.textContent = "Hide Details";
    }
}
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    document.getElementById('response-message').textContent = `Thank you, ${name}. I'll be in touch soon!`;
    this.reset();
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar topnav") {
      x.className += " responsive";
    } else {
      x.className = "navbar topnav";
    }
  }