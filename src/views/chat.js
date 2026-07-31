export function renderChat() {
    document.querySelector('#app').innerHTML = `
    <section class = "container-all-superheroes">
        <div class = "container-chat-superhero">
            <h3> Chat con Deadpool</h3>
            <p class = "texto-superhero"> Deadpool, un desfigurado <br> e inmortal mercenario de Marvel, <br>
            famoso por su humor <br> negro, romper 
            la cuarta pared y <br> poseer un factor 
            de <br> curación indestructible. </p>
            <button class="start-chat" type="button">Hablar con Deadpool</button>
            <div class="gallery-superhero">
                <img src="./src/assets/imagenes/deadpool1.jpg" alt="deadpool">
                <img src="./src/assets/imagenes/deadpool2.jpg" alt="deadpool">
                <img src="./src/assets/imagenes/deadpool3.jpg" alt="deadpool">
            </div>
            <img class="super-hero" src="./src/assets/imagenes/deadpool.jpg" alt="Dealpool">
        </div> 

        <div class = "container-chat-superhero">
            <h3> Chat con Wolverine</h3>
            <p class = "texto-superhero"> Wolverine es un <br> rudo y solitario mutante de Marvel, <br>
            equipado con garras de <br> adamantium retráctiles, 
            <br> sentidos animales y un factor de curación<br> casi instantáneo. </p>
            <button class="start-chat" type="button">Hablar con Wolverine</button>
            <div class="gallery-superhero">
                <img src="./src/assets/imagenes/wolverine1.jpg" alt="Wolverine">
                <img src="./src/assets/imagenes/wolverine2.png" alt="Wolverine">
                <img src="./src/assets/imagenes/wolverin.jpg" alt="Wolverine">
            </div>
            <img class="super-hero" src="./src/assets/imagenes/wolverine3.jpg" alt="Wolverine">
        </div> 

        <div class = "container-chat-superhero">
            <h3> Chat con Venom</h3>
            <p class = "texto-superhero"> Venom, un monstruo violento <br> antihéroe 
            alienígena de Marvel,<br> 
            nacido de la fusión entre una <br> biomasa líquida 
            viviente y <br> un huésped humano.. </p>
            <button class="start-chat" type="button">Hablar con Venom</button>
            <div class="gallery-superhero">
                <img src="./src/assets/imagenes/venom.jpg" alt="Venom">
                <img src="./src/assets/imagenes/venom2.jpg" alt="Venom">
                <img src="./src/assets/imagenes/venom3.jpg" alt="Venom">
            </div>
            <img class="super-hero" src="./src/assets/imagenes/venom1.jpg" alt="Venom">
        </div> 
    </section>
    `;
}