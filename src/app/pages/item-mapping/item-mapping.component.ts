import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { MappingFormComponent } from '../../components/mapping-form/mapping-form.component';

@Component({
  selector: 'app-item-mapping',
  templateUrl: './item-mapping.component.html',
  styleUrls: ['./item-mapping.component.scss'],
  imports:[FormsModule,CommonModule,MappingFormComponent], // Import FormsModule for ngModel
})
export class ItemMappingComponent {
  searchTerm: string = '';
  showMappingForm: boolean = false; // Track visibility of the mapping form

  items = [
    {
      customerItemCode: 'C001',
      customerItemName: 'Sugar',
      vendorItemCode: 'V101',
      vendorItemName: 'Sweet White',
      product: 'Food'
    },
    {
      customerItemCode: 'C002',
      customerItemName: 'Salt',
      vendorItemCode: 'V102',
      vendorItemName: 'SaltyRock',
      product: 'Food'
    }
  ];

  filteredItems = [...this.items];

  applySearch() {
    const term = this.searchTerm.toLowerCase();
    this.filteredItems = this.items.filter(item =>
      Object.values(item).some(val =>
        val.toLowerCase().includes(term)
      )
    );
  }

  openFilterModal() {
    alert('Filter modal logic goes here');
  }

  toggleMappingForm() {
    this.showMappingForm = !this.showMappingForm; // Toggle the form visibility
  }

  editItem(item: any) {
    console.log('Editing item:', item);
  }

  deleteItem(item: any) {
    this.filteredItems = this.filteredItems.filter(i => i !== item);
  }
}
