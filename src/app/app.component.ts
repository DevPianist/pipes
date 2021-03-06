import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  nombre: string = "Capitán América";
  nombre2: string = "OscAR SandRo";
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  personajes: string[] = ["Ironman", "Spiderman", "Thor", "Loki", "Groot"];
  PI: number = Math.PI;
  porcentaje: number = 0.234;
  salario: number = 1234.5;
  fecha: Date = new Date();
  activar: boolean = true;
  heroe = {
    nombre: "Logan",
    clave: "Wolverine",
    edad: 40,
    direccion: {
      calle: "Primera",
      casa: 10
    }
  };
  idioma: string = "en";
  cambiarIdioma(idioma: string) {
    this.idioma = idioma;
  }
  videoUrl: string = "https://www.youtube.com/embed/O-rhXZLtpv0";
  valorPromesa = new Promise<string>(resolve => {
    setTimeout(() => {
      resolve("data");
    }, 4500);
  });
}
