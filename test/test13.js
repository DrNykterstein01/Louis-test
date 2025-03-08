export default class test13 {
    constructor(app) {
      this.app = app;
      this.test = document.getElementById("test13");
      this.boton13A = document.getElementById("boton13A");
      this.boton13A.onclick = () => {
        this.ocultar();
        this.app.test14.mostrar();
        this.app.contador.puntuacion++;
        this.app.contador.leerContador.textContent = this.app.contador.puntuacion;
      };
      this.boton13B = document.getElementById("boton13B");
      this.boton13B.onclick = () => {
        this.ocultar();
        this.app.test14.mostrar();
      };
      this.boton13C = document.getElementById("boton13C");
      this.boton13C.onclick = () => {
        this.ocultar();
        this.app.test14.mostrar();
      };
      this.boton13D = document.getElementById("boton13D");
      this.boton13D.onclick = () => {
        this.ocultar();
        this.app.test14.mostrar();
      };
    }
    mostrar() {
      this.test.hidden = false;
    }
    ocultar() {
      this.test.hidden = true;
    }
  }
  