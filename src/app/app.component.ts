import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common'; // Import NgIf for *ngIf

@Component({
  selector: 'app-root',
  standalone: true, // Mark this as a standalone component
  imports: [RouterOutlet, NavbarComponent, SidebarComponent, RouterModule,NgIf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isLoggedIn = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.isLoggedIn = !!localStorage.getItem('token'); // Check if the user is logged in
    });
  }

  title = 'Vendor-Portal';
}
