import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [CommonModule, FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  // for interpolation & property binding in from .ts to .html
  placeHolder: string = "Enter Course Name";
  courseName: string = "Angular";

  // from .html to .ts
  showAlertMsg(msg: string){
    debugger;
    alert(msg);
  }

  // two way
  isActive = true; // bind with checkbox value using ngModel

  options: string[] = ['Option 1', 'Option 2', 'Option 3'];

  onOptionSelected(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    const selectedOption = selectElement.value;
    alert(`Selected Option: ${selectedOption}`);
  }

}
