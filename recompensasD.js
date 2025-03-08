export default class recompensasD {
    constructor(app) {
        this.app = app;
        this.vista = document.getElementById("recompensasD");
        this.recompensa1D = document.getElementById("recompensa1D");
    }
    mostrar() {
        this.vista.hidden = false;
        this.app.contador.divC.hidden = true;
    }
    ocultar() {
        this.vista.hidden = true;
    }
}