document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    alert("Thank you! Your message has been sent.");

    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('message').value = "";
});
