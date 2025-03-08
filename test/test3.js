export default class test3 {
    constructor(app) {
      this.app = app;
      this.test = document.getElementById("test3");
      this.boton3A = document.getElementById("boton3A");
      this.boton3A.onclick = () => {
        this.ocultar();
        this.app.test4.mostrar();
      };
      this.boton3B = document.getElementById("boton3B");
      this.boton3B.onclick = () => {
        this.ocultar();
        this.app.test4.mostrar();
      };
      this.boton3C = document.getElementById("boton3C");
      this.boton3C.onclick = () => {
        this.ocultar();
        this.app.test4.mostrar();
      };
      this.boton3D = document.getElementById("boton3D");
      this.boton3D.onclick = () => {
        this.ocultar();
        this.app.test4.mostrar();
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
  