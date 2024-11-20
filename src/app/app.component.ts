import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReplicadorComponent } from "./replicador/replicador.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReplicadorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Curso Angular';
}
