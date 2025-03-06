import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {
  userForm: any = {
    fname: '',
    lname: '',
    username: '',
    city: '',
    state: '',
    zipcode: '',
    isAgree: false,
  }

  onSaveUser(){
    const formValues = this.userForm;
    debugger;
  }
}
