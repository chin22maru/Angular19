import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],  // template form
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  router = inject(Router);

  loginObj: UserLogin = new UserLogin();

  onLogin(){
    if(this.loginObj.username == 'admin' && this.loginObj.password == 'admin'){

      localStorage.setItem("AngularUser", this.loginObj.username);
      this.router.navigateByUrl('/directives');

    } else{
      alert("Wrong Credentials!")
    }
  }
}

export class UserLogin{
  username: string;
  password: string;

  constructor(){
    this.username = '';
    this.password = '';
  }
}

