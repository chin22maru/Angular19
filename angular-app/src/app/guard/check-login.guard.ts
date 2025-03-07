import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core'
// It was a service but Introduced as arrow function from Angular 16
export const checkLoginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const loggeduser = localStorage.getItem("AngularUser");
  if(loggeduser!=null) return true;
  else{
    router.navigateByUrl('/login');
    return false;
  }
};
