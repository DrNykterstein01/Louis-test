export default class recompensasC {
    constructor(app) {
        this.app = app;
        this.vista = document.getElementById("recompensasC");
        this.recompensa1C = document.getElementById("recompensa1C");
        this.recompensa2C = document.getElementById("recompensa2C");
        this.recompensa3C = document.getElementById("recompensa3C");
    }
    mostrar() {
        this.vista.hidden = false;
        this.app.contador.divC.hidden = true;
    }
    ocultar() {
        this.vista.hidden = true;
    }
}