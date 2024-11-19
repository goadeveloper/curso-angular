import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponenteEnLineaComponent } from "./componente-en-linea/componente-en-linea.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ComponenteEnLineaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'curso-angular';
}
