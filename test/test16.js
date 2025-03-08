export default class test16 {
    constructor(app) {
      this.app = app;
      this.test = document.getElementById("test16");
      this.boton16A = document.getElementById("boton16A");
      this.boton16A.onclick = () => {
        this.ocultar();
        this.app.test17.mostrar();
        this.app.contador.puntuacion++;
        this.app.contador.leerContador.textContent = this.app.contador.puntuacion;
      };
      this.boton16B = document.getElementById("boton16B");
      this.boton16B.onclick = () => {
        this.ocultar();
        this.app.test17.mostrar();
      };
      this.boton16C = document.getElementById("boton16C");
      this.boton16C.onclick = () => {
        this.ocultar();
        this.app.test17.mostrar();
      };
      this.boton16D = document.getElementById("boton16D");
      this.boton16D.onclick = () => {
        this.ocultar();
        this.app.test17.mostrar();
        this.app.contador.puntuacion++;
        this.app.contador.leerContador.textContent = this.app.contador.puntuacion;
      };
    }
    mostrar() {
      this.test.hidden = false;
    }
    ocultar() {
      this.test.hidden = true;
    }
  }
  