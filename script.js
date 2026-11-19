
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const response = document.getElementById("response");

    response.textContent =
        `Thank you, ${name}! Your message has been received.`;

    response.style.color = "green";

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    contactForm.reset();

});
