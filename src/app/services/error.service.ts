import { EventEmitter, Injectable, Output } from '@angular/core';
import { Error } from '../interfaces/error';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  @Output() errorOccurred = new EventEmitter<Error>();

  constructor() {
    this.errorOccurred.subscribe(error => {
      this.showError(error);
    });
  }

  private showError(error: Error): void {
    console.log(error);
  }
}
