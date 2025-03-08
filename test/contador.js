export default class contador {
    constructor(app, t, p) {
      this.app = app;
      this.puntuacion = p;
      this.time = 180;
      this.timeout = t;
      this.leerContador = document.getElementById("leerContador");
      this.cronometro = document.getElementById("cronometro");
      this.divC = document.getElementById("divC");
    }
    tiempo() {
      this.divC.hidden = false;
      let intervalo;
      this.timeout = setTimeout(() => {
        if (this.cronometro.textContent === "Game Over") return 0;
        else if (this.app.recompensas.vista.hidden === false ||
          this.app.resultados.vista.hidden === false ||
          this.app.final.vista.hidden === false) return 0;
        else {
          this.app.test1.ocultar();
          this.app.test2.ocultar();
          this.app.test3.ocultar();
          this.app.test4.ocultar();
          this.app.test5.ocultar();
          this.app.test6.ocultar();
          this.app.test7.ocultar();
          this.app.test8.ocultar();
          this.app.test9.ocultar();
          this.app.test10.ocultar();
          this.app.test11.ocultar();
          this.app.test12.ocultar();
          this.app.test13.ocultar();
          this.app.test14.ocultar();
          this.app.test15.ocultar();
          this.app.test16.ocultar();
          this.app.test17.ocultar();
          this.app.test18.ocultar();
          this.app.test19.ocultar();
          this.app.test20.ocultar();
          this.app.out.mostrar();
        }
      }, 180000);
      this.cronometro.textContent = this.time;
      setInterval(() => {
        if (this.time == 0) {
          this.cronometro.textContent = "Game Over";
        }
        else if (this.app.final.vista.hidden === false) {
          this.cronometro.textContent = "Test finalizado";
        } else if (this.cronometro.textContent === "Game Over") {
          return 0;
        } else if (this.puntuacion == 20) {
          this.cronometro.textContent = "¡Bien hecho! ¡Felicidades!";
        } else {
          this.time--;
          this.cronometro.textContent = this.time;
        }
      }, 1000);
      if (this.time == 0) {
        clearInterval(intervalo);
      }
    }
  }
  