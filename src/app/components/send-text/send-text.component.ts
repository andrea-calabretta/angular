import { Component, EventEmitter, Output } from '@angular/core';

/*
Obiettivo: @Output con payload
Il figlio contiene un campo di testo <input> e un bottone "Invia".
Quando viene cliccato, il valore digitato viene emesso verso il padre.
Il padre riceve il dato e lo visualizza in una lista sottostante.

*/


@Component({
  selector: 'app-send-text',
  standalone: false,
  templateUrl: './send-text.component.html',
  styleUrl: './send-text.component.scss'
})
export class SendTextComponent {
  valoreInput: string = '';

  @Output() inviaMessaggio = new EventEmitter<string>();

  invia() {
    if (this.valoreInput.trim()) {
      this.inviaMessaggio.emit(this.valoreInput);
      this.valoreInput = ''; // reset campo
    }
  }
}
