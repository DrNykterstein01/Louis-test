export default class test20 {
    constructor(app) {
      this.app = app;
      this.test = document.getElementById("test20");
      this.boton20A = document.getElementById("boton20A");
      this.boton20A.onclick = () => {
        this.ocultar();
        this.app.contador.puntuacion++;
        this.app.contador.leerContador.textContent = this.app.contador.puntuacion;
        clearTimeout(this.app.contador.tiempo());
        this.app.final.mostrar();
      };
      this.boton20B = document.getElementById("boton20B");
      this.boton20B.onclick = () => {
        this.ocultar();
        this.app.contador.puntuacion++;
        this.app.contador.leerContador.textContent = this.app.contador.puntuacion;
        clearTimeout(this.app.contador.tiempo());
        this.app.final.mostrar();
      };
      this.boton20C = document.getElementById("boton20C");
      this.boton20C.onclick = () => {
        this.ocultar();
        this.app.contador.puntuacion++;
        this.app.contador.leerContador.textContent = this.app.contador.puntuacion;
        clearTimeout(this.app.contador.tiempo());
        this.app.final.mostrar();
      };
      this.boton20D = document.getElementById("boton20D");
      this.boton20D.onclick = () => {
        this.ocultar();
        this.app.contador.puntuacion++;
        this.app.contador.leerContador.textContent = this.app.contador.puntuacion;
        clearTimeout(this.app.contador.tiempo());
        this.app.final.mostrar();
      };
    }
    mostrar() {
      this.test.hidden = false;
    }
    ocultar() {
      this.test.hidden = true;
    }
  }
  