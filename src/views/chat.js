import { initChat } from '../chat.js';
import { navigateTo } from '../router/router.js';
import { characters } from '../characters.js';

export function renderChat(character) {
    const personajeValido = characters[character] ? character : 'deadpool';
    const infoPersonaje = characters[personajeValido];

    const app = document.getElementById('app');
    app.innerHTML = `
    <section class="chat-layout">
        <div class="chat-main">
            <div class="chat_header">
                <img src="${infoPersonaje.image}" alt="${infoPersonaje.name}" class="chat_header-img">
                <h2>${infoPersonaje.name}</h2>
                <button class="main-characters" aria-label="Abrir menu">&#9660;</button>
                <aside class="chat-sidebar">
            ${Object.keys(characters).map(id => `
                <button
                    class="btn-switch-character ${id === personajeValido ? 'activo' : ''}"
                    data-character="${id}">
                    <img src="${characters[id].image}" alt="${characters[id].name}">
                    <span>${characters[id].name}</span>
                </button>
            `).join('')}
        </aside>
            </div>
            <div class="chat_ventana" id="chatVentana"></div>
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
        </div>

        
    </section>
    `;

    const botones = document.querySelectorAll('.btn-switch-character');
    botones.forEach(boton => {
        boton.addEventListener('click', () => {
            const personaje = boton.dataset.character;
            navigateTo(`/chat/${personaje}`);
        });
    });
const botonMenu = document.querySelector('.main-characters');
const panel = document.querySelector('.chat-sidebar');

botonMenu.addEventListener('click', () => {
    panel.classList.toggle('abierto');
});
    initChat(personajeValido);
}