
export function renderAbout() {
    document.querySelector('#app').innerHTML = `
    <section>   
        <h2>About</h2>
        <ul>
            <li>Conversa con un superhéroe como si estuvieras frente a él.</li>
            <li>Cada respuesta es generada por inteligencia artificial.</li>
            <li>Las respuestas reflejan la personalidad, los valores y el estilo del héroe.</li>
            <li>Haz preguntas, pide consejos o habla sobre cualquier tema.</li>
            <li>Disfruta de conversaciones naturales con personajes ficticios.</li>
            <li>Vive una experiencia entretenida e interactiva.</li>
            <li>Descubre cómo la inteligencia artificial puede dar vida a tus héroes favoritos.</li>
            <li>Encuentra inspiración, curiosidad o simplemente diversión en cada conversación.</li>
        </ul>
        <button class="start-btn" onclick="navigateTo('/chat')">Comenzar</button>
    </section>`;
}