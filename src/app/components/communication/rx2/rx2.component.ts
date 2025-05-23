import { Component } from '@angular/core';
import { MessageService } from '../message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-rx2',
  standalone: false,
  templateUrl: './rx2.component.html',
  styleUrl: './rx2.component.scss'
})
export class Rx2Component {

  messages : string[] = [];
  subscription: Subscription | undefined;

  constructor(private _msgService : MessageService) { }


  startSubscription = () => {
    this.subscription = this._msgService.currentMessage.
    subscribe(
      (message: string) => {
        message === 'clear'
        ? this.messages = []
        : this.messages.push(message)
      }
    );
  }

  stopSubscription = () => {
    this.subscription?.unsubscribe();
  }
}
