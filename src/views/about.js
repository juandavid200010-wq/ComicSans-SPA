
export function renderAbout() {
    document.querySelector('#app').innerHTML = `
    <section>   
        <h2 class = "tittle-about">About</h2>
        <ul class = "texto-about">
            <li>Conversa con un superhéroe como si estuvieras frente a él.</li>
            <li>Cada respuesta es generada por inteligencia artificial.</li>
            <li>Las respuestas reflejan la personalidad, los valores y el estilo del héroe.</li>
            <li>Haz preguntas, pide consejos o habla sobre cualquier tema.</li>
            <li>Disfruta de conversaciones naturales con personajes ficticios.</li>
            <li>Vive una experiencia entretenida e interactiva.</li>
            <li>Descubre cómo la inteligencia artificial puede dar vida a tus héroes favoritos.</li>
            <li>Encuentra inspiración, curiosidad o simplemente diversión en cada conversación.</li>
        </ul>
    </section>

    <section class = "container-superheroes">
       
            <h2 class = "name-superhero">Deadpool</h2>
            <div class="container-superhero">
            <p class = "texto-superhero"> Deadpool, Wade Winston Wilson, conocido en los círculos militares 
            y del bajo mundo como Deadpool, es uno de los mercenarios y operativos encubiertos más formidables, 
            impredecibles y mentalmente inestables del planeta.<br> Su vida está marcada por la tragedia médica, 
            la tortura militar y una mutación genética forzada que lo convirtió en un ser prácticamente indestructible, 
            pero a un costo físico y psicológico devastador.
            </p>
            <div class="container-video">
                <video class="video-superhero" autoplay muted loop playsinline>
                    <source src="./src/assets/videos/deadpoolvideo.mp4" type="video/mp4">
                </video>
            </div>
            <p class = "texto-superhero">A primera vista, Wade Wilson es un hombre alto, 
                de complexión atlética y militar. Sin embargo, debajo de su uniforme táctico 
                rojo y negro, su cuerpo está completamente cubierto de severas lesiones 
                y cicatrices que asemejan quemaduras de tercer grado o un tejido tumoral expuesto.
            </p>
            <img class="img-superhero" src="./src/assets/imagenes/wadewilson3.jpg" alt="Wade Wilson">
            <p class = "texto-superhero-final">Esta desfiguración es el resultado de un cáncer terminal
                que mutó junto con sus células durante un experimento genético clandestino. 
                Su cuerpo está atrapado en un estado de agonía constante: 
                sus células cancerígenas mueren y se regeneran a una velocidad sobrehumana, 
                o que mantiene su piel permanentemente llagada y 
                le causa dolores crónicos que alteran su estabilidad mental.
            </p>
        </div>
            <h2 class = "name-superhero">Wolverine</h2>
            <div class="container-superhero">
            <p class = "texto-superhero"> Logan Howlett, conocido en los registros 
                de inteligencia militar bajo los alias de Logan o Wolverine, 
                es un mutante canadiense centenario, superviviente de múltiples 
                guerras mundiales y sujeto central del experimento genético más 
                destructivo de la Guerra Fría. Es un operativo táctico de élite cuya 
                longevidad y fisiología lo convierten en el rastreador y combatiente 
                cuerpo a cuerpo más letal del mundo.
            </p>
            <img class="img-superhero" src="./src/assets/imagenes/wolverine4.jpg" alt="Wolverine">
            <p class = "texto-superhero">Logan es un hombre 
                de baja estatura, complexión extremadamente 
                robusta y una densidad muscular muy superior a 
                la de cualquier atleta humano. Su rostro refleja 
                las cicatrices psicológicas de décadas de combate, enmarcado 
                por facciones duras y un vello facial espeso.
            </p>
            <img class="img-superhero" src="./src/assets/imagenes/wolverine5.jpg" alt="Wolverine">
            <p class = "texto-superhero-final">Su rasgo físico más imponente 
                y oculto es su esqueleto: cada uno de sus 
                huesos está completamente recubierto de 
                Adamantium, una aleación metálica artificial 
                prácticamente indestructible. Este metal añade 
                un peso aproximado de 50 kilos a su estructura, 
                lo que hace que sus golpes tengan un impacto cinético devastador.
            </p>
        </div>
    
            <h2 class = "name-superhero">Venom</h2>
            <div class="container-superhero">
            <p class = "texto-superhero"> Venom no es un individuo, sino una entidad biológica compuesta. 
                Es la fusión simbiótica entre Edward "Eddie" Brock, un ex-periodista de investigación caído 
                en desgracia, y un parásito amorfo de origen extraterrestre. Juntos operan como un organismo 
                híbrido que actúa en los márgenes de la ley, movidos por una agenda de venganza personal y 
                un violento sentido de protección hacia los inocentes.
            </p>
            <div class="container-video">
                <video class="video-superhero" autoplay muted loop playsinline> 
                    <source src="./src/assets/videos/venom.mp4" type="video/mp4">
                    Tu navegador no soporta el video.
                </video>
            </div>
            <p class = "texto-superhero">En su estado humano, 
                Eddie Brock es un hombre alto, corpulento y 
                con entrenamiento de gimnasio. Sin embargo, cuando 
                el organismo alienígena se manifiesta, su estructura 
                molecular cambia por completo.
            </p>
            <img class="img-superhero" src="./src/assets/imagenes/venom2.jpg" alt="Venom">
            <p class = "texto-superhero-final">Venom se transforma en una masa imponente de más de 
                dos metros de altura, con musculatura hipertrofiada y una piel 
                negra, viscosa y maleable que absorbe la luz. Su rostro es una 
                pesadilla biológica: grandes ojos blancos sin pupilas, una mandíbula 
                desencajada repleta de dientes afilados como navajas y una lengua 
                prensil y bífida de longitud anormal.
            </p>
        </div>
    </section>
    `;
}