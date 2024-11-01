document.addEventListener("DOMContentLoaded", function() {
    const inicioBtn = document.getElementById("inicio-btn");
    inicioBtn.addEventListener("click", function(event) {
        event.preventDefault();
        document.querySelector("#inicio").scrollIntoView({
            behavior: "smooth"
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");

    // Inicializa EmailJS con tu User ID (reemplaza con el tuyo cuando lo tengas)
    emailjs.init("YOUR_USER_ID"); // Agrega tu User ID aquí

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const params = {
            from_name: document.getElementById("name").value,
            from_email: document.getElementById("email").value,
            message: document.getElementById("message").value
        };

        emailjs.send("service_whk9x59", "template_ml0s7al", params)
        .then(function(response) {
            alert("Mensaje enviado correctamente.");
            contactForm.reset();
        }, function(error) {
            alert("Ocurrió un error. Intenta nuevamente.");
        });
    });
});
