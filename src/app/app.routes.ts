import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/login/login.component').then((c) => c.LoginComponent),
  },
  {
    path: 'shopping-cart',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/shopping-cart/shopping-cart.component').then(
        (c) => c.ShoppingCartComponent
      ),
  },
];
