import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  imports: [],
  templateUrl: './interpolacion.component.html',
  styleUrl: './interpolacion.component.scss'
})
export class InterpolacionComponent {
  titulo = "Curso Angular";
  usuario = {
    nombre: "Pepito Pérez",
    edad: 35
  };

  saludar() {
    return `Hola, ${this.usuario.nombre}`;
  }
}
