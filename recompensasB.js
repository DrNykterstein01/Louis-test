export default class recompensasB {
    constructor(app) {
        this.app = app;
        this.vista = document.getElementById("recompensasB");
        this.recompensa1B = document.getElementById("recompensa1B");
        this.recompensa2B = document.getElementById("recompensa2B");
        this.recompensa3B = document.getElementById("recompensa3B");
        this.recompensa4B = document.getElementById("recompensa4B");
        this.recompensa5B = document.getElementById("recompensa5B");
    }
    mostrar() {
        this.vista.hidden = false;
        this.app.contador.divC.hidden = true;
    }
    ocultar() {
        this.vista.hidden = true;
    }
}