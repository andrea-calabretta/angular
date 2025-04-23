import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-productlist',
  standalone: false,
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.scss'
})
export class ProductlistComponent {
  @Input() products : { name : string }[] = [];
  @Output() aggiunto = new EventEmitter<{ name: string }>();

  aggiungi(product: { name: string }) {
    this.aggiunto.emit(product);
  }
}
