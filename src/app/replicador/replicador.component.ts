import { Component } from '@angular/core';

@Component({
  selector: 'app-replicador',
  imports: [],
  templateUrl: './replicador.component.html',
  styleUrl: './replicador.component.scss'
})
export class ReplicadorComponent {
  texto: string = "";

  actualizarTexto(evento: Event) {
    const elementoInput = evento.target as HTMLInputElement;
    this.texto = elementoInput.value;
  }

}
