export default class out {
    constructor(app) {
      this.app = app;
      this.vista = document.getElementById("out");
      this.botonOut = document.getElementById("botonOut");
      this.botonOut.onclick = () => {
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
  