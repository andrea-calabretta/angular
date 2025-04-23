import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone: false,
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {
  utente = { name: 'Mario', age: 30 };
  messaggi : string[] = [];
  products = [{ name : 'Mouse'}, { name : 'Tastiera' }, { name : 'Monitor' }];
  carrello: { name: string }[] = [];


  handlePurchase() {
    console.log("Acquisto Effettuato");
  }

  aggiungiMsg(messaggio: string) {
    this.messaggi.push(messaggio);
  }


  aggiungiAlCarrello(product: { name: string }) {
    this.carrello.push(product);
    console.log(product)
  }
}
