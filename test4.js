export default class test4 {
    constructor(app) {
      this.app = app;
      this.contador = 0;
      this.test = document.getElementById("test4");
      this.boton4A = document.getElementById("boton4A");
      this.boton4A.onclick = () => {
        this.ocultar();
        this.app.test5.mostrar();
      };
      this.boton4B = document.getElementById("boton4B");
      this.boton4B.onclick = () => {
        this.ocultar();
        this.app.test5.mostrar();
      };
      this.boton4C = document.getElementById("boton4C");
      this.boton4C.onclick = () => {
        this.ocultar();
        this.app.test5.mostrar();
      };
      this.boton4D = document.getElementById("boton4D");
      this.boton4D.onclick = () => {
        this.app.contador.puntuacion++;
        this.app.contador.leerContador.textContent = this.app.contador.puntuacion;
        this.ocultar();
        this.app.test5.mostrar();
      };
    }
    mostrar() {
      this.test.hidden = false;
    }
    ocultar() {
      this.test.hidden = true;
    }
  }
  