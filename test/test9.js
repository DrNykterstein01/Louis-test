export default class test9 {
    constructor(app) {
      this.app = app;
      this.test = document.getElementById("test9");
      this.boton9A = document.getElementById("boton9A");
      this.boton9A.onclick = () => {
        this.ocultar();
        this.app.test10.mostrar();
      };
      this.boton9B = document.getElementById("boton9B");
      this.boton9B.onclick = () => {
        this.ocultar();
        this.app.test10.mostrar();
      };
      this.boton9C = document.getElementById("boton9C");
      this.boton9C.onclick = () => {
        this.ocultar();
        this.app.test10.mostrar();
        this.app.contador.puntuacion++;
        this.app.contador.leerContador.textContent = this.app.contador.puntuacion;
      };
      this.boton9D = document.getElementById("boton9D");
      this.boton9D.onclick = () => {
        this.ocultar();
        this.app.test10.mostrar();
      };
    }
    mostrar() {
      this.test.hidden = false;
    }
    ocultar() {
      this.test.hidden = true;
    }
  }
  