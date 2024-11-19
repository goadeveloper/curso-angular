import { Component } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.scss'
})
export class HijoComponent {

  private titulo = "Titulo Componente Hijo";

  // Getter de TypeScript
  get mostrarTitulo() : string {
    return this.titulo;
  }

  getTitulo() {
    return this.titulo;
  }
}
