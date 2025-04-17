import { Component } from '@angular/core';
import { MappingPageService } from '../../core/services/mapping-page.service';

@Component({
  selector: 'app-mapping-form',
  templateUrl: './mapping-form.component.html',
  styleUrls: ['./mapping-form.component.scss'],
})
export class MappingFormComponent {

  constructor(private mappingFormsSerivce:MappingPageService) { }
  saveItem():void {
    
    console.log('Save button clicked');
    // Add logic to save the entered data
  }

  removeItem():void {
    console.log('Remove button clicked');
    // Add logic to remove the entered data
  }
  closeItem():void{
   this.mappingFormsSerivce.closeForm(); // Close the form  
  }
}
