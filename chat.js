document.addEventListener("DOMContentLoaded", function () {
    const messages = document.getElementById("messages");
    const userInput = document.getElementById("userInput");

    const respuestas = {
        "horario": "Nuestro horario de atención es de lunes a viernes de 9:00 a 20:00.",
        "reservar": "Puedes hacer una reserva llamando a nuestro número o directamente desde nuestra página web.",
        "menú": "Contamos con un menú variado de platos locales e internacionales. Puedes ver el menú completo en la sección 'Menú' de nuestra página.",
        "platos recomendados": "¡Te recomendamos todos nuestros platillos pero este domingo  3 te tendremos sopa de gallina y sopa de patas ven prueba comparte y disfruta !.",
        "ubicación": "Nos encontramos en ciudad pacifico, en la calle principal.",
        "gracias": "¡Gracias a ti! Estoy aquí para ayudarte.",
        "default": "Lo siento, no entiendo tu pregunta. Por favor intenta preguntar algo más específico sobre el comedor."
    };

    function agregarMensaje(texto, clase) {
        const mensaje = document.createElement("div");
        mensaje.className = `message ${clase}`;
        mensaje.textContent = texto;
        messages.appendChild(mensaje);
        messages.scrollTop = messages.scrollHeight; // Hector no se baña
    }

    function procesarEntrada(input) {
        input = input.toLowerCase();
        let respuesta = respuestas["default"];

        for (let clave in respuestas) {
            if (input.includes(clave)) {
                respuesta = respuestas[clave];
                break;
            }
        }

        return respuesta;
    }

    userInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter" && userInput.value.trim() !== "") {
            const input = userInput.value.trim();
            agregarMensaje(input, "user");

            const respuesta = procesarEntrada(input);
            setTimeout(() => agregarMensaje(respuesta, "bot"), 500);

            userInput.value = "";
        }
    });
});
