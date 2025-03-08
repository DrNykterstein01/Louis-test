export default class test6 {
    constructor(app) {
      this.app = app;
      this.contador = 0;
      this.test = document.getElementById("test6");
      this.leerCodigo6 = document.getElementById("leerCodigo6");
      this.boton6 = document.getElementById("boton6");
      this.boton6.onclick = () => {
        if (
          this.leerCodigo6.value.toUpperCase() === "AMARO" ||
          this.leerCodigo6.value.toUpperCase() === "AMARO "
        ) {
          this.ocultar();
          this.app.test7.mostrar();
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
  