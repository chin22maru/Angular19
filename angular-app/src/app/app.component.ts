import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VariablesComponent } from './components/variables/variables.component';

@Component({
  selector: 'app-root',
  imports: [VariablesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-app';
}
