import { Component } from '@angular/core';

@Component({
  selector: 'app-mostrar-mensaje',
  imports: [],
  templateUrl: './mostrar-mensaje.component.html',
  styleUrl: './mostrar-mensaje.component.scss'
})
export class MostrarMensajeComponent {

  mensaje: string = "";

  resetearMensaje() {
    this.mensaje = "";
  }

  mostrarMensaje() {
    this.mensaje = "Hola, haz hecho clic en el botón"
  }

}
