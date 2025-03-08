export default class recompensas {
    constructor(app) {
        this.app = app;
        this.vista = document.getElementById("recompensas");
        this.recompensa1 = document.getElementById("recompensa1");
        this.recompensa2 = document.getElementById("recompensa2");
        this.recompensa3 = document.getElementById("recompensa3");
        this.recompensa4 = document.getElementById("recompensa4");
        this.recompensa5 = document.getElementById("recompensa5");
        this.recompensa6 = document.getElementById("recompensa6");
    }
    mostrar() {
        this.vista.hidden = false;
        this.app.contador.divC.hidden = true;
    }
    ocultar() {
        this.vista.hidden = true;
    }
}