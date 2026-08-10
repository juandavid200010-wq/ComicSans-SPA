import { initChat } from '../chat.js'; // ajusta la ruta según dónde esté chat.js

export function renderChat() {
    document.querySelector('#app').innerHTML = `
    <section class="chat">
        <div class="chat_ventana" id="chatVentana">
            <!-- Los mensajes se insertan aquí dinámicamente con JS -->
        </div>
        <div class="chat_escribiendo" id="chatEscribiendo" hidden>
            <span></span><span></span><span></span>
        </div>
        <div class="chat_error" id="chatError" hidden>
            No se pudo enviar el mensaje. Intenta de nuevo.
        </div>
        <form class="chat_input" id="chatForm">
            <input
                type="text"
                id="chatInput"
                class="chat_input-campo"
                placeholder="Escribe tu mensaje..."
                autocomplete="off"
                required>
            <button type="submit" class="chat_input-boton" aria-label="Enviar mensaje">
            ➤
            </button>
        </form>
    </section>
    `;

    initChat();
}
