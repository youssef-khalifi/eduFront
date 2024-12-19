import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from "../services/auth.service";
import {inject} from "@angular/core";

export const authGuard: CanActivateFn = (route, state) => {

  const authservice = inject( AuthService);
  const router=inject(Router);
  let authenticated = authservice.isAuthenticated();


  if (!authenticated) {
    router.navigateByUrl('/login');
    return false;
  }

  return true;

};
