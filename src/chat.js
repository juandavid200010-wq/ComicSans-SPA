// Toma todos los mensajes almacenados en memoria, limpia el chat y los vuelve a dibujar en pantalla.

const messages = [];

export function addMessage(sender, text) {
    messages.push({ sender, text });
}
export function getMessages() {
    return messages;
}
function renderMessages() {
    const chatVentana = document.getElementById('chatVentana');
    chatVentana.innerHTML = "";
    messages.forEach(message => {
        const mensaje = document.createElement('div');
        mensaje.classList.add('chat_mensaje', `chat_mensaje--${message.sender}`);
        mensaje.textContent = message.text;
        chatVentana.appendChild(mensaje);
    });
    chatVentana.scrollTop = chatVentana.scrollHeight;
}

async function getCharacterResponse() {
    const chatEscribiendo = document.getElementById('chatEscribiendo');
    const chatError = document.getElementById('chatError');
    chatError.hidden = true;
    chatEscribiendo.hidden = false;
    try {
        const response = await fetch('/api/functions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ messages })
        });
        if (!response.ok) {
            throw new Error('Error en la respuesta del servidor');
        }
        const data = await response.json();
        addMessage("character", data.text);
        renderMessages();
    } catch (error) {
        console.error("Error al obtener respuesta:", error);
        chatError.hidden = false;
    } finally {
        chatEscribiendo.hidden = true;
    }
}
// Capturar el mensaje del usuario, guardarlo en el historial y limpiar el campo de entrada
export function initChat() {
    const chatForm = document.getElementById("chatForm");
    const chatInput = document.getElementById("chatInput");

    chatForm.addEventListener("submit", async function(event) {
        event.preventDefault();
        const texto = chatInput.value.trim();
        if (texto === "") return;

        addMessage("user", texto);
        renderMessages();
        chatInput.value = "";

        await getCharacterResponse();
    });
}