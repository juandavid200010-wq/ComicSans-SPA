
export function renderHome() {
    const app = document.getElementById('app');
    app.innerHTML = `
    <section>
        <h2>Bienvenido a Hero AI</h2>
        <p class = "text-home"> Explora un mundo donde la inteligencia artificial da vida a tus superhéroes favoritos.</p>
        <video class="video-marvel-inico" autoplay muted loop playsinline> <source src="./src/assets/videos/Marvel-Opening.mp4">
            type="video/mp4">Tu navegador no soporta el video.
        </video>
        </section>
        <section>
        <p class = "text-home"> Explora un mundo donde la inteligencia artificial 
            da vida a tus superhéroes favoritos. Haz preguntas, recibe consejos y 
            disfruta conversaciones únicas con personajes inspirados en 
            el universo de Marvel.
        </p>
        <h2>¿Qué puedes hacer? </h2>
        <ul>
            <li>Conversar, Habla con un superhéroe.</li>
            <li>Inteligencia Artificial, Obtén respuestas naturales.</li>
            <li>Elige un héroe, Vive una experiencia única.</li>
        </ul>
        </section>
        <button class="start-btn" onclick="navigateTo('/chat')">Comenzar</button>
        `;
}