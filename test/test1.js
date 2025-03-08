export default class test1 {
    constructor(app) {
      this.app = app;
      this.vista = document.getElementById("test1");
      this.boton1A = document.getElementById("boton1A");
      this.boton1A.onclick = () => {
        this.ocultar();
        this.app.test2.mostrar();
      };
      this.boton1B = document.getElementById("boton1B");
      this.boton1B.onclick = () => {
        this.ocultar();
        this.app.test2.mostrar();
      };
      this.boton1C = document.getElementById("boton1C");
      this.boton1C.onclick = () => {
        this.app.contador.puntuacion++;
        this.app.contador.leerContador.textContent = this.app.contador.puntuacion;
        this.ocultar();
        this.app.test2.mostrar();
      };
      this.boton1D = document.getElementById("boton1D");
      this.boton1D.onclick = () => {
        this.ocultar();
        this.app.test2.mostrar();
      };
    }
    mostrar() {
      this.vista.hidden = false;
    }
    ocultar() {
      this.vista.hidden = true;
    }
  }
  