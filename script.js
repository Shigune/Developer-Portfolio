// Controlar el menú en dispositivos móviles
const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
};

// Inicializar EmailJS
(function () {
    emailjs.init("ckB2zUyYV0LASKK-R"); // Asegúrate de que este sea tu User ID en EmailJS
})();

// Manejo del formulario
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Obtener valores del formulario
    const email = document.getElementById('user_email').value.trim();
    const message = document.getElementById('user_message').value.trim();

    // Validar campos vacíos
    if (!email || !message) {
        alert("Please fill in all fields before submitting.");
        return; // Detiene el proceso si hay campos vacíos
    }

    // Enviar el correo usando EmailJS
    emailjs.send("service_5xj7n1b", "template_xlh9pjk", {
        user_email: email, // Variable que asocia al template
        user_message: message, // Variable que asocia al template
    })
        .then(function () {
            alert("Email sent successfully.");
            document.getElementById('contact-form').reset(); // Reinicia el formulario
        }, function (error) {
            alert("Error trying to send the email: " + JSON.stringify(error)); // Muestra error
        });
});
