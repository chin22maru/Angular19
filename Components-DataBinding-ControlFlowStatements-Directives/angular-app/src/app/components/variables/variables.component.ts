import { Component } from '@angular/core';


// Component Decorator
@Component({
  selector: 'app-variables',  // unique selector used to render this component
  imports: [],  // all imports required
  // standalone:true, // used for load the component without routing. but in Angular19 by default all components are standalone
  templateUrl: './variables.component.html', // html file for this component
  styleUrl: './variables.component.css'  // css file for this component
})

// Component class
export class VariablesComponent {
  // string, number, date, boolean

  fn: string = "chintan";
  ln: string = "m"

  mn: string;
  rn: number = 12.12;

  curDate: Date = new Date();
  isActive = true;

  student: any;
  dir = "hello";

  constructor(){
    this.mn = "cmm";
    this.rn = 143;

    this.student = "chin";
    this.student = 99;

    // this.dir = 34;
  }
}
