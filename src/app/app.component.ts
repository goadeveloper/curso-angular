import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MostrarMensajeComponent } from "./mostrar-mensaje/mostrar-mensaje.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MostrarMensajeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Curso Angular';
}
