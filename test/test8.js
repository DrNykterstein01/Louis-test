export default class test8 {
    constructor(app) {
      this.app = app;
      this.test = document.getElementById("test8");
      this.boton8A = document.getElementById("boton8A");
      this.boton8A.onclick = () => {
        this.ocultar();
        this.app.test9.mostrar();
        this.app.contador.puntuacion++;
        this.app.contador.leerContador.textContent = this.app.contador.puntuacion;
      };
      this.boton8B = document.getElementById("boton8B");
      this.boton8B.onclick = () => {
        this.ocultar();
        this.app.test9.mostrar();
      };
      this.boton8C = document.getElementById("boton8C");
      this.boton8C.onclick = () => {
        this.ocultar();
        this.app.test9.mostrar();
      };
      this.boton8D = document.getElementById("boton8D");
      this.boton8D.onclick = () => {
        this.ocultar();
        this.app.test9.mostrar();
      };
    }
    mostrar() {
      this.test.hidden = false;
    }
    ocultar() {
      this.test.hidden = true;
    }
  }
  