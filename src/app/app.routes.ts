import { Routes } from '@angular/router';
import { ItemMappingComponent } from './pages/item-mapping/item-mapping.component';
import { UpdatePasswordComponent } from './pages/update-password/update-password.component';

export const routes: Routes = [
    {path:'item-mapping',component:ItemMappingComponent},
    {path:'change-password',component:UpdatePasswordComponent},
];
