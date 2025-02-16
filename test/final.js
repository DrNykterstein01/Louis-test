export default class final {
    constructor(app) {
      this.app = app;
      this.vista = document.getElementById("final");
      this.botonF = document.getElementById("botonF");
      this.botonF.onclick = () => {
        this.ocultar();
        this.app.resultados.mostrar();
      };
    }
    mostrar() {
      this.vista.hidden = false;
    }
    ocultar() {
      this.vista.hidden = true;
    }
  }
  