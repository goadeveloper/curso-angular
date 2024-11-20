import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SaludarComponent } from "./saludar/saludar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SaludarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Curso Angular';
}
