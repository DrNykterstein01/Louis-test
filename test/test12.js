export default class test12 {
    constructor(app) {
      this.app = app;
      this.test = document.getElementById("test12");
      this.boton12A = document.getElementById("boton12A");
      this.boton12A.onclick = () => {
        this.ocultar();
        this.app.test13.mostrar();
      };
      this.boton12B = document.getElementById("boton12B");
      this.boton12B.onclick = () => {
        this.ocultar();
        this.app.test13.mostrar();
      };
      this.boton12C = document.getElementById("boton12C");
      this.boton12C.onclick = () => {
        this.ocultar();
        this.app.test13.mostrar();
        this.app.contador.puntuacion++;
        this.app.contador.leerContador.textContent = this.app.contador.puntuacion;
      };
      this.boton12D = document.getElementById("boton12D");
      this.boton12D.onclick = () => {
        this.ocultar();
        this.app.test13.mostrar();
      };
    }
    mostrar() {
      this.test.hidden = false;
    }
    ocultar() {
      this.test.hidden = true;
    }
  }
  