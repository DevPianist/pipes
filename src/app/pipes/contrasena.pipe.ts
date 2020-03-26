import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "contrasena"
})
export class ContrasenaPipe implements PipeTransform {
  transform(value: string, activar: true): string {
    return activar ? "*".repeat(value.length) : value;
  }
}
