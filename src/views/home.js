
export function renderHome() {
    const app = document.getElementById('app');
    app.innerHTML = `
    <section>
        <h2 class = "tittle">Bienvenido a Hero AI</h2>
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
        <ul class = "text-home">
            <li>Conversar, Habla con un superhéroe.</li>
            <li>Inteligencia Artificial, Obtén respuestas naturales.</li>
            <li>Elige un héroe, Vive una experiencia única.</li>
        </ul>
        </section>

    <section class = "container-all-superheroes">
        <div class = "container-chat-superhero">
            <button class="btn-start-chat" type="button">Hablar con Deadpool</button>
            <div class="gallery-superhero">
                <img src="./src/assets/imagenes/deadpool1.jpg" alt="deadpool">
                <img src="./src/assets/imagenes/deadpool2.jpg" alt="deadpool">
                <img src="./src/assets/imagenes/deadpool3.jpg" alt="deadpool">
            </div>
            <img class="super-hero-img" src="./src/assets/imagenes/deadpool.jpg" alt="Dealpool">
        </div> 

        <div class = "container-chat-superhero">
            <button class="btn-start-chat" type="button">Hablar con Wolverine</button>
            <div class="gallery-superhero">
                <img src="./src/assets/imagenes/wolverine1.jpg" alt="Wolverine">
                <img src="./src/assets/imagenes/wolverine2.png" alt="Wolverine">
                <img src="./src/assets/imagenes/wolverin.jpg" alt="Wolverine">
            </div>
            <img class="super-hero-img" src="./src/assets/imagenes/wolverine3.jpg" alt="Wolverine">
        </div> 

        <div class = "container-chat-superhero">
            <button class="btn-start-chat" type="button">Hablar con Venom</button>
            <div class="gallery-superhero">
                <img src="./src/assets/imagenes/venom.jpg" alt="Venom">
                <img src="./src/assets/imagenes/venom2.jpg" alt="Venom">
                <img src="./src/assets/imagenes/venom3.jpg" alt="Venom">
            </div>
            <img class="super-hero-img" src="./src/assets/imagenes/venom1.jpg" alt="Venom">
        </div> 
    </section>
        `;
}