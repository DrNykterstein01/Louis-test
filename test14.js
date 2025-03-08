export default class test14 {
    constructor(app) {
      this.app = app;
      this.test = document.getElementById("test14");
      this.boton14A = document.getElementById("boton14A");
      this.boton14A.onclick = () => {
        this.ocultar();
        this.app.test15.mostrar();
      };
      this.boton14B = document.getElementById("boton14B");
      this.boton14B.onclick = () => {
        this.ocultar();
        this.app.test15.mostrar();
      };
      this.boton14C = document.getElementById("boton14C");
      this.boton14C.onclick = () => {
        this.ocultar();
        this.app.test15.mostrar();
      };
      this.boton14D = document.getElementById("boton14D");
      this.boton14D.onclick = () => {
        this.ocultar();
        this.app.test15.mostrar();
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
  