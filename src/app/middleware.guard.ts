import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const middlewareGuard: CanActivateFn = (route) => {
  const router = inject(Router);
  const isLoggedIn = !!window.localStorage.getItem('token'); // Cambiar 'userToken' a 'token'

  if (!isLoggedIn && route.routeConfig?.path !== 'register') {
    router.navigate(['/login']); // Redirect to login if not logged in and not accessing register
    return false;
  }

  return true;
};
