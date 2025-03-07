import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet, Router} from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  router = inject(Router);

  username = '';
  constructor(){
    const loggeduser = localStorage.getItem("AngularUser");
    if(loggeduser){
      this.username = loggeduser;
    }
  }


  onLogout(){
    localStorage.removeItem("AngularUser");
    this.router.navigate(['/login'])
  }
}
