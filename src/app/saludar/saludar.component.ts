import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-saludar',
  imports: [FormsModule],
  templateUrl: './saludar.component.html',
  styleUrl: './saludar.component.scss'
})
export class SaludarComponent {

  saludo = "Saludo inicial";
  
}
