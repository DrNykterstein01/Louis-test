export default class test17 {
    constructor(app) {
      this.app = app;
      this.test = document.getElementById("test17");
      this.boton17A = document.getElementById("boton17A");
      this.boton17A.onclick = () => {
        this.ocultar();
        this.app.test18.mostrar();
      };
      this.boton17B = document.getElementById("boton17B");
      this.boton17B.onclick = () => {
        this.ocultar();
        this.app.test18.mostrar();
        this.app.contador.puntuacion++;
        this.app.contador.leerContador.textContent = this.app.contador.puntuacion;
      };
      this.boton17C = document.getElementById("boton17C");
      this.boton17C.onclick = () => {
        this.ocultar();
        this.app.test18.mostrar();
      };
      this.boton17D = document.getElementById("boton17D");
      this.boton17D.onclick = () => {
        this.ocultar();
        this.app.test18.mostrar();
      };
    }
    mostrar() {
      this.test.hidden = false;
    }
    ocultar() {
      this.test.hidden = true;
    }
  }
  