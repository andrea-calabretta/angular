import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  // private messageSource = new Subject<string>();
  private messageSource = new BehaviorSubject<string>('');

    currentMessage = this.messageSource.asObservable();// asObservable is used to expose the Subject as an Observable
  // This allows other components to subscribe to the Subject without being able to emit values themselves
  // This is a common pattern to prevent external components from emitting values directly
  // and to ensure that the Subject is only used for communication between components
  constructor() { }

  updateMessage = (message : string) =>
      this.messageSource.next(message)

  clearChannel = () =>
      this.messageSource.next('clear');
}
