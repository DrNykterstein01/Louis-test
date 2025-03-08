export default class test19 {
    constructor(app) {
      this.app = app;
      this.test = document.getElementById("test19");
      this.boton19A = document.getElementById("boton19A");
      this.boton19A.onclick = () => {
        this.ocultar();
        this.app.test20.mostrar();
      };
      this.boton19B = document.getElementById("boton19B");
      this.boton19B.onclick = () => {
        this.ocultar();
        this.app.test20.mostrar();
      };
      this.boton19C = document.getElementById("boton19C");
      this.boton19C.onclick = () => {
        this.ocultar();
        this.app.test20.mostrar();
      };
      this.boton19D = document.getElementById("boton19D");
      this.boton19D.onclick = () => {
        this.ocultar();
        this.app.test20.mostrar();
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
  