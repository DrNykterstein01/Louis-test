export default class instrucciones {
    constructor(app) {
      this.app = app;
      this.vista = document.getElementById("instrucciones");
      this.botonI = document.getElementById("botonI");
      this.botonI.onclick = () => {
        this.ocultar();
        this.app.test1.mostrar();
        this.app.contador.tiempo();
      };
    }
    mostrar() {
      this.vista.hidden = false;
    }
    ocultar() {
      this.vista.hidden = true;
    }
  }
  