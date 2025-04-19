import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const isLoggedIn = !!localStorage.getItem('token'); // Check if the user is logged in
  if (!isLoggedIn) {
    const router = new Router();
    router.navigate(['/']); // Redirect to login page if not logged in
    return false;
  }
  return true;
};
