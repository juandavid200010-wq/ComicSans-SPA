// Toma todos los mensajes almacenados en memoria, limpia el chat y los vuelve a dibujar en pantalla.
const messages = [];
let currentCharacter = null;

export function addMessage(sender, text) {
    messages.push({ sender, text });
}

export function getMessages() {
    return messages;
}

export function resetMessages() {
    messages.splice(0, messages.length);
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
            body: JSON.stringify({ messages, character: currentCharacter })
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

export function initChat(character) {
    currentCharacter = character;
    resetMessages();
    renderMessages();

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