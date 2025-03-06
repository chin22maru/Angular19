import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VariablesComponent } from './components/variables/variables.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { DirectivesComponent } from './components/directives/directives.component';

@Component({
  selector: 'app-root',
  imports: [VariablesComponent, DataBindingComponent, DirectivesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-app';
}
