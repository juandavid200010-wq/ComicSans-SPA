export function renderChat() {
    document.querySelector('#app').innerHTML = `
    <section class = "container-all-superheroes">
        <div class = "container-chat-superhero">
            <h3> Chat con Deadpool</h3>
            <p class = "texto-superhero"> Deadpool, un desfigurado e inmortal mercenario de Marvel, 
            famoso por su humor negro, romper 
            la cuarta pared y poseer un factor 
            de curación indestructible. </p>
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
            <p class = "texto-superhero"> Wolverine es un rudo y solitario mutante de Marvel, 
            equipado con garras de adamantium retráctiles, 
            sentidos animales y un factor de curación casi instantáneo. </p>
            <button class="start-chat" type="button">Hablar con Wolverine</button>
            <div class="gallery-superhero">
                <img src="./src/assets/imagenes/deadpool.jpg" alt="Wolverine">
                <img src="./src/assets/imagenes/deadpool.jpg" alt="Wolverine">
                <img src="./src/assets/imagenes/deadpool.jpg" alt="Wolverine">
            </div>
            <img class="super-hero" src="./src/assets/imagenes/wolverin.jpg" alt="Wolverine">
        </div> 

        <div class = "container-chat-superhero">
            <h3> Chat con Venom</h3>
            <p class = "texto-superhero"> Venom, un monstruo violento antihéroe 
            alienígena de Marvel, 
            nacido de la fusión entre una biomasa líquida 
            viviente y un huésped humano.. </p>
            <button class="start-chat" type="button">Hablar con Venom</button>
            <div class="gallery-superhero">
                <img src="./src/assets/imagenes/deadpool.jpg" alt="Venom">
                <img src="./src/assets/imagenes/deadpool.jpg" alt="Venom">
                <img src="./src/assets/imagenes/deadpool.jpg" alt="Venom">
            </div>
            <img class="super-hero" src="./src/assets/imagenes/venom.jpg" alt="Venom">
        </div> 
    </section>
    `;
}