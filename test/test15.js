export default class test15 {
    constructor(app) {
      this.app = app;
      this.test = document.getElementById("test15");
      this.boton15A = document.getElementById("boton15A");
      this.boton15A.onclick = () => {
        this.ocultar();
        this.app.test16.mostrar();
      };
      this.boton15B = document.getElementById("boton15B");
      this.boton15B.onclick = () => {
        this.ocultar();
        this.app.test16.mostrar();
      };
      this.boton15C = document.getElementById("boton15C");
      this.boton15C.onclick = () => {
        this.ocultar();
        this.app.test16.mostrar();
        this.app.contador.puntuacion++;
        this.app.contador.leerContador.textContent = this.app.contador.puntuacion;
      };
      this.boton15D = document.getElementById("boton15D");
      this.boton15D.onclick = () => {
        this.ocultar();
        this.app.test16.mostrar();
      };
    }
    mostrar() {
      this.test.hidden = false;
    }
    ocultar() {
      this.test.hidden = true;
    }
  }
  