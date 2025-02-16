export default class resultados {
    constructor(app){
        this.app = app;
        this.vista = document.getElementById("resultados");
        this.texto = document.getElementById("texto");
        if (this.app.contador.puntuacion == 20) {
            this.texto.textContent = "WOW!!! Lograste responder todo correctamente, felicidades! Ahora podrás acceder a todos los secretos de la sala oculta. Disfrútalos!";
        } else if (this.app.contador.puntuacion < 20 && this.app.contador.puntuacion >= 15) {
            this.texto.textContent = "Muy bien! Has respondido" + this.app.contador.puntuacion + " preguntas correctamente. Ahora podrás acceder a la mayoría de las recompensas de la sala oculta. Disfrútalas!";
        } else if (this.app.contador.puntuacion < 15 && this.app.contador.puntuacion >= 10) {
            this.texto.textContent = "Buen trabajo! Has respondido" + this.app.contador.puntuacion + " preguntas correctamente. Ahora podrás acceder a algunas de las recompensas de la sala oculta. Disfrútalas!";
        } else if (this.app.contador.puntuación < 10) {
            this.texto.textContent = "Has respondido" + this.app.contador.puntuacion + " preguntas correctamente. Lamentablemente solo te puedo dar más recompensas si respondes 10 o más, pero igual hay una recompensa que puedes ver. Espero que te guste!";
        };
        this.botonR = document.getElementById("botonR");
        this.botonR.onclick = () => {
            this.ocultar();
            this.app.recompensas.mostrar();
         };
    }
    mostrar(){
        this.vista.hidden = false;
    }
    ocultar(){
        this.vista.hidden = true;
    }
}