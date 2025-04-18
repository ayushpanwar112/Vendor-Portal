import { Routes } from '@angular/router';
import { ItemMappingComponent } from './pages/item-mapping/item-mapping.component';
import { UpdatePasswordComponent } from './pages/update-password/update-password.component';

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
    {path:'item-mapping',component:ItemMappingComponent},
    {path:'change-password',component:UpdatePasswordComponent},
];
