import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const ACCESS_TOKEN = localStorage.getItem('ACCESS_TOKEN')
  if(route.url[0].path == 'home' && ACCESS_TOKEN)  return inject(Router).createUrlTree(['/main']);
  if (ACCESS_TOKEN) return true;
  else return inject(Router).createUrlTree(['/login']);
};
