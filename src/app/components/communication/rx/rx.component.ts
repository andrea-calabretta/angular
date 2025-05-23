import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-rx',
  standalone: false,
  templateUrl: './rx.component.html',
  styleUrl: './rx.component.scss'
})
export class RxComponent {
  messages : string[] = [];
  subscription: Subscription | undefined;

  constructor(private _msgService : MessageService) { }

  ngOnInit(): void {
    this.subscription = this._msgService.currentMessage.
    subscribe(
      (message: string) => {
        message === 'clear'
        ? this.messages = []
        : this.messages.push(message)
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
