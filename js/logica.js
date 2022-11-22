var ventana = document.getElementById("ventana-flotante");
var instrumento = document.getElementById("contenedor-imagen");
var titulo = document.getElementById("titulo");
var descripcion = document.getElementById("descripcion");
var music;

var imagenes = ["./imagenes/arpa.jpg", "./imagenes/flauta.jpg", "./imagenes/trompeta.jpg", "./imagenes/tambor.jpg", "./imagenes/contrabajo.jpg"]
var sonidos = ["./sonidos/arpa.mp3", "./sonidos/Flauta.wav", "./sonidos/Trompeta.wav", "./sonidos/Tambor.wav", "./sonidos/Contrabajo.wav"]
var textos =   ["El arpa es un instrumento de cuerda pulsada formado por un marco resonante y una serie variable de cuerdas tensadas entre la sección inferior y la superior",
                "Se denomina flauta a un tipo de instrumento musical de viento. Por la sencillez de su construcción, puede que sea uno de los instrumentos más antiguos, pues con diversas formas se encuentra en todas las culturas.",
                "La trompeta es un instrumento musical de viento, que pertenece a la familia de los instrumentos de viento metal o metales, fabricado en aleación de metal",
                "Un tambor o tímpano es un instrumento de percusión de sonido indeterminado, donde el sonido se obtiene al golpear el instrumento en el parche con la mano o con baquetas.",
                "El contrabajo es un instrumento musical de cuerda frotada de tesitura grave. Suele tener cuatro cuerdas. El músico que toca el contrabajo recibe el nombre de contrabajista"]

document.getElementById("fondo-negro").addEventListener("click", cerarVentana);

function cerarVentana(){
    ventana.style.display = "none";
    if(isPlaying(music)){
        music.pause();
    }
}

function isPlaying(audelem) { return !audelem.paused; }

function mostrarContenido(imagen, moverImagen, nombre, texto, sonido){
    ventana.style.display = "flex";
    instrumento.style.backgroundImage = "url(" + imagenes[imagen] + ")";
    instrumento.style.backgroundPositionX = moverImagen;
    titulo.innerHTML = nombre;
    descripcion.innerHTML  = textos[texto];
    music = new Audio(sonidos[sonido]);
}

function reproducir(){
    music.play();
}