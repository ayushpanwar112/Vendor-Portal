import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavbarComponent,
    SidebarComponent,
  ]
})
export class LayoutModule { }
