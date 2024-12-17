// Controlar el menú en dispositivos móviles
const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
};

// Agrega el SDK de EmailJS en el head de tu HTML
// <script src="https://cdn.emailjs.com/dist/email.min.js"></script>

document.addEventListener("DOMContentLoaded", () => {
    // Inicializa EmailJS con tu userID
    emailjs.init("KlakqrcNKQItP2QyL"); // Reemplaza con tu User ID de EmailJS

    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");

    // Evento para manejar el envío del formulario
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Recolectar datos del formulario
        const email = document.getElementById("user_email").value;
        const message = document.getElementById("user_message").value;

        // Parámetros para enviar
        const params = {
            from_name: email, // Aquí el correo lo pasas como "from_name"
            message: message, // Mensaje que se envía
        };

        // Enviar correo usando EmailJS
        emailjs.send("service_5xj7n1b", "template_xlh9pjk", params)
            .then(() => {
                status.style.display = "block";
                status.textContent = "Email sent successfully!";
                status.style.color = "green";
                form.reset();
            })
            .catch((error) => {
                status.style.display = "block";
                status.textContent = "Failed to send email. Please try again.";
                status.style.color = "red";
                console.error("EmailJS Error Details:", error);
            });
    });
});
