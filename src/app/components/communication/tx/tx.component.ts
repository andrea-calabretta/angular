import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-tx',
  standalone: false,
  templateUrl: './tx.component.html',
  styleUrl: './tx.component.scss'
})
export class TxComponent {

  constructor(private _msgService: MessageService){}

  writeToChannel = ($event: KeyboardEvent) =>{
    let text = ($event.target as HTMLInputElement).value;
    if(text && $event.key === "Enter") {
      this._msgService.updateMessage(text);
    }
  }

  clearChannel = () => {
    this._msgService.clearChannel();
  }
}
