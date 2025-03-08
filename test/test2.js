export default class test2 {
    constructor(app) {
      this.app = app;
      this.test = document.getElementById("test2");
      this.boton2A = document.getElementById("boton2A");
      this.boton2A.onclick = () => {
        this.ocultar();
        this.app.test3.mostrar();
        this.app.contador.puntuacion++;
        this.app.contador.leerContador.textContent = this.app.contador.puntuacion;
      };
      this.boton2B = document.getElementById("boton2B");
      this.boton2B.onclick = () => {
        this.ocultar();
        this.app.test3.mostrar();
      };
      this.boton2C = document.getElementById("boton2C");
      this.boton2C.onclick = () => {
        this.ocultar();
        this.app.test3.mostrar();
      };
      this.boton2D = document.getElementById("boton2D");
      this.boton2D.onclick = () => {
        this.ocultar();
        this.app.test3.mostrar();
      };
    }
    mostrar() {
      this.test.hidden = false;
    }
    ocultar() {
      this.test.hidden = true;
    }
  }
  