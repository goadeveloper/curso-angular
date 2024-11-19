import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponenteEnLineaComponent } from "./componente-en-linea/componente-en-linea.component";
import { InterpolacionComponent } from "./interpolacion/interpolacion.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ComponenteEnLineaComponent, InterpolacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Hola mundo desde Angular';
}
