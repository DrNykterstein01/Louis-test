export default class test18 {
    constructor(app) {
      this.app = app;
      this.test = document.getElementById("test18");
      this.boton18A = document.getElementById("boton18A");
      this.boton18A.onclick = () => {
        this.ocultar();
        this.app.test19.mostrar();
      };
      this.boton18B = document.getElementById("boton18B");
      this.boton18B.onclick = () => {
        this.ocultar();
        this.app.test19.mostrar();
        this.app.contador.puntuacion++;
        this.app.contador.leerContador.textContent = this.app.contador.puntuacion;
      };
      this.boton18C = document.getElementById("boton18C");
      this.boton18C.onclick = () => {
        this.ocultar();
        this.app.test19.mostrar();
      };
      this.boton18D = document.getElementById("boton18D");
      this.boton18D.onclick = () => {
        this.ocultar();
        this.app.test19.mostrar();
      };
    }
    mostrar() {
      this.test.hidden = false;
    }
    ocultar() {
      this.test.hidden = true;
    }
  }
  