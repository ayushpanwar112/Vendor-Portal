import { Routes } from '@angular/router';
import { ItemMappingComponent } from './pages/item-mapping/item-mapping.component';
import { UpdatePasswordComponent } from './pages/update-password/update-password.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { authGuard } from './core/guards/auth.guard'; // Import the AuthGuard

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
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard], // Protect this route
  },
  {
    path: 'item-mapping',
    component: ItemMappingComponent,
    canActivate: [authGuard], // Protect this route
  },
  {
    path: 'change-password',
    component: UpdatePasswordComponent,
    canActivate: [authGuard], // Protect this route
  },
  {
    path: 'purchase-order',
    loadComponent: () =>import('./pages/purchase-order/purchase-order.component').then(
      (c) => c.PurchaseOrderComponent
      ),
  }
];
