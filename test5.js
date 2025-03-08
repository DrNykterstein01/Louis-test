export default class test5 {
    constructor(app) {
      this.app = app;
      this.contador = 0;
      this.test = document.getElementById("test5");
      this.boton5A = document.getElementById("boton5A");
      this.boton5A.onclick = () => {
        this.ocultar();
        this.app.test6.mostrar();
      };
      this.boton5B = document.getElementById("boton5B");
      this.boton5B.onclick = () => {
        this.ocultar();
        this.app.test6.mostrar();
      };
      this.boton5C = document.getElementById("boton5C");
      this.boton5C.onclick = () => {
        this.app.contador.puntuacion++;
        this.app.contador.leerContador.textContent = this.app.contador.puntuacion;
        this.ocultar();
        this.app.test6.mostrar();
      };
      this.boton5D = document.getElementById("boton5D");
      this.boton5D.onclick = () => {
        this.ocultar();
        this.app.test6.mostrar();
      };
    }
    mostrar() {
      this.test.hidden = false;
    }
    ocultar() {
      this.test.hidden = true;
    }
  }
  