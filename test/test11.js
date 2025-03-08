export default class test11 {
  constructor(app) {
    this.app = app;
    this.test = document.getElementById("test11");
    this.boton11A = document.getElementById("boton11A");
    this.boton11A.onclick = () => {
      this.ocultar();
      this.app.test12.mostrar();
      this.app.contador.puntuacion++;
      this.app.contador.leerContador.textContent = this.app.contador.puntuacion;
    };
    this.boton11B = document.getElementById("boton11B");
    this.boton11B.onclick = () => {
      this.ocultar();
      this.app.test12.mostrar();
    };
    this.boton11C = document.getElementById("boton11C");
    this.boton11C.onclick = () => {
      this.ocultar();
      this.app.test12.mostrar();
    };
    this.boton11D = document.getElementById("boton11D");
    this.boton11D.onclick = () => {
      this.ocultar();
      this.app.test12.mostrar();
    };
  }
  mostrar() {
    this.test.hidden = false;
  }
  ocultar() {
    this.test.hidden = true;
  }
}
