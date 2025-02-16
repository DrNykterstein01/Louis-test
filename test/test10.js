export default class test10 {
    constructor(app) {
      this.app = app;
      this.contador = 0;
      this.test = document.getElementById("test10");
      this.leerCodigo10 = document.getElementById("leerCodigo10");
      this.boton10 = document.getElementById("boton10");
      this.boton10.onclick = () => {
        if (this.leerCodigo10.value.toUpperCase() === "ALEJANDRO" ||
          this.leerCodigo10.value.toUpperCase() === "ALEJANDRO ") {
          this.ocultar();
          this.app.test11.mostrar();
          this.app.contador.puntuacion++;
          this.app.contador.leerContador.textContent =
            this.app.contador.puntuacion;
        }
      };
    }
    mostrar() {
      this.test.hidden = false;
    }
    ocultar() {
      this.test.hidden = true;
    }
  }
  