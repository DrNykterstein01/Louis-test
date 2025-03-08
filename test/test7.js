export default class test7 {
    constructor(app) {
      this.app = app;
      this.test = document.getElementById("test7");
      this.boton7A = document.getElementById("boton7A");
      this.boton7A.onclick = () => {
        this.ocultar();
        this.app.test8.mostrar();
      };
      this.boton7B = document.getElementById("boton7B");
      this.boton7B.onclick = () => {
        this.ocultar();
        this.app.test8.mostrar();
        this.app.contador.puntuacion++;
        this.app.contador.leerContador.textContent = this.app.contador.puntuacion;
      };
      this.boton7C = document.getElementById("boton7C");
      this.boton7C.onclick = () => {
        this.ocultar();
        this.app.test8.mostrar();
      };
      this.boton7D = document.getElementById("boton7D");
      this.boton7D.onclick = () => {
        this.ocultar();
        this.app.test8.mostrar();
      };
    }
    mostrar() {
      this.test.hidden = false;
    }
    ocultar() {
      this.test.hidden = true;
    }
  }
  