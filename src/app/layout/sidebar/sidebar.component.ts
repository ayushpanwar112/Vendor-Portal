import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MappingPageService } from '../../core/services/mapping-page.service';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule,RouterModule],
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {


  isCollapsed = true; // Sidebar starts collapsed
  isItemMappingOpen = false;
  isInvoicesOpen = false;
  isPaymentsOpen = false;

  constructor(private renderer: Renderer2,private mappingFormsSerivce: MappingPageService) {}

  toggleSidebar(event?: Event) {
    if (event) {
      event.stopPropagation();
    }
    this.isCollapsed = !this.isCollapsed;
    this.mappingFormsSerivce.closeForm();

    // Add or remove the collapsed class on the body
    if (this.isCollapsed) {
      this.renderer.addClass(document.body, 'sidebar-collapsed');
      // Close all submenus when collapsing
      this.isItemMappingOpen = true;
      this.isInvoicesOpen = false;
      this.isPaymentsOpen = false;
    } else {
      this.renderer.removeClass(document.body, 'sidebar-collapsed');
    }
  }

  preventCollapse(event: Event) {
    event.stopPropagation();
    if (event.target instanceof HTMLAnchorElement && event.target.getAttribute('href') === '#') {
      event.preventDefault();
    }
  }

  toggleItemMapping(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.isItemMappingOpen = !this.isItemMappingOpen; // Toggle the state
  }

  toggleInvoices(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.isInvoicesOpen = !this.isInvoicesOpen;
    // Close other open submenus
    /* if (this.isInvoicesOpen) {
      this.isItemMappingOpen = false;
      this.isPaymentsOpen = false;
    } */
  }

  togglePayments(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.isPaymentsOpen = !this.isPaymentsOpen;
    // Close other open submenus
    if (this.isPaymentsOpen) {
      this.isItemMappingOpen = false;
      this.isInvoicesOpen = false;
    }
  }




}
