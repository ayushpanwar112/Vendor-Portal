import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MappingPageService {

  constructor() { }

  private formVisbilitySubject = new BehaviorSubject<boolean>(false);
  formVisibility$ = this.formVisbilitySubject.asObservable();

  openForm() {
    this.formVisbilitySubject.next(true);
  }
  
  closeForm(){
    this.formVisbilitySubject.next(false);
  }

  toggleForm() {
    const currentState = this.formVisbilitySubject.value;
    this.formVisbilitySubject.next(!currentState); // Toggle the current state
  }
}
